# Verification record

Checked locally on October 19, 2026 (Asia/Dhaka), using the production Next.js build.

## Automated checks

- ESLint: passed, zero errors or warnings.
- Strict TypeScript: passed.
- Production build: passed for every route.
- Prettier: passed.
- Menu inventory: 84 entries across 10 categories; names, IDs, prices, variants, and allowed unpriced exceptions validated.
- Hours: 10 opening/closing, weekday/weekend, and daylight-saving boundary cases passed.
- Inquiry validation: valid contact/catering inputs accepted; malformed email, short message, missing catering details, invalid guest counts, past dates, and impossible calendar dates rejected.
- Production dependency audit: zero known vulnerabilities. Development-only upstream globbing advisory is documented in README.

## HTTP checks

HTTP 200 for home, menu, catering, about, contact, privacy, the explicit `/not-found` route, sitemap, robots, social image, favicon, logo, and menu PDF. An unknown route correctly returns HTTP 404.

Initial menu HTML contains item content, canonical metadata, and Restaurant JSON-LD. The menu is readable without relying on client-side data loading.

The inquiry endpoint returns HTTP 400 for invalid input, HTTP 403 for an unexpected origin, HTTP 200 for the honeypot path without sending, and HTTP 503 with the restaurant’s phone/email when delivery is unconfigured. No email was sent during these checks.

## Browser review

Chrome: desktop home/menu review, 360px mobile home/menu/catering review, and 1440px home layout. Menu search for “truffle” returned the expected three dishes, and clearing search restored all 84 entries. Mobile navigation opens, navigates, and closes; the bottom Call / Directions / Menu bar is visible. Catering fields remain within the mobile viewport with visible focus styling.

The logo was visually inspected against its source. Images remain visibly labeled illustrative placeholders. The original menu PDF is served unchanged. Dedicated catering PDFs have not been supplied.

## Lighthouse

Initial mobile home report: Performance 92, Accessibility 96, Best Practices 100, SEO 100. Lighthouse 13.4.1, Chromium 155, emulated Moto G Power, Slow 4G. The missing accessible name on the mobile phone link was corrected after this report.

Final mobile home report: **Performance 95, Accessibility 100, Best Practices 100, SEO 100**. Captured at 11:21 PM Asia/Dhaka using the same mobile/throttling settings. FCP 0.8 s, LCP 3.0 s, TBT 10 ms, CLS 0. Export: `reports/home-mobile-lighthouse.html`.

Final mobile menu report: **Performance 97, Accessibility 100, Best Practices 100, SEO 100**. Captured at 11:22 PM Asia/Dhaka with Lighthouse 13.4.1, Moto G Power emulation, and Slow 4G throttling. Export: `reports/menu-mobile-lighthouse.html`. Machine-readable score summaries for both pages are stored beside the HTML reports.

## Remaining launch setup and verification limits

- Add verified Resend credentials and test actual delivery, reply-to, and destination inbox.
- Replace illustrative images with restaurant-approved photography; supply dedicated catering PDFs.
- Confirm source ambiguities listed in `src/data/menu.ts` and the owner’s DoorDash listing.
- Set the final canonical HTTPS origin and deploy to the intended Vercel account. No live site or domain was modified.
- Lighthouse is a local lab measurement, not a guarantee of field performance. Browser extensions were present in the user’s Chrome profile; rerun on the deployed origin with extensions disabled before launch.
- Automated accessibility checks and sampled responsive review do not constitute a full assistive-technology or all-browser audit. Chrome print preview was reviewed: the full menu renders in six pages with two columns and the raw-food disclaimer. A skip-link overlay discovered in print preview was removed in a print-only CSS correction. Physical printer pagination has not been verified.

## Original logo update

Replaced the PDF-extracted crop with the restaurant-supplied 1030 × 600 PNG, unchanged. The original artwork is now used in the header and footer as well as the home/about content and schema image. The Lighthouse reports above predate this branding update.
