# HomePack · هوم باك

Cinematic React website for HomePack — Saudi industrial cardboard & packaging manufacturer, established 1984.

## Tech Stack

- **React 18** with functional components + hooks
- **React Router v6** — client-side SPA routing
- **Framer Motion** — all animations (parallax, spring, AnimatePresence, scroll)
- **Vite 5** — build tool
- **TypeScript** — strict mode

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

Then open **http://localhost:5173**

## Pages

| URL | Description |
|---|---|
| `/` | Home — full cinematic single-page with 10 sections |
| `/about` | Company history, mission, timeline |
| `/products` | Product catalogue (6 items) |
| `/sustainability` | Environmental stats & certifications |
| `/contact` | Contact form + info |

## Design System

| Token | Value |
|---|---|
| `--cream` | `#F4EFE4` — warm background |
| `--navy` | `#2F3E50` — text / dark elements |
| `--bronze` | `#8B6F47` — primary accent |
| `--bronze-2` | `#A88457` — gradient secondary |

**Fonts:** Tajawal (Arabic display), Cairo (headings), Space Grotesk (mono labels)

## Animations

- **Custom cursor** — dot + magnetic ring tracking mouse
- **Loader splash** — scale-in on first load
- **Parallax hero** — scroll-linked y transforms
- **3D cardboard box** — CSS `preserve-3d` + float animation
- **Scroll reveals** — `whileInView` with cubic ease
- **Tilt cards** — spring physics on mouse move
- **Magnetic buttons** — spring-offset on hover
- **Counter roll-up** — rAF-based animation on scroll enter
- **Testimonial slider** — AnimatePresence auto-rotate every 5s
- **FAQ accordion** — height AnimatePresence
- **Process line** — scaleX animate on scroll

## Build for Production

```bash
npm run build
npm run preview
```
