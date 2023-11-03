# Are We LibAdwaita Yet?

Welcome to the "Are We LibAdwaita Yet?" website, where you can explore a curated collection of apps that utilize `libadwaita`. While this list may not encompass every app in existence, it provides a snapshot of apps that we are aware of and welcomes contributions from the community to expand the selection.

## 🚀 Project Structure

Here's an overview of the project's directory structure:

```text
/
├── public/
├── src/
|   └── apps.ts
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Contributing

If you come across an app that's missing from our list, you can actively contribute by forking this repository and adding it to the `src/apps.ts` file. Each app entry should include four mandatory fields. Note that the app **must** be published on [Flathub](https://flathub.org) for it to be considered.

We appreciate your contributions and look forward to growing our collection of LibAdwaita-powered apps!
