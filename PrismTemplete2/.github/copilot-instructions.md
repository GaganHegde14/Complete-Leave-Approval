# Copilot Instructions for Leave Summary (React + Vite)

## Project Overview
- **Type:** React SPA using Vite, JSX, and CSS Modules.
- **Purpose:** Employee leave summary/reporting UI with profile, leave, and policy views.
- **Entry Points:**
  - `index.html` (root div)
  - `src/main.jsx` (React root)
  - `src/App.jsx` (routing)

## Architecture & Patterns
- **Routing:** Uses `react-router-dom` (see `App.jsx`).
- **Component Structure:**
  - All UI logic is in `src/components/`.
  - Each major UI section (Navbar, Profile, Leave Report, Policies) is a separate component.
  - CSS is split between global (`src/index.css`) and per-component/module CSS.
- **Styling:**
  - Prefer CSS Modules for new component styles (see `ApplyHeading.module.css`, `ViewPolicies.module.css`).
  - Shared styles in `src/styles/` (e.g., `formControls.css`, `RequiredInfo.css`).
- **Assets:**
  - SVGs and images in `src/assets/` and `public/`.
  - Use `import` for assets in React components.

## Developer Workflows
- **Start Dev Server:** `npm run dev` (see `README.md`)
- **Build for Production:** `npm run build`
- **Run Tests:** `npm test` (Jest, see `App.test.jsx`)
- **Preview Build:** `npm run preview`
- **Install Deps:** `npm install`

## Conventions & Practices
- **Component Props:** Use explicit props for all data and event handlers.
- **Event Handlers:** Pass as props, use `onXxx` naming (see `Avatars.jsx`).
- **No Redux/Context:** State is local or passed via props; no global state management.
- **Icons:** Use MUI icons or SVG imports.
- **Accessibility:** Use semantic HTML, ARIA roles where needed (see `ViewPolicies.jsx`).
- **Testing:** Use React Testing Library + Jest (see `App.test.jsx`).

## Integration Points
- **No backend/API integration** in this template; all data is static or passed as props.
- **External Libraries:**
  - `@mui/material` and `@mui/icons-material` for UI elements.
  - `react-router-dom` for routing.
  - No direct use of Vite plugins beyond React.

## Examples
- **Add a new page:**
  1. Create a component in `src/components/`.
  2. Add a `<Route>` in `App.jsx`.
- **Add a new style:**
  - For global: `src/index.css` or `src/styles/`.
  - For component: create `ComponentName.module.css` and import as `styles`.
- **Importing assets:**
  - `import icon from '../assets/icon.svg'`

## Key Files
- `src/App.jsx`, `src/main.jsx`, `src/components/`, `src/styles/`, `public/`
- See `README.md` for setup and workflow details.

---

*Update this file if you introduce new architectural patterns, workflows, or integration points.*
