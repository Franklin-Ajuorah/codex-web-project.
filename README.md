# Franklin’s portfolio

An English/German portfolio for Chidi Franklin Ajuorah. This first milestone is the homepage; separate project, live-demo, and about pages follow homepage approval.

## Run locally

Use Node.js 22 or newer. From this repository:

```sh
npm ci
npm run dev
```

Vite prints the development server address. To build and inspect production files:

```sh
npm run build
npm run preview
```

The build goes into `dist/`. Relative asset paths support a GitHub Pages repository path or Vercel. Deployment has not been configured or performed yet.

## What each file does

- `index.html`: homepage sections, navigation, contact links, and project dialog. `data-i18n` connects text to a translation key.
- `src/main.js`: English/German translations, language preference, project dialogs, and footer year. Edit both language entries when changing text. Content uses safe text insertion.
- `src/style.css`: theme, spacing, typography, responsive layouts, keyboard focus, and reduced-motion support. Variables at the top control the colors. Google Fonts are optional; system fonts work without them.
- `favicon.svg`: the small “f.” browser-tab icon.
- `package.json`: development/build commands and the Vite dependency. There is no application backend.
- `package-lock.json`: exact dependency versions for reproducible installation with `npm ci`.
- `.gitignore`: excludes dependencies, build output, local environment files, and logs.

## Current interactions

EN/DE translates the page and remembers the choice when browser storage is available. Project cards open modal dialogs, which close with ×, Escape, or a click outside. Contact opens an email draft in the visitor’s mail app. GitHub and LinkedIn open your supplied profiles.

The workflow canvas is an illustration, not a running workflow or screenshot. Project names come from the brief; technical behavior has not been verified. There are no fake responses, invented screenshots, headshot, or unverified live statuses. Navigation currently links to homepage sections.

## Planned live-demo milestone

Configure the supplied n8n destinations through `VITE_WEBHOOK_RECEIVER_URL`, `VITE_STATIC_VERIFIER_URL`, and `VITE_SELENE_ORCHESTRATOR_URL` in an ignored `.env.local` file or hosting build settings. These variables are **not read by this homepage yet**. Vite browser variables are public in the build: never put credentials in them. We will verify payload formats, CORS, timeout handling, and real responses when building the demo. Results must be real, with clear errors and no simulated fallback.

Next: approve homepage → projects page → live demo → full about page with your real photo → deployment.
