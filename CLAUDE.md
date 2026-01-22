# CLAUDE.md

Guidance for Claude Code (claude.ai/code) when working with this repository - a Vite + React + TypeScript dashboard starter template.

## Table of Contents
- [Essential Commands](#essential-commands)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Component Development Guidelines](#component-development-guidelines)
- [MVP Development Philosophy](#mvp-development-philosophy)
- [Authentication](#authentication)
- [Common Tasks](#common-tasks)
- [Implementation Planning](#implementation-planning)
- [Configuration](#configuration)
- [Notes & Integration](#notes--integration)

## Essential Commands

```bash
# Development
npm run dev          # Start dev server on port 8080
npm install          # Install dependencies

# Build & Preview
npm run build        # Production build
npm run build:dev    # Development build
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## Tech Stack
- Vite (React SWC), React 18, TypeScript, React Router v6
- Tailwind CSS + shadcn/ui components  
- React Query + react-hook-form + zod
- Supabase Auth, Recharts, TanStack Table, Lucide React, Sonner

## Project Structure

```
src/
├── App.tsx                          # Root with providers & routing
├── pages/                           # Route components (default exports)
│   ├── Index.tsx, Dashboard.tsx, Admin.tsx, Account.tsx
│   ├── Projects.tsx, Team.tsx, Settings.tsx
│   └── Signup.tsx → SignupForm, Login.tsx → LoginForm
├── components/
│   ├── navigation/
│   │   ├── app-sidebar.tsx          # Main nav (imports nav-* components)
│   │   └── nav-main.tsx, nav-documents.tsx, nav-secondary.tsx, nav-user.tsx
│   ├── forms/ → SignupForm.tsx, LoginForm.tsx
│   ├── data/ → chart-area-interactive.tsx, data-table.tsx, section-cards.tsx
│   ├── dialogs/ → settings-dialog.tsx
│   └── settings/ → profile-form.tsx, security-form.tsx, settings-sub-step.tsx
├── lib/utils.ts                     # cn() utility
└── app/dashboard/data.json          # Sample data
```

### Navigation Routes
- Main: /dashboard, /lifecycle, /analytics, /projects, /team
- Documents: Data Library, Reports, Word Assistant
- Secondary: Settings, Get Help, Search
- Cloud sections: Capture, Proposal, Prompts (each with Active/Archived)

## Component Development Guidelines

### Core Principle: Always Use shadcn/ui Components First

**Available shadcn/ui Components (50+ in `/src/components/ui/`)**
- **Layout**: card, separator, sheet, sidebar, resizable
- **Navigation**: breadcrumb, dropdown-menu, menubar, navigation-menu, tabs, context-menu
- **Forms**: form, input, textarea, select, checkbox, radio-group, switch, slider, calendar, input-otp
- **Actions**: button, toggle, toggle-group
- **Feedback**: alert, alert-dialog, toast, sonner, progress, badge, skeleton
- **Data**: table, accordion, collapsible, hover-card, tooltip, popover
- **Overlays**: dialog, drawer, command, sheet
- **Media**: avatar, aspect-ratio, carousel
- **Utility**: scroll-area, label

### Component Selection Decision Tree
```
1. What UI element do I need?
   ↓
2. Check shadcn/ui components list
   ↓
3. Found match? → USE ui-builder agent to implement
   ↓
4. No match? → Compose multiple shadcn components
   ↓
5. Still no? → Extend with Tailwind classes
   ↓
6. Still no? → Document why & get team approval
```

### When to Create Custom Components

**Always Create Components For:**
- **Forms** - Contact forms, login forms, settings forms, etc.
- **Modals/Dialogs** - Any overlay content
- **Cards** - Product cards, user cards, feature cards, etc.
- **Content Sections** - Hero sections, dashboard sections, feature sections, testimonials, etc.
- **Complex Data Displays** - Tables, charts, data grids

These high-level UI modules provide clear boundaries and improve code organization even when used once.

**Keep Inline Until Truly Needed:**
- Small UI fragments (button groups, labels with icons)
- Simple formatting or display logic
- Basic conditional rendering
- One-off styling variations

**Extract Components When:**
- Used in 3+ places (not just 2!)
- Complex logic that needs isolation (50+ lines)
- Would significantly improve parent readability
- Needs unit testing in isolation

### Implementation Examples

```tsx
// ✅ GOOD - High-level UI module (always component)
export function UserProfileCard({ user }) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-4">
        <Avatar src={user.avatar} />
        <div>
          <h3>{user.name}</h3>
          <p className="text-muted">{user.email}</p>
        </div>
      </div>
    </Card>
  );
}

// ❌ WRONG - Creating custom UI when shadcn/ui exists
export function CustomButton({ children }) {
  return <button className="px-4 py-2 bg-blue-500">{children}</button>
}

// ✅ RIGHT - Using shadcn/ui components
import { Button } from "@/components/ui/button"
export function MyComponent() {
  return <Button variant="default">Click me</Button>
}

// ✅ GOOD - Composition pattern
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function FeatureCard({ title, children, onAction }) {
  return (
    <Card>
      <CardHeader><CardTitle>{title}</CardTitle></CardHeader>
      <CardContent>
        {children}
        <Button onClick={onAction}>Learn More</Button>
      </CardContent>
    </Card>
  )
}
```

### Quick Reference: UI Need → shadcn Component
- Action → Button | Text input → Input | Dropdown → Select/DropdownMenu
- Modal → Dialog (center) or Sheet (side) | Loading → Skeleton
- Data grid → Table | Tabs → Tabs | Expandable → Accordion/Collapsible
- Date picker → Calendar | Toggle → Switch/Checkbox | Progress → Progress
- Notification → toast() or Alert

## MVP Development Philosophy

### Core Principle: KISS (Keep It Simple, Stupid)
This is an MVP project. Simplicity and readability trump everything else. A new developer should understand the codebase structure and component relationships within minutes, not hours.

### DRY & Separation of Concerns (But KISS First)
Follow DRY (Don't Repeat Yourself) and separation of concerns to avoid unnecessary duplication and keep logic organized—but only if it doesn't make things more complex. If applying these principles would obscure the code or add indirection, favor KISS and clarity instead. Always optimize for simplicity and immediate understanding over theoretical purity.

### Key Patterns
- **Routing**: Add routes in App.tsx before `*` route; pages use default exports
- **Imports**: Use `@/` alias for src directory
- **State**: Keep state as close to where it's used as possible
- **Types**: Inline types unless shared across multiple files
- **Folder Structure**: Flat is better than nested, colocation over separation

### Code Philosophy

**Readability is King**
Your code should tell a story. A new developer should understand what a component does by reading it top to bottom, without jumping between files.

**Appropriate Abstraction**
```tsx
// ❌ TOO ABSTRACT for MVP scale
const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

// ✅ JUST RIGHT - Clear and direct
const [isOpen, setIsOpen] = useState(false);
const toggleMenu = () => setIsOpen(!isOpen);
```

### Anti-Patterns to Avoid
1. **Premature Optimization**: Don't create abstractions for future requirements
2. **Excessive Props Drilling**: But also don't add Context for 2-level prop passing
3. **Micro-Components**: A 5-line component used once doesn't need its own file
4. **Over-Engineering**: No need for factories, builders, or complex patterns in MVP

### Warning Signs of Over-Componentization
- Extracting tiny UI fragments (< 20 lines)
- Components with only 1-2 props that just wrap styles
- "Just in case" abstractions
- Breaking up high-level components too granularly
- You need a map to understand component relationships

## Authentication

Supabase Auth with React Context for state management.

### Components
- **AuthContext** (`/src/contexts/AuthContext.tsx`): Provides user, session, loading state + signUp/signIn/signOut methods
- **ProtectedRoute** (`/src/components/auth/protected-route.tsx`): Wraps protected routes, redirects to /login if unauthenticated
- **Auth Forms**: LoginForm & SignupForm in `/src/components/auth/`

### Route Protection
```tsx
// Public routes
<Route path="/login" element={<Login />} />

// Protected routes
<Route path="/account" element={
  <ProtectedRoute><Account /></ProtectedRoute>
} />

// Nested protected routes (admin)
<Route path="/admin" element={
  <ProtectedRoute><Admin /></ProtectedRoute>
}>
  <Route path="dashboard" element={<Dashboard />} />
</Route>
```

### Usage
```tsx
const { user, signOut } = useAuth();
```

### Config
Set `requireEmailConfirmation` in `/src/config/app.config.ts` (must match Supabase project settings).

## Common Tasks

### Adding Pages
1. Create component in `/src/pages/` with default export
2. Add route in App.tsx before the `*` route
3. Update navigation in `/src/components/app-sidebar.tsx` if needed

### Creating Forms
Use react-hook-form + zod (see SignupForm/LoginForm examples in `/src/components/auth/`)

### Updating Navigation
Edit hardcoded nav data in `/src/components/app-sidebar.tsx`

## Implementation Planning

When implementing new features, provide:

1. **Existing Components**: List shadcn/ui and shared components to reuse
2. **File Changes**: Created/Modified/Deleted files with paths
3. **Component Structure**: Visual tree showing new vs existing components

Example:
```
Feature.tsx (page)
├── Card (shadcn/ui)
│   └── FeatureList (new)
│       └── FeatureItem (new) → Button, Badge (shadcn/ui)
└── Dialog (shadcn/ui) → FeatureForm (new)
```

## Configuration

- **Styling**: Tailwind CSS, HSL theme colors in index.css, cn() for conditional classes
- **TypeScript**: Relaxed checking, `@/` alias → `./src/`
- **Auth**: Supabase (AuthContext, ProtectedRoute, requireEmailConfirmation in app.config.ts)
- **Environment**: Supabase URL/key via import.meta.env

## Notes & Integration

- **Lovable Integration**: Syncs with lovable.dev - Git changes reflect there
- **shadcn/ui**: 50+ components in `/components/ui/` - treat as library code
- **React Query**: Configured but only used for Supabase auth
- **Development Note**: The lovable.dev integration may affect local dev server behavior. If you encounter issues, check the lovable.dev sync status first.

## Development Warnings

- Don't try to run the dev server (i.e. with npm run dev) after making updates.
# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.

## Project Characteristics
- This app is a template app that will be used as a starting point for client projects and so is designed to have a bunch of common functionality included out of the box like user auth, dashboard page shell, and user settings.
- It shouldn't have a lot of bloat and should be cleanly organized so that building atop of it is easy.