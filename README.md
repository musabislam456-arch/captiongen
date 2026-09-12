# CaptionGen

**Live site:** [captiongen.utilix.site](https://captiongen.utilix.site)

Free social media marketing tools — rule-based caption generator, hashtag finder, and best posting times guide. Zero sign-up required.

## Features

- **Caption Generator** — instant, rule-based social captions
- **Hashtag Generator** — 2026 hashtag finder
- **Best Posting Times** guide
- Blog for social media marketing SEO
- No sign-up, fully client-side

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router) + React + TypeScript
- Tailwind CSS
- Auto-generated `sitemap.xml` and `robots.txt`

## Getting Started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
bun run build
bun start
```

## Project Structure

```
app/            Routes (tools/caption-generator, tools/hashtag-generator, best-posting-times, blog, about, contact)
components/     Shared UI components (Navbar, Footer, etc.)
lib/            Blog post data
```

## License

All rights reserved.
