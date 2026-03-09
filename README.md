# Rainier Capital LLC

Next.js 15 app with TypeScript, Tailwind CSS, ESLint, App Router, and shadcn/ui.

## Requirements

- **Node.js 18.18+** (recommend 20 LTS). If you use [nvm](https://github.com/nvm-sh/nvm), run `nvm use` in the project root.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview.

## Scripts

- `npm run dev` — Start dev server with Turbopack
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS** (with CSS variables for theming)
- **ESLint** (Next.js config)
- **shadcn/ui** — Button, Card, and `cn()` in `@/lib/utils`. Add more with:

  ```bash
  npx shadcn@latest add <component>
  ```

## Project structure

- `src/app/` — App Router pages and layout
- `src/components/ui/` — shadcn/ui components
- `src/lib/utils.ts` — `cn()` for class names
