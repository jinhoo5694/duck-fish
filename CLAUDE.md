# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

## Architecture

This is a Next.js 16 project using the App Router with React 19, TypeScript, and Tailwind CSS 4.

### Key Technologies
- **Next.js 16** with App Router (all pages in `src/app/`)
- **React 19** with Server Components by default
- **Tailwind CSS 4** via PostCSS (configured in `postcss.config.mjs`)
- **TypeScript** in strict mode

### Path Aliases
- `@/*` maps to `./src/*`
