# Trade Program Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete B2B trade program for Outlight using Shopify Plus B2B features, with application processing, admin management, and a trade member portal.

**Architecture:** Five subsystems built sequentially: (1) Database + Backend API on the existing Express backend, (2) Admin dashboard pages in the existing Next.js admin app, (3) Shopify theme application page, (4) Trade member portal as a new Next.js app, (5) Support system integration. Each subsystem produces working software independently.

**Tech Stack:** Express.js/TypeScript (backend), Next.js 15/React 19/Tailwind CSS 4.0 (admin + portal), Supabase PostgreSQL, Shopify Admin GraphQL API (B2B), Shopify Customer Account OAuth, Resend email, Liquid (theme).

**Spec:** `docs/superpowers/specs/2026-03-18-trade-program-design.md`

**Codebase locations:**
- Backend: `C:\Users\caabs\shopify-ai-chatbot\apps\backend\`
- Admin: `C:\Users\caabs\shopify-ai-chatbot\apps\admin\`
- Theme: `C:\Users\caabs\outlight-theme\`
- Portal: `C:\Users\caabs\shopify-ai-chatbot\apps\trade-portal\` (new)

---

## Phase 1: Database & Backend API

### Task 1: Database Migration — Create Trade Tables

**Files:**
- Create: `apps/backend/src/migrations/trade-program-tables.sql`

This SQL file is run manually against Supabase. It creates all four trade tables with constraints.

- [ ] **Step 1: Write the migration SQL**

```sql
-- Trade Program Tables
-- Run against Supabase SQL editor

-- 1. Trade Applications
CREATE TABLE IF NOT EXISTS trade_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  brand_id uuid NOT NULL REFERENCES brands(id),
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company_name text NOT NULL,
  business_type text NOT NULL CHECK (business_type IN ('interior_designer', 'architect', 'contractor', 'hospitality', 'developer', 'other')),
  website_url text NOT NULL,
  project_description text,
  referral_source text,
  shopify_customer_id text,
  shopify_company_id text,
  auto_approved boolean NOT NULL DEFAULT false,
  reviewed_by uuid REFERENCES agents(id),
  reviewed_at timestamptz,
  rejection_reason text,
  metadata jsonb DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Partial unique index: one pending/approved application per email per brand
CREATE UNIQUE INDEX idx_trade_applications_active_email
  ON trade_applications (email, brand_id)
  WHERE status IN ('pending', 'approved');

-- 2. Trade Members
CREATE TABLE IF NOT EXISTS trade_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  brand_id uuid NOT NULL REFERENCES brands(id),
  application_id uuid NOT NULL REFERENCES trade_applications(id),
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'suspended', 'revoked')),
  shopify_customer_id text NOT NULL,
  shopify_company_id text NOT NULL,
  company_name text NOT NULL,
  contact_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  business_type text NOT NULL,
  website_url text NOT NULL,
  payment_terms text NOT NULL DEFAULT 'DUE_ON_FULFILLMENT' CHECK (payment_terms IN ('DUE_ON_FULFILLMENT', 'NET_30', 'NET_60')),
  discount_code text,
  total_orders integer NOT NULL DEFAULT 0,
  total_spent numeric NOT NULL DEFAULT 0,
  notes text,
  metadata jsonb DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- One active member per email per brand
CREATE UNIQUE INDEX idx_trade_members_active_email
  ON trade_members (email, brand_id)
  WHERE status = 'active';

-- 3. Trade Settings
CREATE TABLE IF NOT EXISTS trade_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  brand_id uuid NOT NULL REFERENCES brands(id) UNIQUE,
  auto_approve_enabled boolean NOT NULL DEFAULT true,
  auto_approve_rules jsonb NOT NULL DEFAULT '{"rules":[{"id":"website_required","field":"website_url","condition":"is_not_empty","enabled":true}],"logic":"all"}',
  default_discount_percent integer NOT NULL DEFAULT 30,
  default_payment_terms text NOT NULL DEFAULT 'DUE_ON_FULFILLMENT',
  welcome_email_template text,
  rejection_email_template text,
  discount_code text NOT NULL DEFAULT 'TRADE30',
  concierge_email text,
  ticket_priority_level text NOT NULL DEFAULT 'high',
  metadata jsonb DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- 4. Trade Activity Log
CREATE TABLE IF NOT EXISTS trade_activity_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  brand_id uuid NOT NULL REFERENCES brands(id),
  member_id uuid REFERENCES trade_members(id),
  application_id uuid REFERENCES trade_applications(id),
  event_type text NOT NULL,
  actor text NOT NULL CHECK (actor IN ('system', 'agent', 'customer')),
  actor_id text,
  details jsonb DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Indexes for common queries
CREATE INDEX idx_trade_applications_brand_status ON trade_applications (brand_id, status);
CREATE INDEX idx_trade_applications_email ON trade_applications (email);
CREATE INDEX idx_trade_members_brand_status ON trade_members (brand_id, status);
CREATE INDEX idx_trade_members_email ON trade_members (email);
CREATE INDEX idx_trade_activity_log_brand ON trade_activity_log (brand_id, created_at DESC);
CREATE INDEX idx_trade_activity_log_member ON trade_activity_log (member_id, created_at DESC);
CREATE INDEX idx_trade_activity_log_application ON trade_activity_log (application_id, created_at DESC);

-- Insert default settings for Outlight brand
INSERT INTO trade_settings (brand_id)
VALUES ('883e4a28-9f2e-4850-a527-29f297d8b6f8')
ON CONFLICT (brand_id) DO NOTHING;
```

- [ ] **Step 2: Run migration against Supabase**

Run the SQL in Supabase SQL Editor or via CLI. Verify tables exist:
```sql
SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name LIKE 'trade_%';
```
Expected: 4 rows (trade_applications, trade_members, trade_settings, trade_activity_log)

- [ ] **Step 3: Commit**

```bash
git add apps/backend/src/migrations/trade-program-tables.sql
git commit -m "feat: add trade program database migration"
```

---

### Task 2: Trade Types

**Files:**
- Modify: `apps/backend/src/types/index.ts`

- [ ] **Step 1: Add trade program type definitions**

Append to the existing types file:

```typescript
// Trade Program Types

export interface TradeApplication {
  id: string;
  brand_id: string;
  status: 'pending' | 'approved' | 'rejected';
  full_name: string;
  email: string;
  phone: string;
  company_name: string;
  business_type: 'interior_designer' | 'architect' | 'contractor' | 'hospitality' | 'developer' | 'other';
  website_url: string;
  project_description: string | null;
  referral_source: string | null;
  shopify_customer_id: string | null;
  shopify_company_id: string | null;
  auto_approved: boolean;
  reviewed_by: string | null;
  reviewed_at: string | null;
  rejection_reason: string | null;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

export interface TradeMember {
  id: string;
  brand_id: string;
  application_id: string;
  status: 'active' | 'suspended' | 'revoked';
  shopify_customer_id: string;
  shopify_company_id: string;
  company_name: string;
  contact_name: string;
  email: string;
  phone: string;
  business_type: string;
  website_url: string;
  payment_terms: 'DUE_ON_FULFILLMENT' | 'NET_30' | 'NET_60';
  discount_code: string | null;
  total_orders: number;
  total_spent: number;
  notes: string | null;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

export interface TradeSettings {
  id: string;
  brand_id: string;
  auto_approve_enabled: boolean;
  auto_approve_rules: {
    rules: Array<{
      id: string;
      field: string;
      condition: string;
      value?: string;
      enabled: boolean;
    }>;
    logic: 'all' | 'any';
  };
  default_discount_percent: number;
  default_payment_terms: string;
  welcome_email_template: string | null;
  rejection_email_template: string | null;
  discount_code: string;
  concierge_email: string | null;
  ticket_priority_level: string;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

export interface TradeActivityLog {
  id: string;
  brand_id: string;
  member_id: string | null;
  application_id: string | null;
  event_type: string;
  actor: 'system' | 'agent' | 'customer';
  actor_id: string | null;
  details: Record<string, unknown>;
  created_at: string;
}
```

- [ ] **Step 2: Commit**

```bash
git add apps/backend/src/types/index.ts
git commit -m "feat: add trade program type definitions"
```

---

### Task 3: Trade Service — Core CRUD

**Files:**
- Create: `apps/backend/src/services/trade.service.ts`

This service handles all database operations for the trade program.

- [ ] **Step 1: Create the trade service with application CRUD**

```typescript
import { supabase } from '../config/supabase.js';
import { TradeApplication, TradeMember, TradeSettings, TradeActivityLog } from '../types/index.js';

// ========== ACTIVITY LOG ==========

async function logTradeEvent(data: {
  brand_id: string;
  member_id?: string;
  application_id?: string;
  event_type: string;
  actor: 'system' | 'agent' | 'customer';
  actor_id?: string;
  details?: Record<string, unknown>;
}): Promise<void> {
  const { error } = await supabase.from('trade_activity_log').insert({
    brand_id: data.brand_id,
    member_id: data.member_id || null,
    application_id: data.application_id || null,
    event_type: data.event_type,
    actor: data.actor,
    actor_id: data.actor_id || null,
    details: data.details || {},
  });
  if (error) console.error('[trade.service] logTradeEvent error:', error.message);
}

// ========== SETTINGS ==========

export async function getTradeSettings(brandId: string): Promise<TradeSettings> {
  const { data, error } = await supabase
    .from('trade_settings')
    .select('*')
    .eq('brand_id', brandId)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      // No settings yet — create default
      const { data: created, error: createErr } = await supabase
        .from('trade_settings')
        .insert({ brand_id: brandId })
        .select()
        .single();
      if (createErr) throw new Error('Failed to create trade settings');
      return created as TradeSettings;
    }
    throw new Error('Failed to fetch trade settings');
  }
  return data as TradeSettings;
}

export async function updateTradeSettings(
  brandId: string,
  updates: Partial<TradeSettings>,
  actorId?: string
): Promise<TradeSettings> {
  const { data, error } = await supabase
    .from('trade_settings')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('brand_id', brandId)
    .select()
    .single();

  if (error) throw new Error('Failed to update trade settings');

  await logTradeEvent({
    brand_id: brandId,
    event_type: 'settings_updated',
    actor: 'agent',
    actor_id: actorId,
    details: { updates },
  });

  return data as TradeSettings;
}

// ========== APPLICATIONS ==========

export async function createApplication(data: {
  brand_id: string;
  full_name: string;
  email: string;
  phone: string;
  company_name: string;
  business_type: string;
  website_url: string;
  project_description?: string;
  referral_source?: string;
  shopify_customer_id?: string;
  metadata?: Record<string, unknown>;
}): Promise<TradeApplication> {
  const { data: app, error } = await supabase
    .from('trade_applications')
    .insert({
      brand_id: data.brand_id,
      full_name: data.full_name,
      email: data.email.toLowerCase().trim(),
      phone: data.phone,
      company_name: data.company_name,
      business_type: data.business_type,
      website_url: data.website_url,
      project_description: data.project_description || null,
      referral_source: data.referral_source || null,
      shopify_customer_id: data.shopify_customer_id || null,
      metadata: data.metadata || {},
    })
    .select()
    .single();

  if (error) {
    if (error.code === '23505') {
      throw new Error('An application with this email is already pending or approved');
    }
    throw new Error('Failed to create application: ' + error.message);
  }

  await logTradeEvent({
    brand_id: data.brand_id,
    application_id: app.id,
    event_type: 'application_submitted',
    actor: 'customer',
    actor_id: data.email,
    details: { company_name: data.company_name, business_type: data.business_type },
  });

  return app as TradeApplication;
}

export async function getApplication(id: string): Promise<TradeApplication | null> {
  const { data, error } = await supabase
    .from('trade_applications')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    if (error.code === 'PGRST116') return null;
    throw new Error('Failed to fetch application');
  }
  return data as TradeApplication;
}

export async function listApplications(filters: {
  brand_id: string;
  status?: string;
  business_type?: string;
  search?: string;
  page?: number;
  limit?: number;
  sort?: string;
  order?: 'asc' | 'desc';
}): Promise<{ applications: TradeApplication[]; total: number; page: number; totalPages: number }> {
  const page = filters.page || 1;
  const limit = filters.limit || 20;
  const offset = (page - 1) * limit;

  let query = supabase
    .from('trade_applications')
    .select('*', { count: 'exact' })
    .eq('brand_id', filters.brand_id);

  if (filters.status) query = query.eq('status', filters.status);
  if (filters.business_type) query = query.eq('business_type', filters.business_type);
  if (filters.search) {
    query = query.or(
      `full_name.ilike.%${filters.search}%,email.ilike.%${filters.search}%,company_name.ilike.%${filters.search}%`
    );
  }

  const sortField = filters.sort || 'created_at';
  const sortOrder = filters.order === 'asc' ? true : false;
  query = query.order(sortField, { ascending: sortOrder }).range(offset, offset + limit - 1);

  const { data, error, count } = await query;
  if (error) throw new Error('Failed to list applications');

  const total = count || 0;
  return {
    applications: (data || []) as TradeApplication[],
    total,
    page,
    totalPages: Math.ceil(total / limit),
  };
}

export async function updateApplication(
  id: string,
  updates: Partial<TradeApplication>
): Promise<TradeApplication> {
  const { data, error } = await supabase
    .from('trade_applications')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();

  if (error) throw new Error('Failed to update application');
  return data as TradeApplication;
}

// ========== MEMBERS ==========

export async function createMember(data: {
  brand_id: string;
  application_id: string;
  shopify_customer_id: string;
  shopify_company_id: string;
  company_name: string;
  contact_name: string;
  email: string;
  phone: string;
  business_type: string;
  website_url: string;
  payment_terms?: string;
}): Promise<TradeMember> {
  const { data: member, error } = await supabase
    .from('trade_members')
    .insert({
      brand_id: data.brand_id,
      application_id: data.application_id,
      shopify_customer_id: data.shopify_customer_id,
      shopify_company_id: data.shopify_company_id,
      company_name: data.company_name,
      contact_name: data.contact_name,
      email: data.email.toLowerCase().trim(),
      phone: data.phone,
      business_type: data.business_type,
      website_url: data.website_url,
      payment_terms: data.payment_terms || 'DUE_ON_FULFILLMENT',
    })
    .select()
    .single();

  if (error) throw new Error('Failed to create member: ' + error.message);

  await logTradeEvent({
    brand_id: data.brand_id,
    member_id: member.id,
    application_id: data.application_id,
    event_type: 'member_created',
    actor: 'system',
    details: { company_name: data.company_name },
  });

  return member as TradeMember;
}

export async function getMember(id: string): Promise<TradeMember | null> {
  const { data, error } = await supabase
    .from('trade_members')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    if (error.code === 'PGRST116') return null;
    throw new Error('Failed to fetch member');
  }
  return data as TradeMember;
}

export async function getMemberByEmail(email: string, brandId: string): Promise<TradeMember | null> {
  const { data, error } = await supabase
    .from('trade_members')
    .select('*')
    .eq('email', email.toLowerCase().trim())
    .eq('brand_id', brandId)
    .eq('status', 'active')
    .maybeSingle();

  if (error) throw new Error('Failed to fetch member by email');
  return data as TradeMember | null;
}

export async function listMembers(filters: {
  brand_id: string;
  status?: string;
  business_type?: string;
  search?: string;
  page?: number;
  limit?: number;
  sort?: string;
  order?: 'asc' | 'desc';
}): Promise<{ members: TradeMember[]; total: number; page: number; totalPages: number }> {
  const page = filters.page || 1;
  const limit = filters.limit || 20;
  const offset = (page - 1) * limit;

  let query = supabase
    .from('trade_members')
    .select('*', { count: 'exact' })
    .eq('brand_id', filters.brand_id);

  if (filters.status) query = query.eq('status', filters.status);
  if (filters.business_type) query = query.eq('business_type', filters.business_type);
  if (filters.search) {
    query = query.or(
      `contact_name.ilike.%${filters.search}%,email.ilike.%${filters.search}%,company_name.ilike.%${filters.search}%`
    );
  }

  const sortField = filters.sort || 'created_at';
  const sortOrder = filters.order === 'asc' ? true : false;
  query = query.order(sortField, { ascending: sortOrder }).range(offset, offset + limit - 1);

  const { data, error, count } = await query;
  if (error) throw new Error('Failed to list members');

  const total = count || 0;
  return {
    members: (data || []) as TradeMember[],
    total,
    page,
    totalPages: Math.ceil(total / limit),
  };
}

export async function updateMember(
  id: string,
  updates: Partial<TradeMember>,
  actorId?: string
): Promise<TradeMember> {
  const { data, error } = await supabase
    .from('trade_members')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();

  if (error) throw new Error('Failed to update member');
  return data as TradeMember;
}

// ========== ACTIVITY LOG ==========

export async function getActivityLog(filters: {
  brand_id: string;
  member_id?: string;
  application_id?: string;
  limit?: number;
}): Promise<TradeActivityLog[]> {
  let query = supabase
    .from('trade_activity_log')
    .select('*')
    .eq('brand_id', filters.brand_id)
    .order('created_at', { ascending: false })
    .limit(filters.limit || 50);

  if (filters.member_id) query = query.eq('member_id', filters.member_id);
  if (filters.application_id) query = query.eq('application_id', filters.application_id);

  const { data, error } = await query;
  if (error) throw new Error('Failed to fetch activity log');
  return (data || []) as TradeActivityLog[];
}

// ========== ANALYTICS ==========

export async function getTradeAnalytics(brandId: string, period: string = '30d'): Promise<{
  total_members: number;
  pending_applications: number;
  total_trade_revenue: number;
  avg_order_value: number;
  top_members: TradeMember[];
}> {
  const [membersResult, applicationsResult, topMembersResult] = await Promise.all([
    supabase.from('trade_members').select('*', { count: 'exact' }).eq('brand_id', brandId).eq('status', 'active'),
    supabase.from('trade_applications').select('*', { count: 'exact' }).eq('brand_id', brandId).eq('status', 'pending'),
    supabase.from('trade_members').select('*').eq('brand_id', brandId).eq('status', 'active').order('total_spent', { ascending: false }).limit(5),
  ]);

  const members = (topMembersResult.data || []) as TradeMember[];
  const totalRevenue = members.reduce((sum, m) => sum + Number(m.total_spent), 0);
  const totalOrders = members.reduce((sum, m) => sum + m.total_orders, 0);

  return {
    total_members: membersResult.count || 0,
    pending_applications: applicationsResult.count || 0,
    total_trade_revenue: totalRevenue,
    avg_order_value: totalOrders > 0 ? totalRevenue / totalOrders : 0,
    top_members: members,
  };
}

export { logTradeEvent };
```

- [ ] **Step 2: Commit**

```bash
git add apps/backend/src/services/trade.service.ts
git commit -m "feat: add trade program service with CRUD operations"
```

---

### Task 4: Shopify B2B Service

**Files:**
- Create: `apps/backend/src/services/trade-shopify.service.ts`

Handles all Shopify Plus B2B API calls (company creation, catalog assignment, customer management).

- [ ] **Step 1: Create the Shopify B2B service**

```typescript
// Reuse the existing graphql helper from shopify-admin.service.ts
// First, export the `graphql` function from shopify-admin.service.ts if not already exported.
// Then import it here:
import { graphql as shopifyGraphQL } from './shopify-admin.service.js';

// ========== CUSTOMER OPERATIONS ==========

export async function findCustomerByEmail(
  email: string,
  brandId?: string
): Promise<{ id: string; tags: string[] } | null> {
  const data = await shopifyGraphQL<{
    customers: { edges: Array<{ node: { id: string; tags: string[] } }> };
  }>(
    `query($query: String!) {
      customers(first: 1, query: $query) {
        edges { node { id tags } }
      }
    }`,
    { query: `email:${email}` },
    brandId
  );

  const customer = data.customers.edges[0]?.node;
  return customer || null;
}

export async function createCustomer(
  input: { firstName: string; lastName: string; email: string; phone?: string },
  brandId?: string
): Promise<{ id: string }> {
  const data = await shopifyGraphQL<{
    customerCreate: { customer: { id: string } | null; userErrors: Array<{ message: string }> };
  }>(
    `mutation($input: CustomerInput!) {
      customerCreate(input: $input) {
        customer { id }
        userErrors { message }
      }
    }`,
    {
      input: {
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        phone: input.phone,
        emailMarketingConsent: { marketingState: 'SUBSCRIBED' },
      },
    },
    brandId
  );

  if (data.customerCreate.userErrors.length > 0) {
    throw new Error(`Customer creation failed: ${data.customerCreate.userErrors[0].message}`);
  }
  if (!data.customerCreate.customer) {
    throw new Error('Customer creation returned null');
  }
  return data.customerCreate.customer;
}

export async function updateCustomerTags(
  customerId: string,
  tags: string[],
  metafields: Array<{ namespace: string; key: string; value: string; type: string }>,
  brandId?: string
): Promise<void> {
  await shopifyGraphQL(
    `mutation($input: CustomerInput!) {
      customerUpdate(input: $input) {
        customer { id }
        userErrors { message }
      }
    }`,
    {
      input: {
        id: customerId,
        tags,
        metafields: metafields.map((m) => ({
          namespace: m.namespace,
          key: m.key,
          value: m.value,
          type: m.type,
        })),
      },
    },
    brandId
  );
}

export async function removeCustomerTags(
  customerId: string,
  tagsToRemove: string[],
  brandId?: string
): Promise<void> {
  await shopifyGraphQL(
    `mutation($id: ID!, $tags: [String!]!) {
      tagsRemove(id: $id, tags: $tags) {
        userErrors { message }
      }
    }`,
    { id: customerId, tags: tagsToRemove },
    brandId
  );
}

// ========== B2B COMPANY OPERATIONS ==========

export async function createCompany(
  input: { name: string; externalId: string; note?: string },
  brandId?: string
): Promise<{ companyId: string; locationId: string }> {
  const data = await shopifyGraphQL<{
    companyCreate: {
      company: { id: string; locations: { edges: Array<{ node: { id: string } }> } } | null;
      userErrors: Array<{ message: string }>;
    };
  }>(
    `mutation($input: CompanyCreateInput!) {
      companyCreate(input: $input) {
        company {
          id
          locations(first: 1) { edges { node { id } } }
        }
        userErrors { message }
      }
    }`,
    {
      input: {
        company: {
          name: input.name,
          externalId: input.externalId,
          note: input.note || '',
        },
      },
    },
    brandId
  );

  if (data.companyCreate.userErrors.length > 0) {
    throw new Error(`Company creation failed: ${data.companyCreate.userErrors[0].message}`);
  }
  const company = data.companyCreate.company;
  if (!company) throw new Error('Company creation returned null');

  const locationId = company.locations.edges[0]?.node.id;
  if (!locationId) throw new Error('Company created without default location');

  return { companyId: company.id, locationId };
}

export async function createCompanyContact(
  companyId: string,
  customerId: string,
  brandId?: string
): Promise<void> {
  const data = await shopifyGraphQL<{
    companyContactCreate: { userErrors: Array<{ message: string }> };
  }>(
    `mutation($companyId: ID!, $input: CompanyContactInput!) {
      companyContactCreate(companyId: $companyId, input: $input) {
        userErrors { message }
      }
    }`,
    {
      companyId,
      input: { customerId },
    },
    brandId
  );

  if (data.companyContactCreate.userErrors.length > 0) {
    throw new Error(`Contact creation failed: ${data.companyContactCreate.userErrors[0].message}`);
  }
}

export async function assignCatalogToLocation(
  catalogId: string,
  locationId: string,
  brandId?: string
): Promise<void> {
  const data = await shopifyGraphQL<{
    catalogContextUpdate: { userErrors: Array<{ message: string }> };
  }>(
    `mutation($catalogId: ID!, $contextsToAdd: [CatalogContextInput!]!) {
      catalogContextUpdate(catalogId: $catalogId, contextsToAdd: $contextsToAdd) {
        userErrors { message }
      }
    }`,
    {
      catalogId,
      contextsToAdd: [{ companyLocationId: locationId }],
    },
    brandId
  );

  if (data.catalogContextUpdate.userErrors.length > 0) {
    throw new Error(`Catalog assignment failed: ${data.catalogContextUpdate.userErrors[0].message}`);
  }
}

export async function removeCatalogFromLocation(
  catalogId: string,
  locationId: string,
  brandId?: string
): Promise<void> {
  const data = await shopifyGraphQL<{
    catalogContextUpdate: { userErrors: Array<{ message: string }> };
  }>(
    `mutation($catalogId: ID!, $contextsToRemove: [CatalogContextInput!]!) {
      catalogContextUpdate(catalogId: $catalogId, contextsToRemove: $contextsToRemove) {
        userErrors { message }
      }
    }`,
    {
      catalogId,
      contextsToRemove: [{ companyLocationId: locationId }],
    },
    brandId
  );

  if (data.catalogContextUpdate.userErrors.length > 0) {
    console.error('[trade-shopify] removeCatalogFromLocation error:', data.catalogContextUpdate.userErrors[0].message);
  }
}

// ========== SEND CUSTOMER ACCOUNT INVITE ==========

export async function sendAccountInvite(customerId: string, brandId?: string): Promise<void> {
  await shopifyGraphQL(
    `mutation($id: ID!) {
      customerSendAccountInviteEmail(customerId: $id) {
        customer { id }
        userErrors { message }
      }
    }`,
    { id: customerId },
    brandId
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add apps/backend/src/services/trade-shopify.service.ts
git commit -m "feat: add Shopify B2B service for trade program"
```

---

### Task 5: Trade Approval Engine

**Files:**
- Create: `apps/backend/src/services/trade-approval.service.ts`

Orchestrates the full approval flow: Shopify customer creation/lookup, company creation, catalog assignment, tags, metafields, member record, email.

- [ ] **Step 1: Create the approval engine**

```typescript
import * as tradeService from './trade.service.js';
import * as shopifyB2B from './trade-shopify.service.js';
import { sendTradeWelcomeEmail, sendTradeRejectionEmail, sendTradeApplicationReceivedEmail } from './trade-email.service.js';
import { TradeApplication, TradeSettings } from '../types/index.js';
import { v4 as uuidv4 } from 'uuid';

export function evaluateAutoApproveRules(
  application: TradeApplication,
  settings: TradeSettings
): boolean {
  if (!settings.auto_approve_enabled) return false;

  const { rules, logic } = settings.auto_approve_rules;
  const enabledRules = rules.filter((r) => r.enabled);
  if (enabledRules.length === 0) return false;

  const results = enabledRules.map((rule) => {
    const value = (application as Record<string, unknown>)[rule.field];
    switch (rule.condition) {
      case 'is_not_empty':
        return value !== null && value !== undefined && String(value).trim() !== '';
      case 'contains':
        return typeof value === 'string' && rule.value ? value.toLowerCase().includes(rule.value.toLowerCase()) : false;
      case 'equals':
        return String(value) === rule.value;
      case 'one_of':
        return rule.value ? rule.value.split(',').map((v) => v.trim()).includes(String(value)) : false;
      default:
        return false;
    }
  });

  return logic === 'all' ? results.every(Boolean) : results.some(Boolean);
}

export async function processApproval(
  application: TradeApplication,
  options: {
    brandId: string;
    payment_terms?: string;
    notes?: string;
    actorId?: string;
    actorType?: 'system' | 'agent';
  }
): Promise<void> {
  const settings = await tradeService.getTradeSettings(options.brandId);
  const catalogId = (settings.metadata as Record<string, string>)?.shopify_catalog_id;
  if (!catalogId) {
    throw new Error('Trade catalog ID not configured in trade_settings.metadata.shopify_catalog_id');
  }

  // Step 1: Create or find Shopify customer
  let shopifyCustomerId = application.shopify_customer_id;
  let isNewCustomer = false;

  if (!shopifyCustomerId) {
    const existing = await shopifyB2B.findCustomerByEmail(application.email, options.brandId);
    if (existing) {
      shopifyCustomerId = existing.id;
    } else {
      const nameParts = application.full_name.split(' ');
      const firstName = nameParts[0] || application.full_name;
      const lastName = nameParts.slice(1).join(' ') || '';
      const customer = await shopifyB2B.createCustomer(
        { firstName, lastName, email: application.email, phone: application.phone },
        options.brandId
      );
      shopifyCustomerId = customer.id;
      isNewCustomer = true;
    }
  }

  // Step 2: Create Shopify Company
  const { companyId, locationId } = await shopifyB2B.createCompany(
    {
      name: application.company_name,
      externalId: `TRADE-${application.id.slice(0, 8)}`,
      note: `${application.business_type} | ${application.website_url}`,
    },
    options.brandId
  );

  // Step 3: Create Company Contact
  await shopifyB2B.createCompanyContact(companyId, shopifyCustomerId, options.brandId);

  // Step 4: Assign catalog to company location
  await shopifyB2B.assignCatalogToLocation(catalogId, locationId, options.brandId);

  // Step 5: Create trade_members record first (to get the real UUID)
  const paymentTerms = options.payment_terms || settings.default_payment_terms;
  const member = await tradeService.createMember({
    brand_id: options.brandId,
    application_id: application.id,
    shopify_customer_id: shopifyCustomerId,
    shopify_company_id: companyId,
    company_name: application.company_name,
    contact_name: application.full_name,
    email: application.email,
    phone: application.phone,
    business_type: application.business_type,
    website_url: application.website_url,
    payment_terms: paymentTerms,
  });

  // Store locationId in member metadata for suspension/reactivation
  await tradeService.updateMember(member.id, {
    metadata: { shopify_location_id: locationId },
  } as any);

  // Step 6: Update customer tags + metafields (using real member ID)
  await shopifyB2B.updateCustomerTags(
    shopifyCustomerId,
    ['trade-program', `trade-${application.business_type}`],
    [
      { namespace: 'trade_program', key: 'company_name', value: application.company_name, type: 'single_line_text_field' },
      { namespace: 'trade_program', key: 'business_type', value: application.business_type, type: 'single_line_text_field' },
      { namespace: 'trade_program', key: 'status', value: 'active', type: 'single_line_text_field' },
      { namespace: 'trade_program', key: 'approved_date', value: new Date().toISOString().split('T')[0], type: 'date' },
      { namespace: 'trade_program', key: 'member_id', value: member.id, type: 'single_line_text_field' },
    ],
    options.brandId
  );

  // Step 7: Update application
  await tradeService.updateApplication(application.id, {
    status: 'approved',
    shopify_customer_id: shopifyCustomerId,
    shopify_company_id: companyId,
    auto_approved: options.actorType === 'system',
    reviewed_by: options.actorId || null,
    reviewed_at: new Date().toISOString(),
  } as any);

  // Step 8: Send welcome email
  sendTradeWelcomeEmail({
    to: application.email,
    full_name: application.full_name,
    company_name: application.company_name,
    discount_code: settings.discount_code,
    payment_terms: paymentTerms,
    concierge_email: settings.concierge_email,
    is_new_customer: isNewCustomer,
    brandId: options.brandId,
  }).catch((err) => console.error('[trade-approval] Welcome email failed:', err));

  // Step 9: Log event
  await tradeService.logTradeEvent({
    brand_id: options.brandId,
    application_id: application.id,
    event_type: options.actorType === 'system' ? 'auto_approved' : 'manually_approved',
    actor: options.actorType || 'agent',
    actor_id: options.actorId,
    details: { payment_terms: paymentTerms, shopify_company_id: companyId },
  });
}

export async function processRejection(
  application: TradeApplication,
  options: {
    brandId: string;
    reason: string;
    actorId: string;
  }
): Promise<void> {
  await tradeService.updateApplication(application.id, {
    status: 'rejected',
    rejection_reason: options.reason,
    reviewed_by: options.actorId,
    reviewed_at: new Date().toISOString(),
  } as any);

  sendTradeRejectionEmail({
    to: application.email,
    full_name: application.full_name,
    company_name: application.company_name,
    reason: options.reason,
    brandId: options.brandId,
  }).catch((err) => console.error('[trade-approval] Rejection email failed:', err));

  await tradeService.logTradeEvent({
    brand_id: options.brandId,
    application_id: application.id,
    event_type: 'rejected',
    actor: 'agent',
    actor_id: options.actorId,
    details: { reason: options.reason },
  });
}

export async function processSuspension(
  memberId: string,
  options: { brandId: string; actorId: string }
): Promise<void> {
  const member = await tradeService.getMember(memberId);
  if (!member) throw new Error('Member not found');

  const settings = await tradeService.getTradeSettings(options.brandId);
  const catalogId = (settings.metadata as Record<string, string>)?.shopify_catalog_id;

  // Remove catalog from company location
  if (catalogId && (member.metadata as Record<string, string>)?.shopify_location_id) {
    await shopifyB2B.removeCatalogFromLocation(
      catalogId,
      (member.metadata as Record<string, string>).shopify_location_id,
      options.brandId
    ).catch((err) => console.error('[trade-approval] removeCatalog error:', err));
  }

  // Remove tags
  await shopifyB2B.removeCustomerTags(
    member.shopify_customer_id,
    ['trade-program', `trade-${member.business_type}`],
    options.brandId
  ).catch((err) => console.error('[trade-approval] removeTag error:', err));

  // Update metafield
  await shopifyB2B.updateCustomerTags(
    member.shopify_customer_id,
    [],
    [{ namespace: 'trade_program', key: 'status', value: 'suspended', type: 'single_line_text_field' }],
    options.brandId
  ).catch((err) => console.error('[trade-approval] updateMetafield error:', err));

  await tradeService.updateMember(memberId, { status: 'suspended' } as any, options.actorId);

  await tradeService.logTradeEvent({
    brand_id: options.brandId,
    member_id: memberId,
    event_type: 'member_suspended',
    actor: 'agent',
    actor_id: options.actorId,
  });
}

export async function processReactivation(
  memberId: string,
  options: { brandId: string; actorId: string }
): Promise<void> {
  const member = await tradeService.getMember(memberId);
  if (!member) throw new Error('Member not found');

  const settings = await tradeService.getTradeSettings(options.brandId);
  const catalogId = (settings.metadata as Record<string, string>)?.shopify_catalog_id;

  // Re-assign catalog
  if (catalogId && (member.metadata as Record<string, string>)?.shopify_location_id) {
    await shopifyB2B.assignCatalogToLocation(
      catalogId,
      (member.metadata as Record<string, string>).shopify_location_id,
      options.brandId
    );
  }

  // Re-add tags
  await shopifyB2B.updateCustomerTags(
    member.shopify_customer_id,
    ['trade-program', `trade-${member.business_type}`],
    [{ namespace: 'trade_program', key: 'status', value: 'active', type: 'single_line_text_field' }],
    options.brandId
  );

  await tradeService.updateMember(memberId, { status: 'active' } as any, options.actorId);

  await tradeService.logTradeEvent({
    brand_id: options.brandId,
    member_id: memberId,
    event_type: 'member_reactivated',
    actor: 'agent',
    actor_id: options.actorId,
  });
}
```

- [ ] **Step 2: Commit**

```bash
git add apps/backend/src/services/trade-approval.service.ts
git commit -m "feat: add trade approval engine with auto-approve rules"
```

---

### Task 6: Trade Email Service

**Files:**
- Create: `apps/backend/src/services/trade-email.service.ts`

- [ ] **Step 1: Create the trade email service**

```typescript
import { Resend } from 'resend';
import { getBrandSlug } from '../config/brand.js';

function getResendConfig(brandId?: string): { client: Resend; from: string } {
  const slug = brandId ? getBrandSlug(brandId) : 'outlight';
  const upperSlug = (slug || 'outlight').toUpperCase();
  const apiKey = process.env[`RESEND_API_KEY_${upperSlug}`] || process.env.RESEND_API_KEY || '';
  const from = process.env[`EMAIL_FROM_ADDRESS_${upperSlug}`] || process.env.EMAIL_FROM_ADDRESS || 'noreply@outlight.com';
  return { client: new Resend(apiKey), from };
}

export async function sendTradeApplicationReceivedEmail(opts: {
  to: string;
  full_name: string;
  company_name: string;
  brandId?: string;
}): Promise<{ messageId?: string; error?: string }> {
  try {
    const { client, from } = getResendConfig(opts.brandId);
    const firstName = opts.full_name.split(' ')[0];

    const { data, error } = await client.emails.send({
      from,
      to: opts.to,
      subject: 'We received your trade program application',
      html: `
        <p>Hi ${firstName},</p>
        <p>Thank you for applying to the Outlight Trade Program on behalf of <strong>${opts.company_name}</strong>.</p>
        <p>We're reviewing your application and will get back to you within 1-2 business days.</p>
        <p>Best,<br>The Outlight Team</p>
      `,
    });

    if (error) return { error: error.message };
    return { messageId: data?.id };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[trade-email] sendApplicationReceived error:', message);
    return { error: message };
  }
}

export async function sendTradeWelcomeEmail(opts: {
  to: string;
  full_name: string;
  company_name: string;
  discount_code: string;
  payment_terms: string;
  concierge_email: string | null;
  is_new_customer: boolean;
  brandId?: string;
}): Promise<{ messageId?: string; error?: string }> {
  try {
    const { client, from } = getResendConfig(opts.brandId);
    const firstName = opts.full_name.split(' ')[0];
    const termsLabel = opts.payment_terms === 'NET_30' ? 'Net 30' : opts.payment_terms === 'NET_60' ? 'Net 60' : 'Due on fulfillment';

    const { data, error } = await client.emails.send({
      from,
      to: opts.to,
      subject: 'Welcome to the Outlight Trade Program',
      html: `
        <p>Hi ${firstName},</p>
        <p>Welcome to the Outlight Trade Program. Your application for <strong>${opts.company_name}</strong> has been approved.</p>
        <h3>Your trade benefits</h3>
        <ul>
          <li><strong>30% trade discount</strong> — automatically applied when you're logged in</li>
          <li><strong>Backup code:</strong> ${opts.discount_code} — use when not logged in</li>
          <li><strong>Payment terms:</strong> ${termsLabel}</li>
          <li><strong>Priority concierge support</strong>${opts.concierge_email ? ` — reach us at ${opts.concierge_email}` : ''}</li>
        </ul>
        ${opts.is_new_customer ? '<p>You should receive a separate email to activate your account. Please set your password to start shopping with trade pricing.</p>' : '<p>Log into your existing account to see trade pricing applied automatically.</p>'}
        <p>Best,<br>The Outlight Team</p>
      `,
    });

    if (error) return { error: error.message };
    return { messageId: data?.id };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[trade-email] sendWelcome error:', message);
    return { error: message };
  }
}

export async function sendTradeRejectionEmail(opts: {
  to: string;
  full_name: string;
  company_name: string;
  reason: string;
  brandId?: string;
}): Promise<{ messageId?: string; error?: string }> {
  try {
    const { client, from } = getResendConfig(opts.brandId);
    const firstName = opts.full_name.split(' ')[0];

    const { data, error } = await client.emails.send({
      from,
      to: opts.to,
      subject: 'Update on your Outlight trade program application',
      html: `
        <p>Hi ${firstName},</p>
        <p>Thank you for your interest in the Outlight Trade Program.</p>
        <p>After reviewing your application for <strong>${opts.company_name}</strong>, we're unable to approve it at this time.</p>
        ${opts.reason ? `<p><strong>Reason:</strong> ${opts.reason}</p>` : ''}
        <p>If you believe this was in error or your circumstances have changed, we encourage you to reapply.</p>
        <p>Best,<br>The Outlight Team</p>
      `,
    });

    if (error) return { error: error.message };
    return { messageId: data?.id };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[trade-email] sendRejection error:', message);
    return { error: message };
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add apps/backend/src/services/trade-email.service.ts
git commit -m "feat: add trade program email service"
```

---

### Task 7: Trade Controller & Routes

**Files:**
- Create: `apps/backend/src/controllers/trade.controller.ts`
- Modify: `apps/backend/src/index.ts` (register routes)

- [ ] **Step 1: Create the trade controller**

```typescript
import { Router, Request, Response } from 'express';
import rateLimit from 'express-rate-limit';
import { resolveBrandId } from '../config/brand.js';
import { supabase } from '../config/supabase.js';
import { agentAuthMiddleware } from '../middleware/agent-auth.middleware.js';
import * as tradeService from '../services/trade.service.js';
import { evaluateAutoApproveRules, processApproval, processRejection, processSuspension, processReactivation } from '../services/trade-approval.service.js';
import { sendTradeApplicationReceivedEmail } from '../services/trade-email.service.js';
import { findCustomerByEmail } from '../services/trade-shopify.service.js';
import { v4 as uuidv4 } from 'uuid';

export const tradeRouter = Router();

// Note: add `express-rate-limit` to package.json dependencies:
//   npm install express-rate-limit @types/express-rate-limit

// Rate limiters
const applyLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 5, message: { error: 'Too many applications. Try again later.' } });
const statusLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 10, message: { error: 'Too many requests. Try again later.' } });

// CSRF validation for public endpoints
function validateOrigin(req: Request, res: Response, next: Function) {
  const origin = req.headers.origin || '';
  const referer = req.headers.referer || '';
  const allowedDomains = ['outlight.com', 'www.outlight.com', 'localhost'];
  const isAllowed = allowedDomains.some((d) => origin.includes(d) || referer.includes(d));
  if (!isAllowed && origin !== '') {
    return res.status(403).json({ error: 'Forbidden' });
  }
  next();
}

// ========== PUBLIC ROUTES ==========

// POST /api/trade/apply
tradeRouter.post('/apply', validateOrigin, applyLimiter, async (req: Request, res: Response) => {
  try {
    const brandId = await resolveBrandId(req);
    const { full_name, email, phone, company_name, business_type, website_url, project_description, referral_source, _honeypot } = req.body;

    // Honeypot check
    if (_honeypot) {
      return res.json({ success: true, status: 'pending', message: 'Application received.' });
    }

    // Validate required fields
    if (!full_name || !email || !phone || !company_name || !business_type || !website_url) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const validTypes = ['interior_designer', 'architect', 'contractor', 'hospitality', 'developer', 'other'];
    if (!validTypes.includes(business_type)) {
      return res.status(400).json({ error: 'Invalid business type' });
    }

    // Check for existing Shopify customer (don't create yet)
    let shopifyCustomerId: string | undefined;
    try {
      const existing = await findCustomerByEmail(email, brandId);
      if (existing) {
        shopifyCustomerId = existing.id;
        // Check if already a trade member
        if (existing.tags.includes('trade-program')) {
          return res.status(409).json({ error: 'You are already a trade program member' });
        }
      }
    } catch (err) {
      console.error('[trade.controller] Shopify lookup failed:', err);
      // Non-fatal — proceed without Shopify ID
    }

    // Generate status token for status checking
    const statusToken = uuidv4();

    // Create application
    const application = await tradeService.createApplication({
      brand_id: brandId,
      full_name,
      email,
      phone,
      company_name,
      business_type,
      website_url,
      project_description,
      referral_source,
      shopify_customer_id: shopifyCustomerId,
      metadata: { status_token: statusToken },
    });

    // Evaluate auto-approve rules
    const settings = await tradeService.getTradeSettings(brandId);
    const shouldAutoApprove = evaluateAutoApproveRules(application, settings);

    if (shouldAutoApprove) {
      await processApproval(application, {
        brandId,
        actorType: 'system',
      });
      return res.status(201).json({
        success: true,
        status: 'approved',
        message: 'Your application has been approved. Check your email for details.',
      });
    }

    // Send confirmation email
    sendTradeApplicationReceivedEmail({
      to: email,
      full_name,
      company_name,
      brandId,
    }).catch((err) => console.error('[trade.controller] Confirmation email failed:', err));

    return res.status(201).json({
      success: true,
      status: 'pending',
      message: 'Application received. We will review it within 1-2 business days.',
      status_token: statusToken,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[trade.controller] POST /apply error:', message);

    if (message.includes('already pending or approved')) {
      return res.status(409).json({ error: message });
    }
    return res.status(500).json({ error: 'Failed to submit application' });
  }
});

// POST /api/trade/status
tradeRouter.post('/status', validateOrigin, statusLimiter, async (req: Request, res: Response) => {
  try {
    const { email, token } = req.body;
    if (!email || !token) {
      return res.status(400).json({ error: 'Email and token required' });
    }

    const brandId = await resolveBrandId(req);

    // Exact query by email and status token (not fuzzy search)
    const { data: app, error } = await supabase
      .from('trade_applications')
      .select('status')
      .eq('brand_id', brandId)
      .eq('email', email.toLowerCase().trim())
      .eq('metadata->>status_token', token)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (error || !app) {
      return res.json({ status: 'not_found' });
    }

    return res.json({ status: app.status });
  } catch (err) {
    console.error('[trade.controller] POST /status error:', err);
    return res.status(500).json({ error: 'Failed to check status' });
  }
});

// ========== ADMIN ROUTES (agent auth) ==========

// GET /api/trade/applications
tradeRouter.get('/applications', agentAuthMiddleware, async (req: Request, res: Response) => {
  try {
    const brandId = req.agent!.brandId;
    const { status, business_type, search, page, limit, sort, order } = req.query;

    const result = await tradeService.listApplications({
      brand_id: brandId,
      status: status as string,
      business_type: business_type as string,
      search: search as string,
      page: page ? parseInt(page as string) : undefined,
      limit: limit ? parseInt(limit as string) : undefined,
      sort: sort as string,
      order: order as 'asc' | 'desc',
    });

    // Get counts per status
    const [pendingCount, approvedCount, rejectedCount] = await Promise.all([
      tradeService.listApplications({ brand_id: brandId, status: 'pending', limit: 0 }),
      tradeService.listApplications({ brand_id: brandId, status: 'approved', limit: 0 }),
      tradeService.listApplications({ brand_id: brandId, status: 'rejected', limit: 0 }),
    ]);

    return res.json({
      ...result,
      counts: {
        pending: pendingCount.total,
        approved: approvedCount.total,
        rejected: rejectedCount.total,
        all: pendingCount.total + approvedCount.total + rejectedCount.total,
      },
    });
  } catch (err) {
    console.error('[trade.controller] GET /applications error:', err);
    return res.status(500).json({ error: 'Failed to list applications' });
  }
});

// GET /api/trade/applications/:id
tradeRouter.get('/applications/:id', agentAuthMiddleware, async (req: Request, res: Response) => {
  try {
    const app = await tradeService.getApplication(req.params.id);
    if (!app) return res.status(404).json({ error: 'Application not found' });

    const activityLog = await tradeService.getActivityLog({
      brand_id: req.agent!.brandId,
      application_id: app.id,
    });

    return res.json({ application: app, activity_log: activityLog });
  } catch (err) {
    console.error('[trade.controller] GET /applications/:id error:', err);
    return res.status(500).json({ error: 'Failed to fetch application' });
  }
});

// POST /api/trade/applications/:id/approve
tradeRouter.post('/applications/:id/approve', agentAuthMiddleware, async (req: Request, res: Response) => {
  try {
    const app = await tradeService.getApplication(req.params.id);
    if (!app) return res.status(404).json({ error: 'Application not found' });
    if (app.status !== 'pending') return res.status(400).json({ error: `Application is already ${app.status}` });

    const { payment_terms, notes } = req.body;

    await processApproval(app, {
      brandId: req.agent!.brandId,
      payment_terms,
      notes,
      actorId: req.agent!.id,
      actorType: 'agent',
    });

    return res.json({ success: true, message: 'Application approved' });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[trade.controller] POST /applications/:id/approve error:', message);
    return res.status(500).json({ error: 'Failed to approve application' });
  }
});

// POST /api/trade/applications/:id/reject
tradeRouter.post('/applications/:id/reject', agentAuthMiddleware, async (req: Request, res: Response) => {
  try {
    const app = await tradeService.getApplication(req.params.id);
    if (!app) return res.status(404).json({ error: 'Application not found' });
    if (app.status !== 'pending') return res.status(400).json({ error: `Application is already ${app.status}` });

    const { reason } = req.body;
    if (!reason) return res.status(400).json({ error: 'Rejection reason is required' });

    await processRejection(app, {
      brandId: req.agent!.brandId,
      reason,
      actorId: req.agent!.id,
    });

    return res.json({ success: true, message: 'Application rejected' });
  } catch (err) {
    console.error('[trade.controller] POST /applications/:id/reject error:', err);
    return res.status(500).json({ error: 'Failed to reject application' });
  }
});

// GET /api/trade/members
tradeRouter.get('/members', agentAuthMiddleware, async (req: Request, res: Response) => {
  try {
    const brandId = req.agent!.brandId;
    const { status, business_type, search, page, limit, sort, order } = req.query;

    const result = await tradeService.listMembers({
      brand_id: brandId,
      status: status as string,
      business_type: business_type as string,
      search: search as string,
      page: page ? parseInt(page as string) : undefined,
      limit: limit ? parseInt(limit as string) : undefined,
      sort: sort as string,
      order: order as 'asc' | 'desc',
    });

    return res.json(result);
  } catch (err) {
    console.error('[trade.controller] GET /members error:', err);
    return res.status(500).json({ error: 'Failed to list members' });
  }
});

// GET /api/trade/members/:id
tradeRouter.get('/members/:id', agentAuthMiddleware, async (req: Request, res: Response) => {
  try {
    const member = await tradeService.getMember(req.params.id);
    if (!member) return res.status(404).json({ error: 'Member not found' });

    const activityLog = await tradeService.getActivityLog({
      brand_id: req.agent!.brandId,
      member_id: member.id,
    });

    return res.json({ member, activity_log: activityLog });
  } catch (err) {
    console.error('[trade.controller] GET /members/:id error:', err);
    return res.status(500).json({ error: 'Failed to fetch member' });
  }
});

// PATCH /api/trade/members/:id
tradeRouter.patch('/members/:id', agentAuthMiddleware, async (req: Request, res: Response) => {
  try {
    const member = await tradeService.getMember(req.params.id);
    if (!member) return res.status(404).json({ error: 'Member not found' });

    const { status, payment_terms, notes } = req.body;

    // Handle status transitions
    if (status && status !== member.status) {
      if (status === 'suspended' && member.status === 'active') {
        await processSuspension(member.id, { brandId: req.agent!.brandId, actorId: req.agent!.id });
      } else if (status === 'revoked' && (member.status === 'active' || member.status === 'suspended')) {
        await processSuspension(member.id, { brandId: req.agent!.brandId, actorId: req.agent!.id });
        await tradeService.updateMember(member.id, { status: 'revoked' } as any);
      } else if (status === 'active' && member.status === 'suspended') {
        await processReactivation(member.id, { brandId: req.agent!.brandId, actorId: req.agent!.id });
      } else {
        return res.status(400).json({ error: `Cannot transition from ${member.status} to ${status}` });
      }
    }

    // Handle other updates
    const otherUpdates: Record<string, unknown> = {};
    if (payment_terms) otherUpdates.payment_terms = payment_terms;
    if (notes !== undefined) otherUpdates.notes = notes;

    if (Object.keys(otherUpdates).length > 0) {
      await tradeService.updateMember(member.id, otherUpdates as any, req.agent!.id);
    }

    const updated = await tradeService.getMember(member.id);
    return res.json({ member: updated });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[trade.controller] PATCH /members/:id error:', message);
    return res.status(500).json({ error: 'Failed to update member' });
  }
});

// GET /api/trade/settings
tradeRouter.get('/settings', agentAuthMiddleware, async (req: Request, res: Response) => {
  try {
    const settings = await tradeService.getTradeSettings(req.agent!.brandId);
    return res.json({ settings });
  } catch (err) {
    console.error('[trade.controller] GET /settings error:', err);
    return res.status(500).json({ error: 'Failed to fetch settings' });
  }
});

// PATCH /api/trade/settings
tradeRouter.patch('/settings', agentAuthMiddleware, async (req: Request, res: Response) => {
  try {
    const settings = await tradeService.updateTradeSettings(
      req.agent!.brandId,
      req.body,
      req.agent!.id
    );
    return res.json({ settings });
  } catch (err) {
    console.error('[trade.controller] PATCH /settings error:', err);
    return res.status(500).json({ error: 'Failed to update settings' });
  }
});

// GET /api/trade/analytics
tradeRouter.get('/analytics', agentAuthMiddleware, async (req: Request, res: Response) => {
  try {
    const period = (req.query.period as string) || '30d';
    const analytics = await tradeService.getTradeAnalytics(req.agent!.brandId, period);
    return res.json(analytics);
  } catch (err) {
    console.error('[trade.controller] GET /analytics error:', err);
    return res.status(500).json({ error: 'Failed to fetch analytics' });
  }
});
```

- [ ] **Step 2: Register routes in index.ts**

In `apps/backend/src/index.ts`, add the import and route registration. Find where other routers are imported (near the top of the file) and add:

```typescript
import { tradeRouter } from './controllers/trade.controller.js';
```

Find where routes are registered (near `app.use('/api/tickets', ...)`) and add:

```typescript
app.use('/api/trade', tradeRouter);
```

- [ ] **Step 3: Verify the backend compiles**

Run: `cd apps/backend && npx tsc --noEmit`
Expected: No errors

- [ ] **Step 4: Commit**

```bash
git add apps/backend/src/controllers/trade.controller.ts apps/backend/src/index.ts
git commit -m "feat: add trade program controller and register routes"
```

---

## Phase 2: Admin Dashboard Pages

### Task 8: Admin API Routes

**Files:**
- Create: `apps/admin/src/app/api/trade/applications/route.ts`
- Create: `apps/admin/src/app/api/trade/applications/[id]/route.ts`
- Create: `apps/admin/src/app/api/trade/applications/[id]/approve/route.ts`
- Create: `apps/admin/src/app/api/trade/applications/[id]/reject/route.ts`
- Create: `apps/admin/src/app/api/trade/members/route.ts`
- Create: `apps/admin/src/app/api/trade/members/[id]/route.ts`
- Create: `apps/admin/src/app/api/trade/settings/route.ts`
- Create: `apps/admin/src/app/api/trade/analytics/route.ts`

These Next.js API routes query Supabase directly, matching the existing pattern used for tickets in the admin app.

- [ ] **Step 1: Create applications list API route**

File: `apps/admin/src/app/api/trade/applications/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { supabase } from '@/lib/supabase';

export async function GET(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { searchParams } = req.nextUrl;
  const status = searchParams.get('status');
  const search = searchParams.get('search');
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '20');
  const offset = (page - 1) * limit;

  let query = supabase
    .from('trade_applications')
    .select('*', { count: 'exact' })
    .eq('brand_id', session.brandId);

  if (status) query = query.eq('status', status);
  if (search) query = query.or(`full_name.ilike.%${search}%,email.ilike.%${search}%,company_name.ilike.%${search}%`);

  query = query.order('created_at', { ascending: false }).range(offset, offset + limit - 1);

  const { data, error, count } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Get counts per status
  const [pending, approved, rejected] = await Promise.all([
    supabase.from('trade_applications').select('*', { count: 'exact', head: true }).eq('brand_id', session.brandId).eq('status', 'pending'),
    supabase.from('trade_applications').select('*', { count: 'exact', head: true }).eq('brand_id', session.brandId).eq('status', 'approved'),
    supabase.from('trade_applications').select('*', { count: 'exact', head: true }).eq('brand_id', session.brandId).eq('status', 'rejected'),
  ]);

  const total = count || 0;
  return NextResponse.json({
    applications: data || [],
    total,
    page,
    totalPages: Math.ceil(total / limit),
    counts: {
      pending: pending.count || 0,
      approved: approved.count || 0,
      rejected: rejected.count || 0,
      all: (pending.count || 0) + (approved.count || 0) + (rejected.count || 0),
    },
  });
}
```

- [ ] **Step 2: Create remaining API routes**

Create the same direct Supabase query pattern for each route. Each file follows the same structure: check session, query Supabase with `brand_id` filter, return response.

For **write operations** (approve, reject, member updates), the admin API routes should call the **Railway backend** instead of writing directly, because the backend orchestrates Shopify B2B API calls. To do this, store the agent's Railway JWT in the session cookie alongside the admin session, or have the admin API routes call the backend using a server-to-server API key. The simplest approach: add a `BACKEND_API_KEY` env var that the admin sends as a header, and add a middleware check on the backend trade routes that accepts either agent JWT or API key.

Key patterns for read routes (direct Supabase):
- `GET /api/trade/applications/[id]` → `supabase.from('trade_applications').select('*').eq('id', params.id).single()`
- `GET /api/trade/members` → same pattern as applications list
- `GET /api/trade/settings` → `supabase.from('trade_settings').select('*').eq('brand_id', session.brandId).single()`
- `GET /api/trade/analytics` → aggregate queries on trade tables

Key patterns for write routes (proxy to backend):
- `POST /api/trade/applications/[id]/approve` → `fetch(BACKEND_URL + '/api/trade/applications/' + id + '/approve', { method: 'POST', headers: { 'X-API-Key': BACKEND_API_KEY }, body })`
- `POST /api/trade/applications/[id]/reject` → same proxy pattern
- `PATCH /api/trade/members/[id]` → same proxy pattern
- `PATCH /api/trade/settings` → can write directly to Supabase (no Shopify calls needed)

- [ ] **Step 3: Commit**

```bash
git add apps/admin/src/app/api/trade/
git commit -m "feat: add admin API routes for trade program"
```

---

### Task 9: Add Trade Program to Sidebar Navigation

**Files:**
- Modify: `apps/admin/src/components/sidebar.tsx`

- [ ] **Step 1: Add Trade Program nav group**

In the sidebar's navigation groups array (around line 43-91), add a new group after "Support":

```typescript
{
  label: 'Trade Program',
  collapsible: true,
  defaultCollapsed: false,
  items: [
    { href: '/trade', label: 'Overview', icon: Briefcase },
    { href: '/trade/applications', label: 'Applications', icon: FileText },
    { href: '/trade/members', label: 'Members', icon: Users },
    { href: '/trade/settings', label: 'Settings', icon: Settings },
  ],
},
```

Add the imports at the top of the file:

```typescript
import { Briefcase, FileText, Users } from 'lucide-react';
```

(Settings icon should already be imported)

- [ ] **Step 2: Commit**

```bash
git add apps/admin/src/components/sidebar.tsx
git commit -m "feat: add trade program navigation to admin sidebar"
```

---

### Task 10: Trade Overview Page

**Files:**
- Create: `apps/admin/src/app/(dashboard)/trade/page.tsx`

- [ ] **Step 1: Create the trade overview page**

This page shows KPI cards, recent applications, and quick actions. Follow the existing overview page pattern (client component, useEffect for data fetching, skeleton loading).

```typescript
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Users, FileText, DollarSign, ShoppingCart, ArrowRight, Clock } from 'lucide-react';

interface Analytics {
  total_members: number;
  pending_applications: number;
  total_trade_revenue: number;
  avg_order_value: number;
}

interface Application {
  id: string;
  full_name: string;
  company_name: string;
  business_type: string;
  status: string;
  created_at: string;
}

export default function TradeOverviewPage() {
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [recentApps, setRecentApps] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/api/trade/analytics').then((r) => r.json()),
      fetch('/api/trade/applications?status=pending&limit=5&sort=created_at&order=desc').then((r) => r.json()),
    ]).then(([analyticsData, appsData]) => {
      setAnalytics(analyticsData);
      setRecentApps(appsData.applications || []);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>Trade Program</h2>
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-xl p-5 animate-pulse" style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-primary)', height: 100 }} />
          ))}
        </div>
      </div>
    );
  }

  const kpis = [
    { label: 'Active Members', value: analytics?.total_members || 0, icon: Users, color: 'var(--color-accent)' },
    { label: 'Pending Applications', value: analytics?.pending_applications || 0, icon: Clock, color: 'var(--color-status-pending)' },
    { label: 'Trade Revenue (30d)', value: `$${(analytics?.total_trade_revenue || 0).toLocaleString()}`, icon: DollarSign, color: 'var(--color-status-resolved)' },
    { label: 'Avg Order Value', value: `$${(analytics?.avg_order_value || 0).toFixed(0)}`, icon: ShoppingCart, color: 'var(--color-accent-light)' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>Trade Program</h2>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="rounded-xl p-5" style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-primary)' }}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>{kpi.label}</span>
              <kpi.icon size={16} style={{ color: kpi.color }} />
            </div>
            <div className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{kpi.value}</div>
          </div>
        ))}
      </div>

      {/* Recent Pending Applications */}
      <div className="rounded-xl overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-primary)' }}>
        <div className="flex items-center justify-between p-4" style={{ borderBottom: '1px solid var(--border-primary)' }}>
          <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Pending Applications</h3>
          <Link href="/trade/applications?status=pending" className="flex items-center gap-1 text-xs font-medium" style={{ color: 'var(--color-accent)' }}>
            View all <ArrowRight size={12} />
          </Link>
        </div>
        {recentApps.length === 0 ? (
          <div className="p-8 text-center text-sm" style={{ color: 'var(--text-tertiary)' }}>No pending applications</div>
        ) : (
          recentApps.map((app) => (
            <Link key={app.id} href={`/trade/applications/${app.id}`} className="flex items-center justify-between p-4 transition-colors" style={{ borderBottom: '1px solid var(--border-primary)' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-hover)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
            >
              <div>
                <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{app.full_name}</div>
                <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>{app.company_name} &middot; {app.business_type.replace('_', ' ')}</div>
              </div>
              <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                {new Date(app.created_at).toLocaleDateString()}
              </div>
            </Link>
          ))
        )}
      </div>

      {/* Quick Actions */}
      <div className="flex gap-3">
        <Link href="/trade/applications" className="px-4 py-2 text-sm font-medium text-white rounded-lg" style={{ backgroundColor: 'var(--color-accent)' }}>
          Review Applications
        </Link>
        <Link href="/trade/members" className="px-4 py-2 text-sm font-medium rounded-lg" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-primary)' }}>
          View Members
        </Link>
        <Link href="/trade/settings" className="px-4 py-2 text-sm font-medium rounded-lg" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-primary)' }}>
          Program Settings
        </Link>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add apps/admin/src/app/\(dashboard\)/trade/page.tsx
git commit -m "feat: add trade program overview page to admin dashboard"
```

---

### Task 11: Applications List Page

**Files:**
- Create: `apps/admin/src/app/(dashboard)/trade/applications/page.tsx`

- [ ] **Step 1: Create the applications list page**

Follow the ticket list pattern: filter tabs (All/Pending/Approved/Rejected), search bar, table with columns (date, name, company, type, website, status), click to detail. Use the exact same styling patterns from the tickets page (CSS variables, hover states, badges).

Key elements:
- Filter tabs with counts from the `counts` object in API response
- Search input with debounce
- Status badges: pending (amber), approved (green), rejected (red)
- Business type formatted (replace underscores with spaces, capitalize)
- Website as external link
- Pagination at bottom
- Click row navigates to `/trade/applications/[id]`

This is a large component (~250 lines). Write it following the patterns from `apps/admin/src/app/(dashboard)/tickets/page.tsx` exactly — same card style, same table row hover, same pagination buttons.

- [ ] **Step 2: Commit**

```bash
git add apps/admin/src/app/\(dashboard\)/trade/applications/page.tsx
git commit -m "feat: add trade applications list page"
```

---

### Task 12: Application Detail Page

**Files:**
- Create: `apps/admin/src/app/(dashboard)/trade/applications/[id]/page.tsx`

- [ ] **Step 1: Create the application detail page**

Two-column layout:
- **Left (2/3)**: Application info card (all fields), activity log
- **Right (1/3)**: Action panel — Approve button (with payment terms dropdown), Reject button (with reason textarea)

Status badges, field labels, and card styling match existing patterns. If status is not 'pending', show the actions as disabled with a note "Application already {status}".

- [ ] **Step 2: Commit**

```bash
git add apps/admin/src/app/\(dashboard\)/trade/applications/\[id\]/page.tsx
git commit -m "feat: add trade application detail page"
```

---

### Task 13: Members List Page

**Files:**
- Create: `apps/admin/src/app/(dashboard)/trade/members/page.tsx`

- [ ] **Step 1: Create the members list page**

Same pattern as applications list but with member-specific columns: name, company, type, status, orders, total spent, joined date. Filter by status (active/suspended/revoked). Search by name, email, company. Click navigates to `/trade/members/[id]`.

- [ ] **Step 2: Commit**

```bash
git add apps/admin/src/app/\(dashboard\)/trade/members/page.tsx
git commit -m "feat: add trade members list page"
```

---

### Task 14: Member Detail Page

**Files:**
- Create: `apps/admin/src/app/(dashboard)/trade/members/[id]/page.tsx`

- [ ] **Step 1: Create the member detail page**

Two-column layout:
- **Left (2/3)**: Member profile card, order stats, activity log
- **Right (1/3)**: Status management (suspend/revoke/reactivate buttons with confirmation), payment terms dropdown, notes textarea with save button

Conditional button rendering based on current status:
- active → show Suspend and Revoke
- suspended → show Reactivate and Revoke
- revoked → show "Membership revoked" (no actions)

- [ ] **Step 2: Commit**

```bash
git add apps/admin/src/app/\(dashboard\)/trade/members/\[id\]/page.tsx
git commit -m "feat: add trade member detail page"
```

---

### Task 15: Trade Settings Page

**Files:**
- Create: `apps/admin/src/app/(dashboard)/trade/settings/page.tsx`

- [ ] **Step 1: Create the settings page**

Sections in cards:
1. **General**: discount percentage (number input), discount code (text input), default payment terms (select: DUE_ON_FULFILLMENT, NET_30, NET_60), concierge email (text input)
2. **Auto-approve Rules**: toggle enabled/disabled, rules list with add/remove, each rule has field selector, condition selector, value input. Logic toggle: ALL/ANY.
3. **Support**: ticket priority level (select: low, medium, high, urgent)
4. **Save button** at bottom

Follow the existing settings page pattern. Use the form pattern with saving/saved/error states.

- [ ] **Step 2: Commit**

```bash
git add apps/admin/src/app/\(dashboard\)/trade/settings/page.tsx
git commit -m "feat: add trade program settings page"
```

---

## Phase 3: Shopify Theme — Application Page

### Task 16: Trade Application Section

**Files:**
- Create: `sections/trade-application.liquid` (in outlight-theme)
- Create: `templates/page.trade-program.json` (in outlight-theme)
- Modify: `locales/en.default.json` (in outlight-theme)

- [ ] **Step 1: Create the trade application section**

This is a Liquid section with a hero area, benefits grid, and application form. The form submits via JavaScript to the backend API. Follow the existing section patterns in the outlight-theme (stylesheet tag, schema tag, CSS variables).

Key elements:
- Hero: title, subtitle describing the program
- Benefits grid (4 items): 30% discount, concierge service, payment terms, priority support
- Application form with all required fields + honeypot
- Form submission via fetch() to the backend `/api/trade/apply` endpoint
- Success/error states
- If customer is logged in and has `trade-program` tag, show "You're already a member" instead of form

Reference the spec for exact form fields. Use translation keys for all user-facing text. Add all new keys to `locales/en.default.json` under a `trade_program` namespace.

- [ ] **Step 2: Create the page template**

File: `templates/page.trade-program.json`

```json
{
  "sections": {
    "main": {
      "type": "trade-application",
      "settings": {}
    }
  },
  "order": ["main"]
}
```

- [ ] **Step 3: Add translation keys to en.default.json**

Add under the root object:

```json
"trade_program": {
  "title": "Trade program",
  "subtitle": "Exclusive benefits for design professionals",
  "benefits": {
    "discount": "30% trade discount",
    "discount_desc": "Flat 30% off all products, applied automatically",
    "concierge": "Private concierge",
    "concierge_desc": "Dedicated support for project sourcing and orders",
    "terms": "Payment terms",
    "terms_desc": "Net 30 and Net 60 options for qualified accounts",
    "priority": "Priority support",
    "priority_desc": "Fast-tracked support for all your inquiries"
  },
  "form": {
    "heading": "Apply now",
    "full_name": "Full name",
    "email": "Email",
    "phone": "Phone",
    "company_name": "Company name",
    "business_type": "Business type",
    "website_url": "Website or portfolio",
    "project_description": "Project description",
    "project_description_placeholder": "Tell us about your current projects or needs",
    "referral_source": "How did you hear about us?",
    "submit": "Submit application",
    "submitting": "Submitting...",
    "success_title": "Application received",
    "success_message": "We'll review your application within 1-2 business days.",
    "approved_title": "You've been approved",
    "approved_message": "Check your email for your trade program details.",
    "error": "Something went wrong. Please try again.",
    "already_member": "You're already a trade program member.",
    "visit_portal": "Visit your trade portal"
  },
  "business_types": {
    "interior_designer": "Interior designer",
    "architect": "Architect",
    "contractor": "Contractor",
    "hospitality": "Hospitality",
    "developer": "Developer",
    "other": "Other"
  }
}
```

- [ ] **Step 4: Commit**

```bash
cd C:/Users/caabs/outlight-theme
git add sections/trade-application.liquid templates/page.trade-program.json locales/en.default.json
git commit -m "feat: add trade program application page section and template"
```

---

### Task 17: Conditional Trade UI in Existing Sections

**Files:**
- Modify: `sections/header.liquid` (in outlight-theme)

- [ ] **Step 1: Add trade member badge to header**

Find the account/login area in the header section. Add a conditional badge:

```liquid
{% if customer and customer.tags contains 'trade-program' %}
  <span class="trade-badge">Trade</span>
{% endif %}
```

Add corresponding CSS in the section's `{% stylesheet %}` tag:

```css
.trade-badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 4px;
  background: var(--color-accent, #6366f1);
  color: #fff;
}
```

- [ ] **Step 2: Commit**

```bash
git add sections/header.liquid
git commit -m "feat: add trade member badge to header"
```

---

## Phase 4: Trade Member Portal (New App)

### Task 18: Scaffold Trade Portal Next.js App

**Files:**
- Create: `apps/trade-portal/` directory structure

- [ ] **Step 1: Initialize Next.js app**

```bash
cd C:/Users/caabs/shopify-ai-chatbot/apps
npx create-next-app@latest trade-portal --typescript --tailwind --app --no-src-dir --no-eslint --no-import-alias
```

- [ ] **Step 2: Configure environment**

Create `apps/trade-portal/.env.local`:

```
BACKEND_URL=https://shopify-ai-chatbot-production-9ab4.up.railway.app
SHOPIFY_STORE_URL=https://put1rp-iq.myshopify.com
SHOPIFY_CLIENT_ID=<from Shopify Partners>
SHOPIFY_CLIENT_SECRET=<from Shopify Partners>
NEXT_PUBLIC_STORE_URL=https://outlight.com
SESSION_SECRET=<generate random 64-char string>
```

- [ ] **Step 3: Commit initial scaffold**

```bash
git add apps/trade-portal/
git commit -m "feat: scaffold trade member portal Next.js app"
```

---

### Task 19: Portal Auth — Shopify OAuth

**Files:**
- Create: `apps/trade-portal/app/api/auth/login/route.ts`
- Create: `apps/trade-portal/app/api/auth/callback/route.ts`
- Create: `apps/trade-portal/app/api/auth/logout/route.ts`
- Create: `apps/trade-portal/lib/auth.ts`

- [ ] **Step 1: Create the auth library and OAuth routes**

Implement Shopify Customer Account OAuth flow:
1. `/api/auth/login` — redirects to Shopify authorization URL
2. `/api/auth/callback` — exchanges code for token, sends to backend for verification, sets session cookie
3. `/api/auth/logout` — clears session cookie
4. `lib/auth.ts` — session management with jose JWT (same pattern as admin app)

The backend verification call is `POST /api/trade/portal/auth/verify` (to be added to backend in Task 20).

- [ ] **Step 2: Commit**

```bash
git add apps/trade-portal/app/api/auth/ apps/trade-portal/lib/auth.ts
git commit -m "feat: add Shopify OAuth auth flow to trade portal"
```

---

### Task 20: Portal Backend Auth Route

**Files:**
- Modify: `apps/backend/src/controllers/trade.controller.ts`

- [ ] **Step 1: Add portal auth verification endpoint**

Add to the trade controller (after the admin routes):

```typescript
// POST /api/trade/portal/auth/verify
tradeRouter.post('/portal/auth/verify', async (req: Request, res: Response) => {
  try {
    const { shopify_access_token } = req.body;
    if (!shopify_access_token) {
      return res.status(400).json({ error: 'Token required' });
    }

    const brandId = await resolveBrandId(req);

    // Call Shopify Customer Account API (GraphQL) to validate token and get customer data
    // The Customer Account API uses a separate endpoint from the Admin API
    const config = await getBrandShopifyConfig(brandId);
    const shopId = config.shop; // e.g., "put1rp-iq"
    const customerAccountApiUrl = `https://shopify.com/${shopId}/account/customer/api/2025-01/graphql`;

    const customerRes = await fetch(customerAccountApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${shopify_access_token}`,
      },
      body: JSON.stringify({
        query: `{ customer { id emailAddress { emailAddress } firstName lastName } }`,
      }),
    });

    if (!customerRes.ok) {
      return res.status(401).json({ error: 'Invalid Shopify token' });
    }

    const customerData = await customerRes.json();
    const email = customerData.data?.customer?.emailAddress?.emailAddress;
    if (!email) {
      return res.status(401).json({ error: 'Could not resolve customer email' });
    }

    // Look up trade member
    const member = await tradeService.getMemberByEmail(email, brandId);
    if (!member) {
      return res.status(403).json({ error: 'Not a trade program member', code: 'NOT_MEMBER' });
    }
    if (member.status === 'suspended') {
      return res.status(403).json({ error: 'Trade account suspended', code: 'SUSPENDED' });
    }
    if (member.status === 'revoked') {
      return res.status(403).json({ error: 'Trade account revoked', code: 'REVOKED' });
    }

    // Issue portal session JWT
    const portalToken = await signPortalToken({
      member_id: member.id,
      customer_id: member.shopify_customer_id,
      email: member.email,
      company_name: member.company_name,
      brand_id: brandId,
    });

    return res.json({ token: portalToken, member });
  } catch (err) {
    console.error('[trade.controller] POST /portal/auth/verify error:', err);
    return res.status(500).json({ error: 'Authentication failed' });
  }
});
```

Add `signPortalToken` and `portalAuthMiddleware` functions (either in the controller or a separate middleware file). Use the same jose JWT pattern as agent auth, but with a different secret (`TRADE_PORTAL_JWT_SECRET` env var).

- [ ] **Step 2: Add portal-authenticated routes**

```typescript
// GET /api/trade/portal/me
tradeRouter.get('/portal/me', portalAuthMiddleware, async (req: Request, res: Response) => {
  const member = await tradeService.getMember(req.portalMember!.member_id);
  if (!member) return res.status(404).json({ error: 'Member not found' });

  const settings = await tradeService.getTradeSettings(req.portalMember!.brand_id);
  return res.json({ member, discount_code: settings.discount_code });
});

// GET /api/trade/portal/orders
tradeRouter.get('/portal/orders', portalAuthMiddleware, async (req: Request, res: Response) => {
  try {
    const member = await tradeService.getMember(req.portalMember!.member_id);
    if (!member) return res.status(404).json({ error: 'Member not found' });

    // Fetch orders from Shopify for this customer
    const { graphql } = await import('./shopify-admin.service.js');
    const data = await graphql(
      `query($query: String!) {
        orders(first: 50, query: $query, sortKey: CREATED_AT, reverse: true) {
          edges { node {
            id name createdAt totalPriceSet { shopMoney { amount currencyCode } }
            displayFulfillmentStatus displayFinancialStatus
            lineItems(first: 10) { edges { node { title quantity } } }
          } }
        }
      }`,
      { query: `email:${member.email}` },
      req.portalMember!.brand_id
    );

    const orders = data.orders.edges.map((e: any) => e.node);
    return res.json({ orders });
  } catch (err) {
    console.error('[trade.controller] GET /portal/orders error:', err);
    return res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

// GET /api/trade/portal/resources
tradeRouter.get('/portal/resources', portalAuthMiddleware, async (req: Request, res: Response) => {
  try {
    const settings = await tradeService.getTradeSettings(req.portalMember!.brand_id);
    const resources = (settings.metadata as any)?.resources || [];
    return res.json({ resources });
  } catch (err) {
    console.error('[trade.controller] GET /portal/resources error:', err);
    return res.status(500).json({ error: 'Failed to fetch resources' });
  }
});

// POST /api/trade/portal/concierge
tradeRouter.post('/portal/concierge', portalAuthMiddleware, async (req: Request, res: Response) => {
  const { subject, message, order_id, category } = req.body;
  if (!subject || !message) return res.status(400).json({ error: 'Subject and message required' });

  const member = await tradeService.getMember(req.portalMember!.member_id);
  if (!member) return res.status(404).json({ error: 'Member not found' });

  const settings = await tradeService.getTradeSettings(req.portalMember!.brand_id);

  // Create priority ticket in existing ticket system
  const ticket = await createTicket({
    source: 'form',
    subject,
    customer_email: member.email,
    customer_name: member.contact_name,
    shopify_customer_id: member.shopify_customer_id,
    priority: settings.ticket_priority_level as any,
    category: category || 'trade_concierge',
    tags: ['trade-member', 'trade-concierge'],
    order_id: order_id || undefined,
    metadata: { trade_member_id: member.id, company_name: member.company_name },
    brand_id: req.portalMember!.brand_id,
  });

  // Add the message as first ticket message
  await addTicketMessage(ticket.id, {
    sender_type: 'customer',
    sender_name: member.contact_name,
    sender_email: member.email,
    content: message,
  });

  await tradeService.logTradeEvent({
    brand_id: req.portalMember!.brand_id,
    member_id: member.id,
    event_type: 'concierge_request',
    actor: 'customer',
    actor_id: member.email,
    details: { ticket_id: ticket.id, subject },
  });

  return res.status(201).json({ ticket_number: ticket.ticket_number, message: 'Concierge request submitted' });
});
```

- [ ] **Step 3: Commit**

```bash
git add apps/backend/src/controllers/trade.controller.ts
git commit -m "feat: add portal auth and concierge endpoints"
```

---

### Task 21: Portal Pages

**Files:**
- Create: `apps/trade-portal/app/page.tsx` (dashboard home)
- Create: `apps/trade-portal/app/orders/page.tsx`
- Create: `apps/trade-portal/app/concierge/page.tsx`
- Create: `apps/trade-portal/app/resources/page.tsx`
- Create: `apps/trade-portal/app/account/page.tsx`
- Create: `apps/trade-portal/app/layout.tsx`
- Create: `apps/trade-portal/components/sidebar.tsx`

- [ ] **Step 1: Create the portal layout and sidebar**

Design matches Outlight brand aesthetic: minimal, warm tones, ceramic-inspired palette. Sidebar with navigation: Dashboard, Orders, Concierge, Resources, Account.

- [ ] **Step 2: Create dashboard home page**

Shows: welcome message with company name, quick stats (total orders, total savings, member since), trade code with copy button, recent orders, concierge CTA.

- [ ] **Step 3: Create orders page**

Table of B2B orders fetched via backend API. Columns: order number, date, items, total, status.

- [ ] **Step 4: Create concierge page**

Contact form (subject, message, related order dropdown, category). Past concierge requests listed below.

- [ ] **Step 5: Create resources page**

Grid of downloadable resources with title, description, download button.

- [ ] **Step 6: Create account page**

Read-only company info, payment terms, link to Shopify account.

- [ ] **Step 7: Commit**

```bash
git add apps/trade-portal/
git commit -m "feat: add trade portal pages (dashboard, orders, concierge, resources, account)"
```

---

## Phase 5: Support System Integration

### Task 22: Priority Flagging for Trade Members

**Files:**
- Modify: `apps/backend/src/services/ticket.service.ts`

- [ ] **Step 1: Add trade member detection to ticket creation**

In the `createTicket` function, after the ticket data is assembled but before the insert, add a trade member lookup:

```typescript
// Check if customer is a trade member — auto-upgrade priority
if (data.customer_email) {
  try {
    const { getMemberByEmail, getTradeSettings } = await import('./trade.service.js');
    const member = await getMemberByEmail(data.customer_email, data.brand_id || '');
    if (member) {
      const settings = await getTradeSettings(member.brand_id);
      // Upgrade priority if trade member
      if (!data.priority || data.priority === 'low' || data.priority === 'medium') {
        data.priority = settings.ticket_priority_level as any;
      }
      // Add trade tags
      data.tags = [...(data.tags || []), 'trade-member'];
      data.metadata = { ...(data.metadata || {}), trade_member_id: member.id, trade_company: member.company_name };
    }
  } catch (err) {
    console.error('[ticket.service] trade member check failed:', err);
    // Non-fatal — continue with original priority
  }
}
```

This is a minimal, non-breaking change. If the trade service import fails or the lookup fails, ticket creation proceeds normally.

- [ ] **Step 2: Commit**

```bash
git add apps/backend/src/services/ticket.service.ts
git commit -m "feat: auto-flag trade member tickets as high priority"
```

---

### Task 23: Trade Member Badge in Admin Ticket View

**Files:**
- Modify: `apps/admin/src/app/(dashboard)/tickets/[id]/page.tsx`

- [ ] **Step 1: Add trade member indicator**

In the customer profile sidebar of the ticket detail page, check if the ticket has a `trade-member` tag and show a badge:

```typescript
{ticket.tags?.includes('trade-member') && (
  <div className="inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded"
    style={{ backgroundColor: 'rgba(99,102,241,0.15)', color: 'var(--color-accent)' }}>
    Trade Member
  </div>
)}
```

Place this near the customer name/email in the sidebar.

- [ ] **Step 2: Commit**

```bash
git add apps/admin/src/app/\(dashboard\)/tickets/\[id\]/page.tsx
git commit -m "feat: show trade member badge on ticket detail"
```

---

## Summary

| Phase | Tasks | What it delivers |
|-------|-------|-----------------|
| 1: Database & Backend | Tasks 1-7 | Complete API for trade applications, approvals, members, settings, Shopify B2B integration |
| 2: Admin Dashboard | Tasks 8-15 | Trade program management UI in existing admin app |
| 3: Shopify Theme | Tasks 16-17 | Public-facing application page + trade member badges |
| 4: Trade Portal | Tasks 18-21 | Member-facing dashboard with orders, concierge, resources |
| 5: Support Integration | Tasks 22-23 | Priority flagging + trade badge on tickets |

**Build order:** Phase 1 → Phase 2 → Phase 3 → Phase 4 → Phase 5 (each depends on the previous)

**Pre-deployment configuration:**
- Add `express-rate-limit` dependency to backend: `cd apps/backend && npm install express-rate-limit`
- Add trade portal domain to CORS allowed origins in `apps/backend/src/index.ts` (add to `config.server.corsOrigin`)
- Add `TRADE_PORTAL_JWT_SECRET` env var to Railway backend
- Add suspension/reactivation email functions to `trade-email.service.ts` (same pattern as welcome/rejection emails)
- Export the `graphql` function from `shopify-admin.service.ts` if not already exported

**One-time Shopify setup (manual, before go-live):**
1. Create price list: "Outlight Trade Program" with -30% adjustment
2. Create catalog linked to that price list
3. Create customer segment: `customer_tags CONTAINS 'trade-program'`
4. Create discount code `TRADE30` locked to that segment
5. Store catalog ID in `trade_settings.metadata.shopify_catalog_id`
