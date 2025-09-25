# Tailwind Migration

This project scaffolds a Tailwind CSS environment to migrate an existing Bootstrap site to Tailwind utilities.

Getting started:
- Install dependencies: npm install
- Start dev server: npm run dev
- Build for production: npm run build

Migration approach (following kavia-docs/converting-bootstrap-to-tailwind.md):
- Replace Bootstrap classes with Tailwind utilities using semantic mappings.
- Navbar: `.navbar .navbar-expand-*` -> flex, spacing, responsive show/hide with `lg:` modifiers.
- Container: `.container` -> `mx-auto px-4 sm:px-6 lg:px-8`.
- Grid: `.row` + `.col-*` -> `grid grid-cols-*` with responsive `sm:`, `md:`, `lg:`.
- Cards: `.card .card-body` -> `bg-white rounded-lg shadow border p-*`.
- Buttons: `.btn .btn-primary` -> Tailwind utility composition (see src/styles/tailwind.css).
- Collapse/toggle: replace Bootstrap JS with small vanilla JS toggles.

Note:
- There is no Bootstrap CSS/JS dependency; all styles are from Tailwind.
- Tailwind's stylesheet is imported in src/main.js via `import "./styles/tailwind.css"`.
- Use src/styles/tailwind.css to add component-level class compositions for repeated patterns.
- All residual Bootstrap classes were removed; grids and cards now use Tailwind utilities directly.