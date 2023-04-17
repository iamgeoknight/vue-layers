# vue-layers

### Tutorial Posts
1. [Integrating OpenLayers Map with VueJS: Create Map – Part 1](https://spatial-dev.guru/2022/02/20/integrating-openlayers-map-with-vuejs-create-map-part-1/).
2. [Integrating OpenLayers Map with VueJS: Create Layers Panel – Part 2](https://spatial-dev.guru/2022/06/02/integrating-openlayers-map-with-vuejs-create-layers-panel-part-2/).
3. [Integrating OpenLayers Map with VueJS: Implement Style and legend for vector layer – Part 3](https://spatial-dev.guru/2022/10/30/integrating-openlayers-map-with-vuejs-implement-style-and-legend-for-vector-layer-part-3/).
4. [Integrating OpenLayers Map with VueJS: Open Feature Information Popup on click – Part 4](https://spatial-dev.guru/2023/02/05/integrating-openlayers-map-with-vuejs-open-feature-information-popup-on-click-part-4/).
5. [Integrating OpenLayers Map with VueJS: Recreating the project with Vite, Pinia and TypeScript-Part 5](https://spatial-dev.guru/2023/04/13/integrating-openlayers-map-with-vuejs-recreating-the-project-with-vite-pinia-and-typescript-part-5/).

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
