# Lotus repository guide

## Purpose and reading order

Lotus is a local QR organizer built with Nuxt 3, Nuxt UI 2 and `uqr`. Visitors can create, edit, view, delete and download QR codes in a browser workspace. It is not the separate Eco Studios QR generator repository.

Read the [README](../README.md), then the relevant files below. Explain observed code with paths and symbols, in the user's language; a question is not a request to modify behavior. No separate product-marketing context is checked in.

## Code map

| Entry | Responsibility |
| --- | --- |
| [app.vue](../app.vue) | Root page shell, notifications, restored theme color and route-aware metadata/schema. |
| [pages/index.vue](../pages/index.vue) and [components/Index/Hero.vue](../components/Index/Hero.vue) | Public product description and entry to the workspace. |
| [pages/lotus/](../pages/lotus/) and [layouts/lotus.vue](../layouts/lotus.vue) | `/lotus`, `/lotus/admin`, `/lotus/settings` and their shared workspace layout. |
| [composables/qr.ts](../composables/qr.ts) | VueUse `useLocalStorage` refs `qr_data` and `color`; persistence source for the workspace. |
| [types/index.ts](../types/index.ts) | `QRData` record fields: identifier, date, name and URL. |
| [components/Lotus/Admin/Create.vue](../components/Lotus/Admin/Create.vue) | Required-field validation and `onSubmit` to append a record. |
| [components/Lotus/Admin/Edit.vue](../components/Lotus/Admin/Edit.vue) | Populate the edit form and replace the matching record on submit. |
| [components/Lotus/Admin/Table.vue](../components/Lotus/Admin/Table.vue) | Filtered rows, modal state, `renderSVG`, deletion and `downloadSvgAsSvg`. |
| [components/Lotus/Dashboard/Container.vue](../components/Lotus/Dashboard/Container.vue) | Total count derived from the local record array. |
| [components/Lotus/Settings/ColorPicker.vue](../components/Lotus/Settings/ColorPicker.vue) and [app.config.ts](../app.config.ts) | Primary color choices, `setPrimaryColor` and UI configuration. |
| [nuxt.config.ts](../nuxt.config.ts) and [package.json](../package.json) | Modules, workspace robots headers, dependency versions and exact scripts. |
| [public/robots.txt](../public/robots.txt), [public/sitemap.xml](../public/sitemap.xml) and [public/llms.txt](../public/llms.txt) | Crawler policy, homepage discovery and optional public product context. |

## Record and rendering flow

`qr_data` persists an array in local storage. Create validates the presence of name/URL, prepends the form's HTTPS scheme and appends a record with an ID based on array length. Edit finds the record by ID, replaces its values and updates its date. Delete removes the first matching ID from the array. The dashboard count is `qr_data.length`, not a count fetched from a server.

The table passes the stored destination to `uqr`'s `renderSVG` for a preview. `downloadSvgAsSvg` serializes the selected DOM element into a Blob, creates an object URL and triggers a download. Changing a local record does not update an already downloaded QR image or a remote redirect service.

`setPrimaryColor` updates Nuxt UI configuration and the persisted `color` ref; `app.vue` restores it on mount. Use this flow when explaining theme persistence rather than treating it as an account preference.

## Commands and configuration

`pnpm-lock.yaml` is committed; `package.json` does not pin a package-manager version. Install using a compatible pnpm release with `pnpm install --frozen-lockfile`. Do not rewrite the dependency graph simply to generate another manager's lockfile. Bun can run the existing scripts:

| Command | Exact package script |
| --- | --- |
| `bun run dev` | `nuxt dev` |
| `bun run build` | `nuxt build` |
| `bun run preview` | `nuxt preview` |
| `bun run generate` | `nuxt generate` |
| `bun run postinstall` | `nuxt prepare` |

There are no `test`, `lint` or `typecheck` package scripts and no checked-in GitHub Actions workflows. Documentation changes require link/script/diff inspection. Application changes require focused runtime checks of the affected record/QR flow; do not claim an absent automated suite passed.

No application environment variables are referenced by the current source. There is no database, authentication module, implemented server API or cloud synchronization. `server/tsconfig.json` alone does not provide a backend.

## Privacy, SEO and real limits

The word `admin` names a workspace screen; it does not identify an authenticated administrator. Local records belong to the browser storage for this origin. Clearing storage removes them; they do not automatically transfer to another browser/device. Do not inspect or export a user's saved URLs merely to explain the app.

Identifiers are currently `length + 1`, so deleting and then creating records can reuse an existing ID. Required-field checks do not constitute full URL validation. These are existing implementation limits, not changes made by this documentation; address them only in a scoped functional task.

`app.vue` sets the canonical origin to `https://lotus.ecostudios.dev`. Only `/` gets public schema and an indexable robots value. `nuxt.config.ts` also gives `/lotus` and its descendants `X-Robots-Tag: noindex, follow`; `public/sitemap.xml` lists only `/`. Robots controls do not secure local data or authenticate a route.

`llms.txt` is optional public context, not a ranking, indexation or AI-citation guarantee. It must not expose workspace records or internal routes. README performance figures are historical listing details, not current measurements. Preserve visible copy and UI for technical SEO/documentation work.

## Four example questions

- **Where are QR records saved and how are they edited?** Follow `qr_data` in `composables/qr.ts` through `Admin/Create.vue`, `Admin/Edit.vue` and `types/index.ts`.
- **How is a QR preview downloaded?** Read `openModalAndSetData`, `renderSVG` and `downloadSvgAsSvg` in `components/Lotus/Admin/Table.vue`; separate destination text from encoded output.
- **Why does the chosen color survive a refresh?** Follow `setPrimaryColor` in `Settings/ColorPicker.vue`, the `color` ref and `app.vue`'s mount hook.
- **Does `/lotus/admin` require login, and why is it absent from the sitemap?** Compare `pages/lotus/`, `nuxt.config.ts`, `app.vue` and `public/sitemap.xml`; explain storage and indexing separately.
