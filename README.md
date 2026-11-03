# ARTEMIS DOMAIN

ARTEMIS DOMAIN is a creative technology portfolio and digital studio website built for **Adebayo Danone**. It presents a visual identity centered on technology, design, gaming, interactive experiences, and visual culture.

The project is designed as a polished, responsive single-page experience rather than a traditional content-heavy portfolio. It uses bold editorial typography, atmospheric gradients, futuristic visual systems, motion, and carefully structured sections to communicate the studio’s creative direction.

## What the project is about

ARTEMIS DOMAIN is a digital home for creative work across several connected disciplines:

- **Web experiences** — modern websites, interfaces, landing pages, and interactive digital products.
- **Digital design** — UI/UX, branding, visual systems, and creative direction.
- **Gaming** — football concepts, gameplay interfaces, interactive worlds, and gaming experiences.
- **Visual content** — video edits, motion graphics, social media visuals, and digital storytelling.

The site introduces the studio, explains its capabilities, showcases selected work, communicates its creative principles, and provides direct social and WhatsApp contact options for collaboration.

## Highlights

- Responsive single-page portfolio layout
- Editorial hero section with animated creative technology artwork
- About, services, selected work, principles, social hub, and contact sections
- Light, dark, and **Auto** theme modes
- Auto mode follows the user’s operating-system color preference and updates when that preference changes
- Theme selection persists in `localStorage`
- WhatsApp QR contact and direct WhatsApp number
- External links for YouTube, TikTok, GitHub, and WhatsApp
- Mobile navigation with accessible controls
- Scroll reveal interactions and hover micro-interactions
- Responsive layouts for desktop, tablet, and mobile screens
- Custom CSS visual system with gradients, glow effects, grain, and editorial typography

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Lucide React icons
- Wouter
- Framer Motion utilities and CSS-based motion
- pnpm
- Express static production wrapper

This is primarily a static frontend project. It does not require a database, authentication service, or application backend for its current feature set.

## Project structure

```text
artemis-domain/
├── client/
│   ├── public/              # Small public configuration assets
│   ├── src/
│   │   ├── components/      # Shared UI and utility components
│   │   ├── contexts/        # Theme and application contexts
│   │   ├── hooks/           # Reusable React hooks
│   │   ├── lib/             # Shared helpers
│   │   ├── pages/           # Page-level components
│   │   ├── App.tsx          # Application shell and routes
│   │   ├── index.css        # Global visual system and responsive styles
│   │   └── main.tsx         # React entry point
│   └── index.html           # HTML document shell
├── server/                  # Static production serving wrapper
├── shared/                  # Shared project constants
├── package.json
├── pnpm-lock.yaml
└── README.md
```

## Getting started

### Requirements

- Node.js 18 or newer
- pnpm 10 or compatible pnpm version

### Install dependencies

```bash
pnpm install
```

### Start the development server

```bash
pnpm run dev
```

Vite will start the local development server and expose the site on the configured local port.

### Run type checking

```bash
pnpm run check
```

### Create a production build

```bash
pnpm run build
```

### Preview the production frontend

```bash
pnpm run preview
```

### Format the project

```bash
pnpm run format
```

## Theme behavior

The theme selector supports three modes:

- **Light** — always use the light ARTEMIS theme.
- **Dark** — always use the dark ARTEMIS theme.
- **Auto** — follow the visitor’s operating-system preference.

The selected mode is stored under the `artemis-theme` key in `localStorage`. Auto mode uses the browser `matchMedia` API and listens for system preference changes while the page is open.

## Contact links

The site currently includes these contact destinations:

- WhatsApp QR contact: `https://wa.me/qr/3R76ORN6ZPAPI1`
- WhatsApp direct contact: `https://wa.me/2347079473861`
- Email: `hello@artemisdomain.dev`
- GitHub: `https://github.com/adebayodanone137-cell`

## Deployment

The project can be deployed to any platform that supports a Vite-built static frontend or a Node-based static server. A typical deployment flow is:

1. Install dependencies with `pnpm install`.
2. Run `pnpm run check`.
3. Run `pnpm run build`.
4. Serve the generated production output using the project’s start command or the hosting provider’s static-site workflow.

## Contributing

For changes to the portfolio, keep the following principles in mind:

- Preserve the ARTEMIS visual language and typography hierarchy.
- Test responsive behavior on mobile and desktop widths.
- Keep interactive controls keyboard-accessible.
- Respect `prefers-reduced-motion` for non-essential animation.
- Run `pnpm run check` and `pnpm run build` before opening a pull request.

## License

This project is released under the MIT License. See the `package.json` for the project license declaration.

---

Built for ARTEMIS DOMAIN — creative technology without limits.
