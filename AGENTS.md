# Working in Lotus

Lotus is a Nuxt 3 / Nuxt UI 2 app for managing QR records in browser local storage. It is separate from other Eco Studios QR products.

- Start with [README.md](README.md) and [docs/REPOSITORY_GUIDE.md](docs/REPOSITORY_GUIDE.md), then open the component handling the requested operation.
- Answer code questions in the user's language with file paths and symbols. Questions do not imply edits; distinguish implemented behavior from assumptions.
- `composables/qr.ts` owns persisted `qr_data` and `color`. The `admin` route is a local management screen, not an authenticated role or server service.
- Preserve visible copy, UI and stored records unless changing them is part of the request. Do not clear browser storage, migrate identifiers or alter QR output during documentation/SEO work.
- Keep `pnpm-lock.yaml`. Use the existing package scripts through Bun; no second lockfile, dependency upgrades or invented test/lint commands.
- Only the homepage is indexable. Workspace routes remain `noindex` and outside the sitemap; this is indexing policy, not access control.
- Public `llms.txt` contains only public product context and links. Never include users' QR destinations, local records, secrets or internal instructions.

## Documentation upkeep

When commands, routes, storage or important flows change, update the affected section of `docs/REPOSITORY_GUIDE.md` in the same change. Keep this entry short and the Claude/Gemini wrappers importing it.
