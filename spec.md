# Tru Bond Back Cleaning Brisbane

## Current State
- React/TypeScript frontend with 4 pages: Home, Services, About, Contact
- TanStack Router with hash-based routing
- SEO component used on all pages
- No suburb-specific pages exist

## Requested Changes (Diff)

### Add
- 10 dedicated suburb pages, each with:
  - ~400 words of SEO-optimised content in Australian English, active voice, readable by a 10-year-old
  - Unique title tag, meta description, meta keywords per suburb
  - Open Graph and Twitter Card tags per suburb
  - JSON-LD LocalBusiness structured data
  - Internal CTA links to /contact
- Suburbs to cover (all Brisbane area):
  1. Fortitude Valley
  2. South Brisbane
  3. North Brisbane (Chermside)
  4. Capalaba
  5. Manly
  6. Wynnum
  7. Ipswich
  8. Logan Central
  9. Springwood
  10. Indooroopilly
- A "Service Areas" section on the Home page with links to all suburb pages (internal linking for SEO)
- Routes for each suburb page: /suburbs/[slug]

### Modify
- App.tsx: add route entries for all 10 suburb pages
- HomePage.tsx: add "Areas We Serve" section with anchor links to each suburb page

### Remove
- Nothing removed
