# Mercurials

🚀 A modern high-performance Monorepo project with pnpm + turbo + changeset + vite + vue3.x + ant-design-vue3.x!

## Internal

`internal` and `_` folder means internal package or functions.

## Build

- `internal/**` packages use `tsup` to build

- `packages/**` and `app/**` packages use `vite` to build, avoid some problems just like circle dependencies. 🥱

## Realse

Use `pnpm changeset:gen` to generate changesets, then push your code. 🎉