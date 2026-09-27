# Live storefront source sync — September 27, 2026

This commit brings the repository's theme text files up to the currently published Shopify theme. The source was read directly from the live theme after the cart and Aven changes, preserving other production updates. Existing repository-only files and binary assets were retained. No deployment from the older repository checkout was performed.

## Customer-facing changes

- Aven is presented as one product without a size picker or redundant variant labels.
- Cart drawer uses a clean product area, delivery timing, accessible quantity controls, and a compact checkout summary.
- Discount input remains visible, and actual Shopify discount applications show their applied status.
- Original total, total discount and subtotal reflect Shopify cart values.
- The top reassurance explains that returns, warranty and support continue after clearance ends.
- Global cart styles support first-add dynamic section rendering; keyboard focus and short-screen scrolling are preserved.

Aven product records, gallery, dimensions, and guide copy are stored in Shopify rather than in theme source. Those changes are already published: one retained variant, no size choice, 44.1 × 9.8 inch dimensions, revised gallery and three updated guides. Historical customer review wording is preserved.

Checkout is maintained separately at https://github.com/caabsu/outlight-checkout and deployed at https://checkout.outlight.us. Its latest header, countdown and compact typography are not part of the Shopify theme.

## Verification

The task's Liquid/CSS/locale changes passed Shopify validation before their live deployment. Cart reviewed at desktop, 390px and 320px widths; original total, discount and subtotal verified through quantity changes and restored to the original cart. Checkout production build passed and shared header was reviewed at desktop and phone widths. No payment or order was submitted. Source sync matches the live theme text readback and excludes API response archives, credentials and private operational records.
