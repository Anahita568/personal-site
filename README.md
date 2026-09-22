# Personal site

A minimal, single-page personal site. Vanilla TypeScript, no framework —
just Vite for bundling.

## Run it locally

```
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Customize it

Everything you need to change is in two files:

- **`index.html`** — your name, tagline, about text, project entries,
  and contact links. It's plain HTML, so just edit the text directly.
- **`src/style.css`** — colors, fonts, and spacing all live as CSS
  variables at the top of the file, under `:root`. Change `--accent` to
  swap the accent color, for example.

To add or remove a project, copy/paste one `<li class="project">…</li>`
block in `index.html`.

## Deploy it

Build first:

```
npm run build
```

This outputs a static site to `dist/`. Deploy that folder to Vercel,
Netlify, GitHub Pages, or any static host:

- **Vercel / Netlify**: connect the repo (or drag-and-drop the `dist`
  folder in their dashboard) — both auto-detect Vite and run
  `npm run build` for you if you connect the repo directly.
- **GitHub Pages**: push `dist/` to a `gh-pages` branch, or use their
  Vite deploy action.

## About the "not on Google" part

The site ships two things that ask search engines not to index it:

1. `<meta name="robots" content="noindex, nofollow">` in `index.html`
2. `public/robots.txt`, which disallows all crawlers

Well-behaved crawlers (Google included) respect both, so it won't show
up in search results and won't get suggested to people who don't
already have the link.

**What this doesn't do:** it's not access control. The page is still
publicly reachable by anyone who has the exact URL — noindex just keeps
it out of search results. If you want to stop even people with the link
from getting in without your say-so, you'd need something extra, like:

- Vercel/Netlify's built-in password protection (paid tiers on both)
- A simple shared-password gate added to the page itself

Happy to help add either of those if you want real access control later
— just ask.
