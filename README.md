# Adarsh Singh — portfolio

A static portfolio with custom engineering illustrations, responsive editorial layouts, technical project disclosures, and résumé download. All professional claims are based on the supplied résumé.

## Preview

Open `dist/index.html` directly, or run `node server.mjs` from this directory and visit `http://127.0.0.1:4173`. No installation or build is required. Email copying requires browser clipboard support; the address remains visible if copying is unavailable.

## Edit

- `dist/index.html`: content and diagrams
- `dist/style.css`: base styles
- `dist/refinements.css`: refined layout and responsive styles
- `dist/script.js`: email-copy feedback and local clock
- `dist/Adarsh-Singh-Resume.pdf`: downloadable résumé

Google Fonts are requested externally; system fonts remain as fallbacks. Project illustrations are original SVG/CSS schematics, not product screenshots. The latency comparison is explicitly normalized from the résumé's reported reduction.

## Verification

Reviewed in browser at phone and desktop widths, with no horizontal overflow detected. Both technical disclosures and email-copy feedback were exercised successfully. Local assets and section anchors were checked. Third-party project availability and résumé claims have not been independently audited.

## Publication

Prepared for GitHub and Render static-site hosting. The included `render.yaml` publishes `dist` without a dependency installation or compilation step. In Render, connect this repository as a Static Site, use `echo "Static portfolio ready"` as the build command, and `dist` as the publish directory. GitHub changes can then trigger automatic deployments.

The deployment includes the résumé and professional contact details intentionally displayed in the portfolio. No application secrets or environment variables are required. Local Sites metadata is excluded from Git through `.gitignore`.
