# Outlight Trade Program — Design Specification

## Overview

A B2B trade program for Outlight (premium ceramic & sandstone lighting) targeting interior designers, architects, contractors, hospitality buyers, and other business professionals. The program offers a flat 30% discount via Shopify Plus B2B catalogs, private concierge support, payment terms (Net 30/60), and a dedicated trade member portal.

## Architecture

### Components

1. **Shopify Theme** (`outlight-theme`) — Trade application page + conditional trade UI on storefront
2. **Backend API** (`shopify-ai-chatbot/apps/backend`, Railway) — New `/api/trade/*` routes for application processing, approval engine, Shopify B2B API orchestration
3. **Admin Dashboard** (`shopify-ai-chatbot/apps/admin`, Vercel) — New "Trade Program" section with applications inbox, member management, settings, analytics
4. **Trade Member Portal** (new Next.js app, Vercel) — Customer-facing dashboard with orders, concierge, resources. Auth via Shopify Customer Account OAuth.
5. **Shopify Plus B2B** — Companies, company locations, contacts, catalogs, price lists, payment terms

### Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS 4.0 (matches existing admin dashboard)
- **Backend**: Express.js, TypeScript (extends existing backend)
- **Database**: Supabase PostgreSQL (extends existing schema)
- **Auth (admin)**: Existing agent JWT system
- **Auth (trade portal)**: Shopify Customer Account OAuth
- **APIs**: Shopify Admin GraphQL API (B2B mutations), existing Supabase client
- **Email**: Resend API (existing per-brand configuration)
- **Deployment**: Railway (backend), Vercel (admin + portal)

## Data Model

### New Supabase Tables

#### `trade_applications`

| Column | Type | Notes |
|--------|------|-------|
| id | uuid, PK | |
| brand_id | uuid, FK to brands | |
| status | text | 'pending', 'approved', 'rejected' |
| full_name | text | Required |
| email | text | Required |
| phone | text | Required |
| company_name | text | Required |
| business_type | text | 'interior_designer', 'architect', 'contractor', 'hospitality', 'developer', 'other' |
| website_url | text | Required |
| project_description | text, nullable | Optional |
| referral_source | text, nullable | Optional |
| shopify_customer_id | text, nullable | Set on customer creation/lookup |
| shopify_company_id | text, nullable | Set on approval |
| auto_approved | boolean, default false | |
| reviewed_by | uuid, FK to agents, nullable | |
| reviewed_at | timestamptz, nullable | |
| rejection_reason | text, nullable | |
| metadata | jsonb | |
| created_at | timestamptz | |
| updated_at | timestamptz | |

#### `trade_members`

| Column | Type | Notes |
|--------|------|-------|
| id | uuid, PK | |
| brand_id | uuid, FK to brands | |
| application_id | uuid, FK to trade_applications | |
| status | text | 'active', 'suspended', 'revoked' |
| shopify_customer_id | text | |
| shopify_company_id | text | |
| company_name | text | |
| contact_name | text | |
| email | text | |
| phone | text | |
| business_type | text | |
| website_url | text | |
| payment_terms | text, default 'DUE_ON_FULFILLMENT' | 'DUE_ON_FULFILLMENT', 'NET_30', 'NET_60' |
| discount_code | text, nullable | Backup code if unique per-member |
| total_orders | integer, default 0 | Synced periodically |
| total_spent | numeric, default 0 | Synced periodically |
| notes | text, nullable | Admin notes |
| metadata | jsonb | |
| created_at | timestamptz | |
| updated_at | timestamptz | |

#### `trade_settings`

| Column | Type | Notes |
|--------|------|-------|
| id | uuid, PK | |
| brand_id | uuid, FK to brands, unique | |
| auto_approve_enabled | boolean, default true | |
| auto_approve_rules | jsonb | Default: website-based rule |
| default_discount_percent | integer, default 30 | |
| default_payment_terms | text, default 'DUE_ON_FULFILLMENT' | |
| welcome_email_template | text, nullable | |
| rejection_email_template | text, nullable | |
| discount_code | text, default 'TRADE30' | Shared segment-locked code |
| concierge_email | text, nullable | |
| ticket_priority_level | text, default 'high' | Priority for trade tickets |
| metadata | jsonb | |
| created_at | timestamptz | |
| updated_at | timestamptz | |

Default `auto_approve_rules`:
```json
{
  "rules": [
    {
      "id": "website_required",
      "field": "website_url",
      "condition": "is_not_empty",
      "enabled": true
    }
  ],
  "logic": "all"
}
```

**Data duplication note:** `trade_members` intentionally duplicates fields from `trade_applications` (company_name, email, etc.). `trade_members` is the source of truth for current member data (may be updated post-approval). `trade_applications` is the historical record of the original application.

#### `trade_activity_log`

| Column | Type | Notes |
|--------|------|-------|
| id | uuid, PK | |
| brand_id | uuid, FK | |
| member_id | uuid, FK, nullable | |
| application_id | uuid, FK, nullable | |
| event_type | text | 'application_submitted', 'auto_approved', 'manually_approved', 'rejected', 'member_suspended', 'member_revoked', 'settings_updated', 'concierge_request', etc. |
| actor | text | 'system', 'agent', 'customer' |
| actor_id | text, nullable | Agent ID or customer email |
| details | jsonb | |
| created_at | timestamptz | |

## API Routes

### Public (no auth)

**`POST /api/trade/apply`** — Submit trade application
- Body: `{ full_name, email, phone, company_name, business_type, website_url, project_description?, referral_source?, _honeypot? }`
- Brand resolution: via `resolveBrandId(req)` (consistent with existing pattern — uses request origin or explicit header)
- CSRF protection: validate `Origin` and `Referer` headers against known Shopify storefront domain for this brand
- Rate limiting: 5 requests per IP per 15 minutes (use `express-rate-limit` middleware)
- Flow:
  1. Validate required fields; reject if honeypot field is filled
  2. Check for duplicate application (same email + brand_id, pending/approved status)
     - If a **rejected** application exists for this email: allow re-application (creates new record, old one stays as historical)
     - If an **approved** application exists: return error "You are already a trade member"
  3. Look up existing Shopify customer by email (`customers(query: "email:{email}")` GraphQL query) — store `shopify_customer_id` if found, but do NOT create a customer yet
  4. Store application in `trade_applications` table (shopify_customer_id set if existing customer found, null otherwise)
  5. Run auto-approve rules from `trade_settings`
  6. If auto-approved: execute approval flow (see below — this is where Shopify customer creation happens)
  7. If not auto-approved: send "application received" confirmation email only
  8. Log to `trade_activity_log`
- Returns: `{ success: true, status: 'pending' | 'approved', message: string }`

**`POST /api/trade/status`** — Check application status (POST to prevent email in URL)
- Body: `{ email, token }` — token is a nonce issued at application time, stored in `trade_applications.metadata.status_token`
- Rate limiting: 10 requests per IP per 15 minutes
- Returns: `{ status: 'not_found' | 'pending' | 'approved' | 'rejected' }`

### Admin (agent JWT auth)

**`GET /api/trade/applications`** — List applications
- Query params: `status`, `business_type`, `page`, `limit`, `search`, `sort`
- Returns: paginated list with counts per status

**`GET /api/trade/applications/:id`** — Application detail
- Returns: full application data + Shopify customer profile if available

**`POST /api/trade/applications/:id/approve`** — Approve application
- Body: `{ payment_terms?: string, notes?: string }`
- Executes approval flow (see below)

**`POST /api/trade/applications/:id/reject`** — Reject application
- Body: `{ reason: string }`
- Updates status, sends rejection email, logs event

**`GET /api/trade/members`** — List trade members
- Query params: `status`, `business_type`, `page`, `limit`, `search`, `sort`

**`GET /api/trade/members/:id`** — Member detail
- Returns: member data + Shopify customer profile + order summary + activity log

**`PATCH /api/trade/members/:id`** — Update member
- Body: `{ status?, payment_terms?, notes? }`
- Status change flows:
  - **Suspend** (active → suspended):
    1. Remove catalog from company location via `catalogCompanyLocationRemove` mutation
    2. Remove customer tags (`trade-program`, `trade-{business_type}`) via `customerUpdate`
    3. Update customer metafield `trade_program.status` to 'suspended'
    4. Update `trade_members.status` to 'suspended'
    5. Send suspension notification email
    6. Log to `trade_activity_log`
  - **Revoke** (active/suspended → revoked):
    1. Same as suspend steps 1-3
    2. Additionally deactivate company via `companyUpdate` (note: "Trade revoked")
    3. Update `trade_members.status` to 'revoked'
    4. Send revocation email
    5. Log to `trade_activity_log`
  - **Reactivate** (suspended → active):
    1. Re-assign catalog to company location via `catalogCompanyLocationAdd` mutation
    2. Re-add customer tags via `customerUpdate`
    3. Update customer metafield `trade_program.status` to 'active'
    4. Update `trade_members.status` to 'active'
    5. Send reactivation welcome email
    6. Log to `trade_activity_log`
- Note: removing the `trade-program` tag automatically blocks the shared `TRADE30` discount code (segment-locked)

**`GET /api/trade/settings`** — Get settings

**`PATCH /api/trade/settings`** — Update settings
- Body: any `trade_settings` fields

**`GET /api/trade/analytics`** — Trade program stats
- Query params: `period` (7d, 30d, 90d, all — default 30d)
- Returns:
  - `total_members`: count from `trade_members` where active
  - `pending_applications`: count from `trade_applications` where pending
  - `trade_revenue`: sum of order totals from Shopify orders by trade-tagged customers in period (cached in member records, refreshed on demand)
  - `avg_order_value`: trade_revenue / order count
  - `applications_over_time`: array of `{ date, count }` for the period
  - `top_members`: top 5 by `total_spent` from `trade_members`
- Note: revenue data is periodically synced from Shopify (not real-time) to avoid excessive API calls. Sync triggered on member detail view or manual refresh.

### Trade Portal (Shopify OAuth)

**`GET /api/trade/portal/me`** — Current member profile
- Authenticated via Shopify OAuth token
- Verifies `trade-program` tag
- Returns: member profile, company info, discount code

**`GET /api/trade/portal/orders`** — B2B order history
- Fetches from Shopify API filtered by company
- Returns: orders with line items, totals, fulfillment status

**`POST /api/trade/portal/concierge`** — Submit concierge request
- Body: `{ subject, message, order_id?, category? }`
- Creates ticket in existing ticket system via `POST /api/tickets`
- Auto-sets priority to `trade_settings.ticket_priority_level`
- Adds `trade-concierge` tag to ticket
- Returns: `{ ticket_number, message }`

**`GET /api/trade/portal/resources`** — Trade resources
- Returns: list of downloadable resources (spec sheets, high-res images, price lists)
- Resources stored in Supabase storage or configured URLs in settings

## Approval Flow

When an application is approved (auto or manual), the backend executes this sequence:

1. **Create or find Shopify Customer**
   - If `application.shopify_customer_id` is set (existing customer found at application time): use it
   - If null: create customer via `customerCreate` mutation — Shopify sends activation email automatically
   - Update `trade_applications.shopify_customer_id` with the result

2. **Create Shopify Company** via `companyCreate` mutation
   - name: `application.company_name`
   - externalId: `TRADE-{application.id.slice(0,8)}`
   - note: business type + website
   - Note: `companyCreate` automatically creates a default company location

3. **Configure Default Company Location**
   - Use the default location returned by `companyCreate`
   - Set payment terms via `companyLocationAssignPaymentTerms` (from approval body or `trade_settings.default_payment_terms`)
   - Set billing address via `companyLocationAssignAddress` if provided

4. **Create Company Contact** via `companyContactCreate`
   - Links `application.shopify_customer_id` to the company
   - Role: 'Admin' (first contact for this company)

5. **Assign Existing Trade Catalog** to company location via `catalogCompanyLocationAdd`
   - Uses the pre-existing trade catalog ID stored in `trade_settings.metadata.shopify_catalog_id`
   - Do NOT create a new catalog — one shared catalog with the 30% price list is assigned to all trade company locations

6. **Update Customer** via `customerUpdate`
   - Add tags: `trade-program`, `trade-{business_type}`
   - Set metafields:
     - `trade_program.company_name`: company name
     - `trade_program.business_type`: business type
     - `trade_program.status`: 'active'
     - `trade_program.approved_date`: ISO date
     - `trade_program.member_id`: trade_members.id

7. **Create `trade_members` record** in Supabase
   - Store all Shopify IDs (customer, company) for future API calls

8. **Update `trade_applications`** — set status to 'approved', shopify_company_id

9. **Send welcome email** via Resend
   - Includes: account activation link (if new customer), trade code (TRADE30 backup), portal link, concierge contact info

10. **Log event** to `trade_activity_log`

## Shopify Theme Changes

### New Template: `templates/page.trade-program.json`

A page template for the trade program application. Uses a new section.

### New Section: `sections/trade-application.liquid`

The trade application page with:
- Hero area: headline, description of program benefits
- Benefits grid: 30% discount, concierge service, Net 30/60 terms, priority support
- Application form
- Form submits to backend via JavaScript (fetch to `/api/trade/apply`)
- Success/error states
- If customer is logged in and already a trade member, show "You're already a member" with link to portal

### Conditional Trade UI (existing sections)

Add Liquid conditionals to existing sections where relevant:

```liquid
{% if customer and customer.tags contains 'trade-program' %}
  <!-- Trade-specific content -->
{% endif %}
```

Locations:
- **Header**: Small "Trade Member" badge next to account icon
- **Product page**: "Trade pricing applied" indicator when B2B session active
- **Footer or account area**: Link to trade portal

## Admin Dashboard Pages

New pages added to `apps/admin/src/app/(dashboard)/trade/`:

### 1. Trade Overview (`/trade`)
- KPI cards: total members, pending applications, trade revenue (30d), avg trade order value
- Recent applications list (last 5)
- Quick actions: view all applications, view all members, settings

### 2. Applications (`/trade/applications`)
- Table view with columns: date, name, company, business type, website, status
- Filter tabs: All, Pending, Approved, Rejected
- Search by name, email, company
- Bulk actions: approve selected, reject selected
- Click row → application detail

### 3. Application Detail (`/trade/applications/[id]`)
- Full application info
- Shopify customer profile sidebar (if exists): order history, total spend, account status
- Website preview/link for verification
- Action buttons: Approve (with payment terms dropdown), Reject (with reason field)
- Activity log for this application

### 4. Members (`/trade/members`)
- Table view: name, company, type, status, orders, total spent, joined date
- Filter by status (active/suspended/revoked), business type
- Search
- Click row → member detail

### 5. Member Detail (`/trade/members/[id]`)
- Member profile with all fields
- Shopify data: order history, total spend, B2B company info
- Status management: suspend, revoke, reactivate
- Payment terms management
- Notes field
- Activity log
- Link to Shopify admin customer page

### 6. Settings (`/trade/settings`)
- **General**: discount percentage, shared discount code, default payment terms, concierge email
- **Auto-approve rules**: toggle on/off, rules builder
  - Each rule: field selector, condition, value
  - Available fields: website_url (is_not_empty, contains), business_type (equals, one_of)
  - Logic toggle: ALL rules must match vs ANY rule
  - Default: website-based (website_url is_not_empty), enabled
- **Emails**: welcome email template, rejection email template (with variable placeholders)
- **Support**: ticket priority level for trade members
- **Danger zone**: disable trade program

## Trade Member Portal

Separate Next.js app deployed on Vercel (frontend only — API calls proxy to Railway backend). Design matches Outlight brand aesthetic (minimal, warm, ceramic tones).

### Auth Flow

**Shopify Customer Account OAuth integration:**

1. Member visits portal URL (e.g., `trade.outlight.com`)
2. Clicks "Sign in with Shopify"
3. Redirected to Shopify Customer Account OAuth authorization endpoint
4. Member authenticates with their Shopify account credentials
5. Shopify redirects back to portal callback URL with authorization code
6. Portal exchanges code for access token via Shopify's token endpoint
7. Portal sends token to Railway backend: `POST /api/trade/portal/auth/verify`

**Backend token verification (`/api/trade/portal/auth/verify`):**
1. Validate the Shopify Customer Account API access token by calling Shopify's Customer Account API (`/customer` endpoint) to get customer data
2. Extract customer ID, email, and tags from the response
3. Verify customer has `trade-program` tag
4. Look up matching `trade_members` record with status 'active'
5. If all pass: issue a session JWT (signed with backend secret, 24h expiry) containing `{ customer_id, member_id, email, company_name }`
6. If suspended: show "Your trade account is currently suspended. Contact us for assistance."
7. If not a trade member: show "Not a trade member" with link to apply

**Subsequent requests:** Portal includes the session JWT in Authorization header for all `/api/trade/portal/*` calls. Backend middleware validates the JWT (same pattern as existing agent auth, but separate secret/issuer).

**Token refresh:** When the session JWT expires, the portal redirects back to the Shopify OAuth flow. No long-lived refresh tokens stored on the portal side.

### Pages

#### Dashboard Home (`/`)
- Welcome message with company name
- Quick stats: total orders, total savings, member since
- Trade discount code (TRADE30) with copy button
- Link to Outlight store
- Recent orders (last 3)
- Concierge CTA

#### Orders (`/orders`)
- B2B order history from Shopify API
- Columns: order number, date, items, total (trade price), status, tracking
- Click → order detail with line items, fulfillment tracking

#### Concierge (`/concierge`)
- Contact form: subject, message, related order (dropdown), category
- Submits to backend → creates priority ticket
- Past concierge requests with status
- Direct email link to concierge address

#### Resources (`/resources`)
- Downloadable trade resources:
  - Product spec sheets (PDF)
  - High-resolution product images
  - Price list / line sheet
  - Brand guidelines for client presentations
- Resources stored in Supabase storage bucket `trade-resources`
- Resource metadata stored in `trade_settings.metadata.resources` array:
  ```json
  [
    { "id": "uuid", "title": "Product Spec Sheets", "description": "...", "file_path": "trade-resources/specs.pdf", "category": "specs", "updated_at": "..." }
  ]
  ```
- Admin manages resources via Settings page (upload/delete/reorder)

#### Account (`/account`)
- Company information (read-only, contact admin to change)
- Payment terms display
- Team members (if multiple contacts on company)
- Link to Shopify account for password/address changes

## Support Integration

### Priority Flagging

Modify existing ticket creation logic in backend:

1. On ticket creation (any source: email, form, AI escalation):
   - Look up customer email against `trade_members` table
   - If match found and status is 'active':
     - Set ticket priority to `trade_settings.ticket_priority_level` (default: 'high')
     - Add tag `trade-member` to ticket
     - Add tag `trade-concierge` if from portal concierge form

2. In admin dashboard ticket list:
   - Trade member tickets show a visual indicator (badge/icon)
   - Filter option: "Trade members only"

### Concierge Flow

1. Trade member submits concierge form in portal
2. Portal calls `POST /api/trade/portal/concierge`
3. Backend creates ticket with:
   - source: 'form'
   - priority: from trade_settings (default 'high')
   - tags: ['trade-member', 'trade-concierge']
   - customer_email: member email
   - shopify_customer_id: from member record
   - metadata: `{ trade_member_id, company_name, business_type }`
4. Ticket appears in existing admin dashboard ticket inbox
5. VA sees trade member badge + company info in customer sidebar

## Shopify B2B Setup (One-Time)

Before the system goes live, these are configured once in Shopify Plus admin:

1. **Create Price List**: "Outlight Trade Program" — percentage adjustment: -30% on all products
2. **Create Catalog**: "Trade Catalog" — linked to trade price list, includes all products (or a curated subset)
3. **Create Customer Segment**: `customer_tags CONTAINS 'trade-program'`
4. **Create Discount Code**: `TRADE30` — 30% off, customer eligibility: trade-program segment only
5. **Store the catalog ID and price list ID** in trade_settings for API reference

The approval flow then assigns this existing catalog to each new company location.

### Discount Code vs B2B Catalog (Clarification)

The trade program uses **two complementary discount mechanisms**:

1. **B2B Price List (primary)** — When a trade member logs into their Shopify account, the B2B catalog automatically shows 30% off prices. No code needed. This is the primary, seamless experience.

2. **Segment-locked Discount Code `TRADE30` (fallback)** — For situations where B2B pricing doesn't apply:
   - Member shopping on a device where they're not logged in
   - Phone/email orders placed through the concierge service (draft orders)
   - Edge cases where B2B session isn't detected
   - The code only works for customers with the `trade-program` tag (segment-locked), so it cannot be abused by non-members

## Email Templates

### Email Template Format

Templates use HTML with `{{variable}}` interpolation syntax (same as Liquid-style, but rendered server-side by the backend). Stored as HTML strings in `trade_settings`.

**Available variables (all templates):**
- `{{full_name}}`, `{{company_name}}`, `{{email}}`
- `{{business_type}}`, `{{website_url}}`

**Additional variables for approval email:**
- `{{discount_code}}`, `{{portal_url}}`, `{{activation_url}}`
- `{{payment_terms}}`, `{{concierge_email}}`

**Additional variables for rejection email:**
- `{{rejection_reason}}`

### Application Received (confirmation)
- Subject: "We received your trade program application"
- Body: Thank you, we're reviewing your application, expect to hear back within 1-2 business days
- If auto-approve is on but didn't trigger: same message (don't reveal auto-approve logic)

### Application Approved (welcome)
- Subject: "Welcome to the Outlight Trade Program"
- Body: You've been approved, here's what you get:
  - 30% trade discount (auto-applied when logged in)
  - Backup code: TRADE30
  - Account activation link (if new customer)
  - Trade portal link
  - Concierge contact info
  - Payment terms info

### Application Rejected
- Subject: "Update on your Outlight trade program application"
- Body: Thank you for applying, at this time we're unable to approve your application. Reason (if provided). Encouragement to reapply or contact us.

### Member Suspended
- Subject: "Your Outlight trade account has been suspended"
- Body: Account temporarily suspended, contact us for more information

### Member Reactivated
- Subject: "Your Outlight trade account has been reactivated"
- Body: Welcome back, all trade benefits restored

## Security Considerations

- **Spam prevention**: Honeypot field on application form (matches existing contact form pattern)
- **Rate limiting**: `express-rate-limit` middleware
  - `/api/trade/apply`: 5 requests per IP per 15 minutes
  - `/api/trade/status`: 10 requests per IP per 15 minutes
  - `/api/trade/portal/*`: 60 requests per IP per minute
- **CSRF protection**: Validate `Origin` and `Referer` headers on public endpoints (`/api/trade/apply`, `/api/trade/status`) against known Shopify storefront domain for the resolved brand
- **Trade portal auth**: Shopify Customer Account OAuth → backend-issued session JWT (24h expiry). Triple verification: valid token + `trade-program` tag + active member record
- **Admin routes**: Existing agent JWT auth (no changes)
- **Discount code**: Segment-locked — `TRADE30` only works for customers in the `trade-program` segment. Removing the tag (on suspension/revocation) immediately blocks code usage. Shared code is acceptable because segment lock prevents unauthorized use.
- **CORS**: Portal domain (`trade.outlight.com`) whitelisted on backend alongside existing allowed origins
- **Data isolation**: All trade tables scoped by `brand_id` (multi-tenant safe)
- **Shopify customer creation deferred**: Customers are only created in Shopify upon approval, not at application time — prevents spam from polluting the Shopify customer database

### Database Constraints

- Partial unique index on `trade_applications(email, brand_id)` WHERE `status IN ('pending', 'approved')` — prevents duplicate active applications at the database level
- Unique index on `trade_members(email, brand_id)` WHERE `status = 'active'` — one active membership per email per brand
- Unique constraint on `trade_settings(brand_id)` — one settings record per brand

## Future Considerations (not in scope)

- Tiered trade program (Silver/Gold/Platinum with different discount levels)
- Trade-exclusive products (only visible in trade catalog)
- Volume pricing (quantity-based discounts beyond flat 30%)
- Referral bonuses for trade members
- Integration with accounting software for Net 30/60 invoicing
- Multi-location company management in portal
