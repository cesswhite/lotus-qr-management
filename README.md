![cover-sokol-background](https://res.cloudinary.com/dpvsklksg/image/upload/v1723152159/Eco-Assets/Captura_de_pantalla_2024-08-08_a_la_s_3.22.13_p.m._ysejbv.png)

# Lotus | QR Management

[Repository guide](docs/REPOSITORY_GUIDE.md): code map, local storage, scripts and limits.
[AGENTS.md](AGENTS.md) provides concise instructions for coding assistants.

Look at [Nuxt docs](https://nuxt.com/docs/getting-started/introduction) and [Nuxt UI docs](https://ui.nuxt.com) to learn more.

- [Demo here](https://lotus.ecostudios.dev/)

## About

Easily manage QR Codes in seconds

Create, customize, and control your QR codes locally with no need for databases, microservices, or deployments.

Made by [Eco Development Studios](https://www.ecostudios.dev/)
- **Pages:** 4
- **Sections:** 2
- **Components:** ~22

## Features

- 💚 [Nuxt 3](https://nuxt.com/) - Open source framework that makes web development intuitive and powerful.
- 🎛 [Nuxt UI](https://ui.nuxt.com/) - A UI Library for Modern Web Apps.
- 🎨 [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework packed with classes.
- 🤹 [VueUse/Motion](https://motion.vueuse.org/) - Composables putting your components in motion.
- ▩ [Unjs/uqr](https://github.com/unjs/uqr) - Generate QR Code universally, in any runtime, to ANSI, Unicode or SVG.
- 😀 [Heroicons](https://github.com/simple-icons/simple-icons) - Integration with Heroicons.
- ⚡️ [Vite](https://vitejs.dev/) - Powered by Vite, instant HMR.
- 🦾 `<script setup lang="ts">` syntax with TypeScript support.

## Specifications

- **Price:** Free
- **Released date:** 13/04/23
- **Version:** 0.1
- **Tech Stack:** Nuxt 3 & TailwindCSS
- **Category:** SaaS
- **Page Speed:** 90 / 100 / 100 / 90 (historical listing; not a current measurement)
- **Compatibility:** Chrome, Firefox, Safari, Brave, Arc, Edge

## Folder and Component Structure

`app.vue` provides the page/layout shell. `pages/index.vue` presents the product;
`pages/lotus/` composes the dashboard, record manager and settings from `components/Lotus/`.
`composables/qr.ts` persists records and theme color in browser local storage.

There is no login or database: `/lotus/admin` is the local record manager, not a protected
administrator role. See the [repository guide](docs/REPOSITORY_GUIDE.md) for storage and QR behavior.

## Setup

Use pnpm with the committed `pnpm-lock.yaml` for installation; no package-manager version
is pinned in `package.json`. Bun can run scripts without replacing the dependency lock.

```bash
pnpm install --frozen-lockfile
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
bun run dev
```

## Production

Build the application for production:

```bash
bun run build
```

Locally preview production build:

```bash
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
