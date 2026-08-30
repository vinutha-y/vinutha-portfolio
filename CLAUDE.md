# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is a single-file static portfolio site for Vinutha (UX Designer). The entire site — HTML, CSS, and content — lives in one file: [index.html](index.html). There is no build step, package manager, bundler, or test suite; it's opened directly in a browser or served as a static file.

Project screenshots are embedded directly in the markup as base64 `data:image/jpeg;base64,...` URIs inside `<img src="...">` tags rather than referenced as external asset files. These data-URI lines are extremely long (tens of thousands of characters each) — when reading or grepping this file, avoid dumping full line contents for these lines; search/grep for surrounding markup or class names instead, and use offset/limit or line-targeted reads rather than reading the whole file at once.

## Development

No build/lint/test commands exist. To preview changes, open [index.html](index.html) directly in a browser (or serve the directory with any static file server).

## Structure

The page is organized into these top-level `<section>`s (see [index.html](index.html)):
- `.hero` — intro/hero section
- `#work` — project case studies/screenshots
- `#approach` — process/approach content
- `#tools` — tools/skills list
- `#contact` — contact section

Styling is a single embedded `<style>` block in `<head>` using CSS custom properties defined on `:root` (colors: `--bg`, `--ink`, `--accent`, etc.). Fonts are loaded via a Google Fonts `@import`: Space Grotesk, Inter, and IBM Plex Mono.

## Design constraints

The user has explicitly asked to avoid a generic "AI-generated website" look. When editing this site, do not introduce: harsh gradients, Lucide icons, pure white backgrounds, rainbow coloring, drop shadows on everything, three-feature-cards-in-a-row layouts, emojis, liquid glass effects, em dashes, bento grids, terminal-window motifs, colored stripe accents, fake testimonials, "It's not X, it's Y" copy framing, checkmark bullet lists, three-tier pricing layouts, purple-and-black color schemes, radial orbs, dot grid backgrounds, sparkle icons, animated arrows, or indiscriminate hover animations on everything. Prefer real content over placeholder mockups, and avoid defaulting to soft/rounded corners as a style choice.
