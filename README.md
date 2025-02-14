# POC 

## Vite multi-app

Inspired in Nuxt Layers

The idea is to have a `core` app with main features, like components, state management, etc.

The `core` also has a CLI to help to run and build the modules

The modules will have a `module.config.tsx` file with the routes. Can be used routes from others modules

## How to use

Use it with `pnpm`

### core

1. Install dependencies with `pnpm install`
2. Build the CLI with `pnpm build`
3. Create a link to use as dependency in other projecs with `pnpm link --global`

### module-b

1. Install dependencies with `pnpm install`
2. Create a link with `pnpm link --global`

### module-a

1. Install dependencies with `pnpm install`
2. Link `core` and `module-b` with `pnpm link core` and `pnpm link module-b`
3. Run with `pnpm dev`

Access the URL to see app working. Access routes from `module-a` and `module-b`

## Build

In `module-a` run `pnpm build`

A `dist` folder will be created, if you serve it it will work with all routes from `module-a` and `module-b`

## Roadmap

- Allow share other features beyond pages
- Allow use a shareable state management between modules


