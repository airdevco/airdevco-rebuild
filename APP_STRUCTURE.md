# APP_STRUCTURE.md

## Application Structure

```
src/
├── App.tsx                          # Root with providers & routing
│   ├── QueryClient                  # React Query provider
│   ├── TooltipProvider              # Global tooltip provider
│   ├── Toaster                      # Toast notifications
│   └── Routes                       # React Router DOM v6
│       ├── /                        # Index page
│       ├── /signup                  # Signup page
│       ├── /login                   # Login page
│       ├── /dashboard               # Dashboard page
│       └── *                        # NotFound page
│
├── pages/                           # Route components
│   ├── Index.tsx                    # Landing page
│   │   └── (no business components)
│   │
│   ├── Dashboard.tsx                # Main dashboard with settings
│   │   └── AppSidebar               # Main application sidebar
│   │
│   │
│   ├── Signup.tsx                   # User registration
│   │   └── SignupForm               # Registration form component
│   │
│   ├── Login.tsx                    # User login
│   │   └── LoginForm                # Login form component
│   │
│   └── NotFound.tsx                 # 404 error page
│       └── (no business components)
│
├── components/                      # Business components
│   ├── Navigation Components
│   │   ├── app-sidebar.tsx          # Main sidebar with navigation data
│   │   │   ├── NavMain              # Primary navigation items
│   │   │   ├── NavDocuments         # Document-related navigation
│   │   │   ├── NavSecondary         # Secondary navigation (settings, help, search)
│   │   │   └── NavUser              # User profile section
│   │   │
│   │   ├── nav-main.tsx             # Main navigation menu
│   │   ├── nav-documents.tsx        # Documents navigation section
│   │   ├── nav-secondary.tsx        # Secondary navigation items
│   │   └── nav-user.tsx             # User profile navigation
│   │
│   ├── Layout Components
│   │   └── site-header.tsx          # Site header component
│   │
│   ├── Form Components
│   │   ├── SignupForm.tsx           # Signup form with social auth
│   │   └── LoginForm.tsx            # Login form with social auth
│   │
│   ├── Data Display Components
│   │   ├── chart-area-interactive.tsx      # Interactive area chart
│   │   ├── data-table.tsx                  # Data table component
│   │   └── section-cards.tsx               # Section cards display
│   │
│   └── Dialog Components
│       └── settings-dialog.tsx      # Settings dialog modal
│
├── lib/                             # Utilities
│   └── utils.ts                     # cn() function for className merging
│
└── app/                             # Application data
    └── dashboard/
        └── data.json                # Sample dashboard data (68 document items)
```

## Component Dependency Map

### Pages → Components

**Dashboard.tsx**
- Uses: AppSidebar directly

**Signup.tsx**
- Uses: SignupForm

**Login.tsx**
- Uses: LoginForm

**Index.tsx**
- No business components (only shadcn/ui Button)

**NotFound.tsx**
- No components

### Component → Component Dependencies

**AppSidebar**
- Imports: NavMain, NavDocuments, NavSecondary, NavUser
- Contains hardcoded navigation data

## Navigation Structure

### Main Navigation (navMain)
- Dashboard → /dashboard
- Lifecycle → /lifecycle
- Analytics → /analytics
- Projects → /projects
- Team → /team

### Document Navigation (documents)
- Data Library
- Reports
- Word Assistant

### Secondary Navigation (navSecondary)
- Settings (triggers settings panel)
- Get Help
- Search

### Cloud Navigation (navClouds)
- Capture (with subitems: Active Proposals, Archived)
- Proposal (with subitems: Active Proposals, Archived)
- Prompts (with subitems: Active Proposals, Archived)