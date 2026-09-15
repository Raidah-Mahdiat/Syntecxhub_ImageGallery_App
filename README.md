# Field Notes — Image Gallery

<img width="1900" height="907" alt="image" src="https://github.com/user-attachments/assets/5a336dc2-ddbe-44e5-8ec1-ac0e0e1eca38" />

A responsive image gallery with hover zoom and sliding captions, built with plain HTML, CSS, and JavaScript. No frameworks or build step required.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure and markup |
| `style.css` | Layout, grid, hover effects, responsive breakpoints |
| `script.js` | Photo data and gallery rendering |

Keep all three files in the same folder — `index.html` links to the other two using relative paths (`style.css`, `script.js`).

## Running it

No installation needed. Open `index.html` directly in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Features

- **Responsive grid** — `repeat(auto-fill, minmax(260px, 1fr))` reflows automatically; drops to 2 columns under 640px and 1 column under 400px.
- **Hover effects** — images zoom slightly and gain saturation on hover; a caption with the place name and location slides up from the bottom.
- **Keyboard accessible** — captions also appear on keyboard focus (`:focus-within`), not just mouse hover.
- **Lazy loading** — images use `loading="lazy"` so off-screen photos load only as needed.
- **Reduced motion support** — hover transitions are disabled for users with `prefers-reduced-motion` set.

## Customizing the photos

Edit the `photos` array at the top of `script.js`. Each entry needs:

```js
{ seed: "unique-id", src: "image-url-or-path", place: "Display name", meta: "Subtitle text" }
```

To use your own images instead of the placeholder photos, replace each `src` with a local path (e.g. `images/photo1.jpg`) or your own hosted URL.

## Customizing the design

- **Colors** — defined as CSS custom properties at the top of `style.css` (`--paper`, `--ink`, `--ink-soft`, `--hairline`, `--moss`).
- **Fonts** — Fraunces (serif, for the title and captions) and Inter (sans-serif, for body text), loaded from Google Fonts in `index.html`.
- **Image shape** — controlled by `aspect-ratio: 4 / 5` on the `figure` selector in `style.css`.
- **Grid spacing** — controlled by the `gap` and `minmax()` values on `.gallery` in `style.css`.
