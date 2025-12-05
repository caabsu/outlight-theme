# Gemini Context: outlight-theme

This file provides context for AI agents working on the `outlight-theme` project, a Shopify theme based on the Shopify Skeleton Theme.

## Project Overview

*   **Type:** Shopify Theme
*   **Core Technologies:** Liquid, JSON, CSS, JavaScript.
*   **Purpose:** A minimal, modular, and maintainable Shopify theme designed as a starting point for custom storefronts. It emphasizes best practices, performance (critical CSS), and component-based architecture (Sections/Blocks).

## Architecture & Directory Structure

The project follows the standard Shopify theme structure with a focus on modularity:

*   **`assets/`**: Static assets (images, icons). Contains `critical.css` for essential styles.
*   **`blocks/`**: Reusable, nestable, and customizable UI components (Liquid files).
*   **`config/`**: Global theme settings (`settings_schema.json`) and data (`settings_data.json`).
*   **`layout/`**: Top-level page wrappers (e.g., `theme.liquid`, `password.liquid`).
*   **`locales/`**: Translation files (e.g., `en.default.json`).
*   **`sections/`**: Modular full-width page components.
*   **`snippets/`**: Reusable code fragments (logic/HTML) not directly editable by merchants.
*   **`templates/`**: JSON templates defining page structure and section order.

## Development Workflow

### Commands

*   **Preview Theme:** `shopify theme dev`
*   **Linting:** `shopify theme check` (configured via `.theme-check.yml`)

### Conventions

*   **Component-Based CSS/JS:** usage of `{% stylesheet %}` and `{% javascript %}` tags within `sections`, `blocks`, and `snippets` is preferred over global assets, except for `critical.css`.
*   **Liquid Documentation:** usage of the `{% doc %}` tag is mandatory for snippets and blocks to document parameters and usage.
*   **Schema Design:**
    *   **Single Property:** Use CSS variables mapped to settings (e.g., `style="--gap: {{ block.settings.gap }}px"`).
    *   **Multiple Properties:** Use CSS classes mapped to settings (e.g., `class="{{ block.settings.layout }}"`).
*   **Translations:**
    *   **All** user-facing text must be localized using the `| t` filter.
    *   Keys should be hierarchical and descriptive (e.g., `sections.featured_collection.title`).
    *   Update `locales/en.default.json` for all new keys.
*   **Linting:** Adhere to `theme-check:recommended` rules as defined in `.theme-check.yml`.

## Key Files

*   **`layout/theme.liquid`**: The master template file. Contains `<head>`, `{{ content_for_header }}`, and `{{ content_for_layout }}`.
*   **`assets/critical.css`**: CSS loaded on every page for "above-the-fold" content.
*   **`config/settings_schema.json`**: Defines global configuration options available in the Theme Editor.
*   **`AGENTS.md`**: Contains detailed AI-specific instructions and examples for Liquid tags, filters, and schemas. **Refer to this file for code generation patterns.**

## AI Instructions

*   **Refrence `AGENTS.md`**: Before generating Liquid code, check `AGENTS.md` for specific syntax requirements, especially for `{% doc %}`, `{% schema %}`, and `{% stylesheet %}` tags.
*   **Validation:** Ensure all JSON schemas (sections, blocks, settings) are valid.
*   **Modularity:** Prefer creating new Blocks or Sections over modifying global templates when adding features.
