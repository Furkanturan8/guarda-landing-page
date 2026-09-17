# Guarda — Landing Page

🔗 **Live:** [https://guarda-three.vercel.app/](https://guarda-three.vercel.app/)

> ℹ️ **Note:** The Chrome Extension is currently submitted and pending review on the Chrome Web Store.

The marketing site for **Guarda**, a bookmark manager and personal planner.
This repo contains the public landing page — the actual product
(frontend app, backend API) lives in a separate, private repo. This README
exists so anyone working on this site (including future-you) understands
what Guarda *is* without needing access to that other repo.

## What is Guarda?

> **Save → Organize → Plan → Complete**

Guarda solves a simple problem: people save hundreds of links and rarely
come back to them. It's a bookmark manager where a saved link can optionally
become an actionable task with a reminder — think *bookmark manager +
read-later app + lightweight personal planner*, not a Notion/Trello clone.

---

## 📸 App Preview & Core Features

### 1. 📥 Inbox
A friction-free drop zone to save links on the fly. Drop URLs here throughout the day without stopping to categorize or tag them, then organize them when you have time.

<p align="center">
  <img src="public/gelenkutusu-en.png" alt="Guarda Inbox" width="850">
</p>

### 2. 🔖 Bookmarks
A visual, searchable gallery of all your saved bookmarks. Automatically extracts rich metadata (page title, description, favicon, cover image, and content type: article, video, GitHub repo, documentation, etc.).

<p align="center">
  <img src="public/bookmarks-en.png" alt="Guarda Bookmarks" width="850">
</p>

### 3. 📁 Collections
Structure your workspace with user-defined, nestable folders (e.g. `Learning > Backend`, `Design Inspiration`, `Projects`).

<p align="center">
  <img src="public/koleksiyonlar-en.png" alt="Guarda Collections" width="850">
</p>

### 4. 🏷️ Tags
Fast, multi-dimensional tagging independent of folder hierarchy. Group links across collections for instant filtering.

<p align="center">
  <img src="public/etiketler-en.png" alt="Guarda Tags" width="850">
</p>

### 5. 📅 Planner & Tasks
Turn links into action. Convert any bookmark into a task (`Read`, `Watch`, `Apply`, `Research`, …) with scheduled dates, deadlines, and reminders to ensure you actually follow through.

<p align="center">
  <img src="public/planlayici-en.png" alt="Guarda Planner" width="850">
</p>

---

## Product architecture (context, not part of this repo)

Guarda ships as a **tiered, local-first** product:

| | Free | Premium |
|---|---|---|
| Data | Browser `localStorage` only | Hosted PostgreSQL, synced across devices |
| Server calls | None | Go REST API |
| AI / scraping | Off | Async metadata scraping + AI tagging/summaries |

Product stack (for reference, lives in the main repo):

- **Frontend:** Next.js (App Router) + TypeScript + Tailwind v4 + shadcn/ui
- **Backend:** Go (Fiber) REST API + PostgreSQL + Redis/asynq background
  workers
- **Extension:** browser extension for one-click quick capture

This landing page's job is to sell that product, so its copy/screenshots
need to stay truthful to the Free/Premium split above (e.g. don't promise
AI features as if they're free).

## What's in this repo

```text
landingpage.html   Single static HTML file — the entire site (hero, feature
                    grid, premium teaser section, footer). Tailwind is
                    loaded via the CDN script + inline config, no build step.
public/*.png       Turkish and English screenshots (mirror the app's TR/EN support)
```

Notable sections in `landingpage.html` (`id` attributes): `#ozellikler`
(feature grid), `#premium` (premium sneak peek).

> **Heads up:** `landingpage.html` is generated/edited by an external
> design tool and gets re-exported over this file from time to time. Treat
> manual edits as temporary until they've been reconciled with the design
> tool's own copy — don't invest in hand-crafted structure here that the
> next export would silently clobber.

## Language

Content defaults to Turkish (`lang="tr"`), with an English variant implied
by the `-en` screenshot pairs — matching the main app's TR/EN interface
support.

## Planned stack

Migrating to **Next.js (App Router) + TypeScript + Tailwind**, matching the
main app's stack so components/design tokens can be shared later if needed.
Since the site has no server-side needs (no API routes, no auth, no
dynamic data), it will use Next's **static export** (`output: 'export'` in
`next.config`) — this produces plain HTML/CSS/JS with no Node server
required, which is what GitHub Pages needs.

## Deploying (GitHub Pages)

Static export + GitHub Pages works fine for a page like this:

1. `next.config.ts`: `output: 'export'`, and `basePath`/`assetPrefix` set to
   `/guarda-landing-page` unless serving from a custom domain or a
   `<username>.github.io` root repo.
2. A GitHub Actions workflow (`actions/configure-pages` +
   `actions/upload-pages-artifact` + `actions/deploy-pages`) builds on push
   to `main` and publishes the `out/` directory to GitHub Pages.
3. Pages settings → Source: "GitHub Actions" (not "Deploy from a branch").

Until the Next.js migration lands, `landingpage.html` is still deployable
as-is to GitHub Pages, Netlify, Vercel, or any static host (rename/alias to
`index.html` for GitHub Pages).
