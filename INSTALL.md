# Installation Guide

## ⚠️ IMPORTANT: Install Dependencies First

Your project needs dependencies installed before it can run. The errors you're seeing are because packages aren't installed yet.

## Quick Fix

Run this command in your terminal:

```bash
npm install
```

Or if you're using pnpm (based on your error paths):

```bash
pnpm install
```

Or if you're using yarn:

```bash
yarn install
```

## What Gets Installed

The following packages will be installed:

### Dependencies:
- `react` & `react-dom` - React framework
- `framer-motion` - Animations
- `lucide-react` - Icons
- `@radix-ui/react-dropdown-menu` - Dropdown component (optional, not currently used)
- `@radix-ui/react-slot` - Slot component for Button
- `class-variance-authority` - Component variants
- `clsx` - Class name utility
- `tailwind-merge` - Merge Tailwind classes

### Dev Dependencies:
- `tailwindcss` - CSS framework
- `tailwindcss-animate` - Animation utilities
- `autoprefixer` & `postcss` - CSS processing
- `typescript` - Type checking
- `vite` - Build tool

## After Installation

Once dependencies are installed, run:

```bash
npm run dev
```

The app should start without errors!

## Troubleshooting

**If npm install fails:**
- Make sure you have Node.js installed (v18+ recommended)
- Try clearing npm cache: `npm cache clean --force`
- Try deleting `node_modules` and `package-lock.json`, then run `npm install` again

**If you see permission errors:**
- On Mac/Linux, you might need `sudo npm install` (not recommended)
- Better: Fix npm permissions or use a node version manager (nvm)

**If tailwindcss-animate error persists:**
- The config has been fixed to not require it
- Try restarting your dev server after installing

## Current Status

✅ Tailwind config fixed (no tailwindcss-animate import)
✅ Button component simplified (works without Radix Slot)
✅ Utils simplified (works without clsx/tailwind-merge)
✅ Dropdown menu removed (not needed)

The code is ready - you just need to install the packages!

