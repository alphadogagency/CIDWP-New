# Cosmetic & Implant Dentistry Westport

An Astro website for the Westport, Kansas City dental practice. The approved November design covers the homepage, 34 service/concern/patient/practice pages, and shared styling for retained pages. See [November implementation and verification](docs/november-homepage-continuation.md).

## Local development

Requires Node.js 22.12 or newer.

```sh
npm ci
npm run dev -- --background
```

Use the local URL reported by Astro. Manage the background server with:

```sh
npx astro dev status
npx astro dev logs
npx astro dev stop
```

## Validation and production build

```sh
npx astro check
npm run build
npm run content:verify
npm run package:verify
npm test
```

The static website is generated in `dist/`. Build output and installed dependencies are excluded from Git.

Google reviews and aggregate rating/count load through the Cloudflare Pages Function at `/api/google-reviews`, with a truthful fallback when unavailable. See [Google Reviews Setup](docs/google-reviews-setup.md) for server variables, deployment, usage controls, and runtime checks. Astro development proxies the existing public endpoint without local credentials; it does not execute the changed Function locally.

## Editing the website

- `src/pages/index.astro`: homepage section order.
- `src/components/`: shared navigation, homepage sections, and the interior-page layout.
- `src/data/pages.json`: imported interior content, generated from the dated source captures.
- `src/data/november-pages.json` and `src/lib/page-package.ts`: the November page package, routes and schema.
- `src/styles/homepage.css`, `page-package.css`, and `navigation.css`: the November design and responsive layouts.
- `src/styles/interior.css`: interior layouts using the approved homepage design.
- `src/styles/global.css`: styles, responsive layouts, and motion preferences.
- `src/lib/site.ts`: practice details and link destinations.
- `src/assets/`: practice photography and logo.

Interior links now use local routes. External appointment booking, membership, financing, and other source destinations remain available. The project does not handle appointment submissions itself; Jotform is pending Bryan's final embed.

See [Migration Notes](docs/migration/README.md) for the historical import and [November continuation](docs/november-homepage-continuation.md) for current approvals, implementation and publication status. Visit `/migration-review/` locally for imported-route comparisons. The internal homepage review route is `/design-review/`; `/review/` is the public patient-review page with Google/Facebook destinations and live reviews.
