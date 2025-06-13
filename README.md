# Are We LibAdwaita Yet?

Welcome to the "Are We LibAdwaita Yet?" website, where you can explore a curated collection of apps that utilize `libadwaita`. While this list may not encompass every app in existence, it provides a snapshot of apps that we are aware of and welcomes contributions from the community to expand the selection.

## 🚀 Project Structure

Here's an overview of the project's directory structure:

```text
/
├── static/          # Static assets like images
├── src/
│   ├── lib/         # Shared components and utilities
│   ├── routes/      # SvelteKit routes and pages
│   ├── app.html     # HTML template
│   └── app.css      # Global styles
└── package.json
```

SvelteKit looks for `.svelte` files in the `src/routes/` directory. Each page is exposed as a route based on its file name.

The `src/lib/` directory is where we put shared components and utilities that can be imported using the `$lib` alias.

Any static assets, like images, can be placed in the `static/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:5173`  |
| `npm run build`   | Build your production site to `./build/`     |
| `npm run preview` | Preview your build locally, before deploying |
| `npm run check`   | Type-check your Svelte code                  |
| `npm run format`  | Format your code with Prettier               |
| `npm run lint`    | Lint your code with ESLint                   |

## Contributing

If you come across an app that's missing from our list, you can actively contribute by forking this repository and adding it to the appropriate data file. Each app entry should include four mandatory fields. Note that the app **must** be published on [Flathub](https://flathub.org) for it to be considered.

We appreciate your contributions and look forward to growing our collection of LibAdwaita-powered apps!
