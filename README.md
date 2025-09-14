# Are We Adwaita Yet?

Welcome to the "Are We Adwaita Yet?" website, where you can explore a curated collection of apps that utilize `libadwaita`. This site automatically fetches app data from Flathub's AppStream repository, ensuring you always see the latest information about Libadwaita-powered applications.

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

## 🔧 Technical Implementation

The website uses a sophisticated AppStream parsing system:

- **AppStream Integration**: Automatically fetches and parses Flathub's compressed AppStream XML
- **Smart Filtering**: Identifies Libadwaita apps from our curated configuration
- **Metadata Extraction**: Pulls app names, descriptions, and other metadata directly from Flathub
- **GNOME Circle Integration**: Shows which apps are part of the GNOME Circle program
- **Fallback Parsing**: Uses both fast-xml-parser and regex-based parsing for maximum reliability

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

## How It Works

This website automatically:
- Fetches app metadata from [Flathub's AppStream repository](https://dl.flathub.org/repo/appstream/x86_64/appstream.xml.gz)
- Filters for apps that use `libadwaita` (based on our curated list)
- Displays real-time app information including names, descriptions, and GNOME Circle status
- Updates automatically when new Libadwaita apps are published to Flathub

## Contributing

To add a new Libadwaita app to this collection:

1. **Ensure your app is on Flathub**: The app must be published on [Flathub](https://flathub.org) to appear in the AppStream data
2. **Add to our configuration**: Fork this repository and add your app's Flathub ID to the `APP_LANGUAGES` mapping in `src/lib/apps.ts`
3. **Specify the programming language**: Include the primary programming language used to develop the app
4. **Submit a pull request**: We'll review and merge your contribution

**Note**: Only apps that are already published on Flathub can be added to this collection, as we rely on Flathub's AppStream data for app metadata.

We appreciate your contributions and look forward to growing our collection of Adwaita-powered apps!
