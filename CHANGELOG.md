# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.1] - 2026-03-06

### Added
- **Components:**
  - `Accordion`: Collapsible content sections.
  - `Alert`: Contextual feedback messages.
  - `Authenticator`: User authentication forms.
  - `Avatar`: User profile images or initials.
  - `Badge`: Status indicators and notifications.
  - `BottomSheet`: slide-up panels for mobile-centric views.
  - `Breadcrumb`: Navigation hierarchy trails.
  - `Button`: Interactive call-to-action elements.
  - `Carousel`: Image and content sliders.
  - `Checkbox`: Multi-selection controls.
  - `Chip`: Compact elements for inputs, attributes, or actions.
  - `CircularProgress`: Indeterminate loading indicators.
  - `Dialog`: Modal windows for critical information.
  - `Drawer`: Side navigation panels.
  - `Dropdown`: Selectable lists of options.
  - `Header`: Page headers and navigation bars.
  - `IconButton`: Icon-only buttons.
  - `Input`: Text input fields.
  - `LinearProgress`: Progress bars.
  - `List`: Vertical lists of items.
  - `Loader`: General loading states.
  - `Menu`: Popover menus.
  - `Page`: Layout structure for pages.
  - `Pagination`: Navigation for paginated content.
  - `Placeholder`: Loading skeletons.
  - `Radio`: Single-selection controls.
  - `SegmentedControl`: Toggle between views.
  - `Select`: Dropdown selection inputs.
  - `Snackbar`: Brief, temporary notifications.
  - `Switch`: Toggle switches.
  - `TabList`: Tabbed navigation interfaces.
  - `Table`: Data tables.
  - `Tag`: Categorization labels.
  - `Textarea`: Multi-line text inputs.
  - `Tooltip`: Contextual information popovers.
- **Documentation:**
  - `SECURITY.md` outlining supported versions and vulnerability reporting policy.
  - Comprehensive `CHANGELOG.md`.
- **Infrastructure:**
  - GitHub Actions CI/CD workflow (`.github/workflows/ci.yml`) for automated linting, building, and testing.
  - `rollup-plugin-visualizer` for bundle size analysis (generates `stats.html`).
  - `.gitignore` updates for environment files, build artifacts, and logs.

### Changed
- **Project Identity:**
  - Renamed project to **PAUL (Pattern & Asset UI Library)** across all documentation.
  - Updated project status to **Pre-Alpha**.
- **Performance:**
  - Optimized `vite.config.ts` with manual chunk splitting for `react-vendor` and `storybook-vendor`.
- **Code Quality:**
  - Replaced unstable `Math.random()` ID generation with `React.useId()` in form components (`Input`, `Checkbox`, `Radio`, `Select`, `Switch`, `Textarea`) to fix hydration mismatches and improve accessibility.
  - Fixed various TypeScript and ESLint errors across stories and components.
  - Enabled `autoPlay` functionality in the `Carousel` component.

### Security
- Established security policy and reporting guidelines.
- Verified dependencies with `pnpm audit` (Clean).
