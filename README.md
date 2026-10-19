# Chef’s Corner

A mobile-first restaurant website built with Next.js 16 App Router, strict TypeScript, Tailwind CSS 4, and local fonts through `next/font`. Ready for Vercel.

## Run locally

Use Node.js 22.18+ (Node 24 recommended) and npm.

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Open the local URL printed by Next.js. For a production preview:

```sh
npm run build
npm run start
```

The scripts use Next.js’s supported Webpack path because Turbopack’s internal worker port was restricted in the build environment. No external font request is needed at build time.

## Checks

```sh
npm run lint
npm run typecheck
npm run build
npm run format:check
npm run validate:menu
npm run validate:hours
npm run validate:inquiry
```

`npm run check` runs lint, type-check, and production build. Menu validation checks all 84 source entries, unique IDs, names, positive prices and options, and explicitly allowed market-price/included-side exceptions. Hours checks cover opening/closing boundaries, weekends, and both sides of the daylight-saving change. Inquiry checks cover both form types, email, required event details, guest-count bounds, past dates, and impossible calendar dates.

## Project map

```text
src/app/                 Routes, inquiry API, sitemap, robots, social image
src/app/fonts/           Self-hosted DM Sans and Oswald, with OFL licenses
src/components/          Shared layout, menu interaction, forms, hours, map
src/data/menu.ts         Complete typed menu, plus source ambiguity comments
src/data/site.ts         Business information, hours, links, canonical URL
src/lib/                 Hours calculation, price formatting, Zod validation
src/types/menu.ts        Menu types
public/brand/logo.png    Original restaurant-supplied logo
public/images/           Clearly labeled illustrative photo placeholders
public/menus/            Downloadable restaurant menu
scripts/                 Data and logic validation
docs/Menu_File.pdf      Unchanged source menu (two pages)
```

Routes: `/`, `/menu`, `/catering`, `/about`, `/contact`, `/privacy`, and `/not-found`. Unknown URLs return Next.js’s real HTTP 404 with the custom page.

## Update the menu

Edit `src/data/menu.ts`; do not put items in components. Amounts are numbers in dollars. Use `options` for sizes/proteins and `addOns` for extras. Use `priceNote` for the market-price prime rib and included sides; standalone side prices are not provided in the source. Set `featured: true` to include an item on the home page. Preserve stable item IDs.

Replace both `docs/Menu_File.pdf` and `public/menus/chefs-corner-menu.pdf` when receiving a new printed menu, then compare both PDF pages against the data. Update the expected item count in `scripts/validate-menu.ts` only after checking the revised source.

Known source ambiguities are flagged in comments at the top of `menu.ts`: “Caeser” vs “Caesar,” the B.L.T./B.L.T. Club description, the separately priced Angus burger and grouped Grilled entry, and the unspecified Penne Alla Vodka “Combo.” Ligature extraction errors were corrected. Dietary tags do not guarantee allergen suitability; the PDF explicitly calls tofu vegan/vegetarian, but fryer and sauce details need confirmation.

## Update business details and hours

Edit `src/data/site.ts`. `hours` supplies grouped display rows; `weeklyHours` supplies the live badge and JSON-LD schema. Keep both in sync. Opening and closing values are minutes after midnight in **America/New_York**. The badge refreshes each minute and handles daylight-saving time through `Intl`.

The DoorDash button targets the public Chef’s Corner listing at `https://www.doordash.com/store/24952489/`; the owner should confirm this merchant listing before launch. Google directions and the embedded map target the supplied address.

## Configure inquiry email

1. Create a Resend account, verify a sending domain, and create an API key.
2. Set `RESEND_API_KEY` and `RESEND_FROM_EMAIL` in `.env.local` or Vercel’s environment settings. The sender must use the verified domain. Never expose the key with a `NEXT_PUBLIC_` prefix.
3. `INQUIRY_TO_EMAIL` defaults to the restaurant’s address. For testing, override it with an inbox you control.
4. Restart the local server or redeploy after changing environment variables. Submit both forms to the test inbox, verify delivery and reply-to, then restore the restaurant destination.

`POST /api/inquiry` validates with Zod, rejects oversized or malformed requests and unexpected origins, checks a honeypot, and sends plain-text email through Resend’s HTTP API. The client displays loading, success, validation, network, and delivery-error states. A missing email configuration returns HTTP 503 and directs visitors to call or email; it never claims an email was delivered. There is no database or payment flow. Requests do not confirm catering bookings.

The honeypot is basic spam protection. If the public site receives automated abuse, add hosting-level rate limits before increasing complexity in the form.

## Photos and catering PDFs

The restaurant-supplied original PNG logo is used in the header, footer, home page, and about page. Other food photos are **illustrative placeholders, not actual Chef’s Corner dishes or premises** and are visibly labeled. Replace them with restaurant-approved images in `public/images/`, update alt text, and remove placeholder captions only once actual photography is installed. All rendered image assets use `next/image`.

Photo source references:

- Hero/shared meal: image source ID `photo-1555939594-58d7cb561ad1`
- Chicken: image source ID `photo-1562967914-608f82629710`
- Sandwich: image source ID `photo-1568901346375-23c9450c58cd`
- Dining/meal: image source ID `photo-1559847844-5315695dadae`

Downloaded from `images.unsplash.com`, with image optimization parameters. Replace these placeholders before representing them as actual menu items.

A dedicated catering PDF was not supplied. The catering page directs visitors to contact the team for catering menus and pricing, and offers the restaurant menu PDF for inspiration. Put approved catering PDFs in `public/menus/` and add properly labeled download links in `src/app/catering/page.tsx` when available.

## Deploy on Vercel

1. Push this project to the repository of your choice and import it into Vercel using the Next.js preset.
2. Use `npm run build` as the build command; leave the output directory at the Next.js default.
3. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin, without a trailing slash. The default is `https://chefscorneronmain.com`. It controls canonical links, sitemap, schema, social asset URLs, and permitted form origins.
4. Add the Resend environment variables above to the intended deployment environment.
5. Deploy a preview, verify the final content and email delivery, then connect the restaurant domain in Vercel. Keep the existing WordPress host until the domain switch is verified.

This work is a local project; no production domain, external hosting project, or live restaurant site was changed.

## Accessibility, SEO, and performance

The site includes semantic navigation and headings, keyboard-visible focus, a skip link, accessible forms, responsive mobile actions, reduced-motion handling, and a print-friendly menu. Menu data is rendered in initial HTML for SEO and JavaScript-free reading; filtering and scroll-spy enhance it on the client. Fonts are local, photos use responsive `next/image`, and maps load lazily.

Each content route has a title, description, and canonical URL. Restaurant JSON-LD is generated from site configuration. `/sitemap.xml`, `/robots.txt`, `/opengraph-image`, and the favicon are generated by Next.js.

The final local mobile home Lighthouse report scored 95 Performance, 100 Accessibility, 100 Best Practices, and 100 SEO. The exported report is in `reports/`. Browser checks, measurement conditions, menu-page results, and remaining limitations are recorded in `QA.md`. Rerun on the deployed site with extensions disabled, using mobile and desktop settings.

## Dependency audit

Production dependencies reported zero known vulnerabilities during implementation. The development-only `eslint-config-next` → `fast-glob` → `micromatch` → `braces` chain has an upstream audit advisory with no patched `braces` release available at the time of the check. Do not accept npm’s suggested downgrade to Next.js 14 tooling as an automatic fix. Recheck with `npm audit` and update the matching Next.js lint packages when a compatible upstream fix is available.
