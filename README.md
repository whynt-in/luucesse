# Luucesse

The Luucesse marketing website, built with Astro and Tailwind CSS. It presents Luucesse's website, content, social media, AI assistant, brand strategy, and digital advertising services.

## Requirements

- Node.js 22.12 or newer
- npm

## Local development

```sh
npm install
npm run dev
```

The development server is available at `http://localhost:4321`.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run check` | Run Astro and TypeScript checks |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Configuration

Brand, contact, navigation, service area, and theme settings are defined in `src/config.ts`.

For the contact form, provide the Formgong access key through an environment variable:

```sh
PUBLIC_FORMGONG_ACCESS_KEY=fk_your_access_key
```

Set the production URL when deploying so Astro can generate absolute canonical URLs, JSON-LD, and the sitemap:

```sh
SITE_URL=https://your-production-domain.example
```

Do not commit `.env` files or access keys.

## Project structure

- `src/pages/` — site routes
- `src/components/` — shared layout, navigation, form, and visual components
- `src/content/services/` — service content
- `src/styles/` — global styles and animation effects
- `public/` — static assets

Run the checks before deployment:

```sh
npm run check
npm run build
```
