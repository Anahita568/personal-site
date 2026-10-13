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
