# cookd. — The Anti-Social Network

Marketing website for [cookd](https://github.com/codeclowns01/cookd), the app that reads your Claude usage, hands the logs to an editor who hates you, and prints what he finds.

**Live:** [cookd.lol](https://cookd.lol)

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4
- **Typography:** Anton, Fraunces, JetBrains Mono, Schibsted Grotesk (via `next/font`)
- **Hosting:** Vercel
- **Language:** TypeScript (strict)

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout, fonts, metadata, theme script
    page.tsx            # Home page (assembles all sections)
    globals.css         # Theme variables, animations, scroll-reveal
    privacy/page.tsx    # Privacy policy
  components/
    sections/           # Page sections (Hero, GetStarted, EditorIntro, etc.)
    screens/            # In-app screen mockups (HTML + CSS, rendered in phone frames)
    PhoneFrame.tsx      # Responsive phone frame wrapper with scale transform
    Marquee.tsx         # Scrolling ticker banner
    ThemeProvider.tsx    # Dark/light theme context
    ThemeToggle.tsx     # Theme switch button
    Reveal.tsx          # Scroll-triggered reveal animation
    Parallax.tsx        # Parallax floating elements
public/
    icons/              # Favicon + Android app icons (48-512px)
    manifest.json       # PWA manifest
    downloads/          # APK distribution
```

## Architecture Notes

**Theme system:** CSS custom properties on `:root` / `[data-theme="light"]`. A blocking inline `<script>` in `<head>` reads `localStorage` before first paint to prevent flash of wrong theme.

**App screen mockups:** Raw HTML strings rendered via `dangerouslySetInnerHTML` inside scaled phone frames. Screens are defined in `screenContent.ts` and styled by `hp.css`. The RoastDemo section auto-cycles through screens with cursor animation.

**Responsive approach:** All sections use `flex-wrap` with `basis-[Npx]` for natural breakpoints. No media query breakpoints for layout shifts — elements wrap when they run out of space.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server (Turbopack) |
| `pnpm build` | Production build |
| `pnpm start` | Serve production build |
| `pnpm lint` | Run ESLint |

## Deployment

Pushes to `main` auto-deploy via Vercel.

## License

Proprietary. Built by [CodeClowns Technologies LLP](https://github.com/codeclowns01).
