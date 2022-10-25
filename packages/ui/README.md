# @mercurials/ui

🚀 The package offer ui for mercurials!

## Build

Use `vite` to build.

- `vite.config.cjs.build-lib.ts` to create CJS bundles

- `vite.config.es.build-es.ts` to create ESM bundles

- `vite.config.umd.build-dist.ts` to create UMD bundles

## Extend prop

If you want to extend ant-design-vue component prop, you must import `vue-types` just like: `import {} from 'vue-types`. see https://github.com/microsoft/TypeScript/issues/47663

## Tips

1. Don't use `<script lang="tsx">`, this usage will break vite build execute

2. Don't use `<script lang="ts" setup>`, this usage will case sourcemap not correct. see https://github.com/vitejs/vite/issues/6228