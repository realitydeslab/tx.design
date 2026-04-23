# tx.design

Source for [tx.design](https://tx.design) — *Turning to Trust Experience Design (TXD): A Manifesto for the Future of Distributed Autonomous Intelligence in the Wild* by Helena Rong & Botao Amber Hu.

Authored in Markdown, compiled to a static Next.js build, and deployed to GitHub Pages via GitHub Actions.

## Edit

The manifesto lives in `content/manifesto.md`. Edit that file; everything else is layout/styling.

## Local development

```bash
npm install
npm run dev        # live preview at http://localhost:3000
npm run build      # static export to ./out
```

## Deploy

Push to `main`. The `Deploy Next.js to GitHub Pages` workflow builds and publishes automatically. Custom domain `tx.design` is served from `public/CNAME`.

## DNS (one-time)

Point `tx.design` at GitHub Pages. At your registrar, set:

- `A` records for the apex → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- (optional) `CNAME` for `www` → `realitydeslab.github.io`

Then in repo **Settings → Pages**: source = *GitHub Actions*, custom domain = `tx.design`, enforce HTTPS once certificate is issued.
