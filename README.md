# Kayjou — Portfolio

Cyber Y2K × Frutiger Metro portfolio, built on the "symbiote HUD" palette
(`#0A0908` void / `#49111C` crimson / `#F2F4F3` bone).

## Stack
- Vite + React 19
- Tailwind CSS v4 (via `@tailwindcss/vite`, config lives in `src/index.css` under `@theme`)
- Framer Motion — drag-to-open intro, scroll reveals, sticker hover physics
- `@react-three/fiber` + `@react-three/drei` — floating 3D models (PS4 game
  collection in the hero, PS2 memory card in the projects section)

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Where things live

```
src/
  data/content.js       ← edit projects, nav links, and the track list here
  components/
    IntroMailbox.jsx     the drag-up entry gesture (signature interaction)
    Nav.jsx               top nav, camera-portal GitHub link
    FloatingModel.jsx     r3f canvas wrapper around a GLB/GLTF, used twice
    StickerImage.jsx      "peel and stick" hover physics for the PNG assets
  sections/
    Hero.jsx, Projects.jsx, Sound.jsx, Contact.jsx
  assets/images/          all your uploaded stickers, renamed to plain names
public/models/
  ps4_games_collection.glb
  memory_card/            unzipped gltf + textures (Sketchfab export format)
```

## What's real vs. what's stubbed
- **Drag-to-open intro**: fully built — drag the flap up (or flick fast) past
  the threshold and it unlatches into the main site.
- **3D models**: both your uploaded `.glb`/`.gltf` files are loaded live and
  gently floating via `<Float>`.
- **Sticker collage**: every asset you sent is wired into a section per your
  spec (camera icon aside — you didn't upload one, so the nav GitHub link
  currently uses a plain camera SVG icon; drop a `camera.png` into
  `src/assets/images` and swap it in `Nav.jsx` if you want your own asset).
- **Playlist section**: track titles are real (from your spec), the artist
  is placeholder ("Chovi", guessed from one of your filenames) — fix that
  in `src/data/content.js`.
- **Contact email**: placeholder `hello@kayjou.dev` in `Contact.jsx` — swap
  for your real address.

## Notes / next steps
- A couple of the source PNGs are large (`metro_feel.png` is 1.8MB). Worth
  running them through an image compressor or converting to WebP before a
  real deploy — nothing blocks you today, just bandwidth.
- The JS bundle is ~1.3MB (three.js + drei pull their weight). If it
  matters for you, the two `FloatingModel` canvases could lazy-load with
  `React.lazy` so the 3D libs don't block first paint.
