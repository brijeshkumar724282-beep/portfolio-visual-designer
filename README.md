# LOUDPAPER — Visual Designer Portfolio Template

Bold, gallery led portfolio template for UI UX and brand designers. Warm
paper background, ink black type, one solid orange accent, oversized
display type, marquee strips and a case study overlay for every project.

## Features

1. Hero with oversized type, marquee strip and featured visual collage
2. Work gallery with category filter plus full case study overlay
3. About with capabilities grid, animated counters and client logo row
4. Process section with four scroll animated steps
5. Contact CTA with availability indicator plus footer with socials

## Run it

One command:

```sh
npm install && npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

Build for production with `npm run build`. Preview the build with
`npm run preview`.

## Customize

All editable content lives in one file: `src/data/content.js`.

* Projects: edit the `PROJECTS` array (title, category, client, year,
  summary, outcomes, tags). Covers use picsum placeholders, swap the
  `cover` and `shots` URLs for your own images.
* Categories: edit `CATEGORIES`. Keep project `category` values in sync.
* Capabilities, stats, steps, socials and clients each have their own
  array in the same file.
* Colors and fonts: edit the `@theme` block in `src/index.css`.
  Palette uses solid colors only. Paper `#F4F1EA`, ink `#141310`,
  accent `#FF4D00`.
* Contact email: search for `hello@mayarao.design` in
  `src/components/Contact.jsx` and replace it.
* Persona: the template uses a fictional designer named Maya Rao.
  Replace the name, bio and portrait in `Nav.jsx`, `Hero.jsx`,
  `About.jsx` and `Contact.jsx`.

## Notes and assumptions

* Cover and process images are picsum.photos placeholders so the gallery
  looks alive on first run. Replace them with real project images before
  publishing.
* Fonts load from Google Fonts with system fallbacks, so the layout
  stays intact offline.
* No gradients, no emojis and minimal hyphens in UI copy by design.
