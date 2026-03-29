# Runlab Website

Marketing and compliance website for [Runlab](https://runlab.fit), an AI-powered running coach for iOS.

## Pages

- **Landing** — hero, features, pricing, testimonials
- **Privacy Policy** — HealthKit disclosure, AI data processing, data sharing
- **Terms of Service** — account deletion, HealthKit compliance, COPPA
- **Support** — contact, account deletion guide, FAQ

## Stack

- [Astro](https://astro.build) v6 — static site generator
- [Cloudflare Pages](https://pages.cloudflare.com) — hosting
- No JavaScript shipped to the client

## Development

```bash
pnpm install
pnpm dev        # start dev server at localhost:4321
pnpm build      # build to dist/
pnpm preview    # preview production build
```

## Deployment

Connect the repo to Cloudflare Pages with:

- **Build command:** `pnpm build`
- **Output directory:** `dist`

## License

MIT
