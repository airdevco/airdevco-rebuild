# Portal Page Specification (/portal)

## Overview

This specification outlines the implementation of a new portal page (accessible at `/portal`) that follows the architectural pattern of the existing Admin.tsx page. The portal will provide a tabbed interface for managing Projects and Customers, with empty content areas that can be filled in later.

## Component Structure

### Main Portal Component
- **Location**: `/src/pages/Portal.tsx`
- **Route**: `/portal`
- **Pattern**: Similar to Admin.tsx with SidebarLayout wrapper
- **Tabs**: Projects and Customers using shadcn/ui Tabs components

## Technical Implementation

### 1. Page Component Structure

```tsx
// src/pages/Portal.tsx
import { SidebarLayout } from "@/components/layouts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Portal() {
  return (
    <SidebarLayout title="Portal">
      <Tabs defaultValue="projects" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
        </TabsList>
        
        <TabsContent value="projects" className="mt-6">
          <div className="rounded-lg border border-dashed p-8">
            <p className="text-center text-muted-foreground">
              Projects content will be added here
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="customers" className="mt-6">
          <div className="rounded-lg border border-dashed p-8">
            <p className="text-center text-muted-foreground">
              Customers content will be added here
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </SidebarLayout>
  );
}
```

### 2. Routing Configuration

Add to `App.tsx` routes (before the catch-all route):

```tsx
import Portal from "@/pages/Portal";

// In the routes configuration:
<Route path="/portal" element={
  <ProtectedRoute>
    <Portal />
  </ProtectedRoute>
} />
```

### 3. Navigation Update

Update `/src/components/navigation/nav-main.tsx` or relevant navigation component to include the new dashboard link:

```tsx
{
  title: "Portal",
  url: "/portal",
  icon: LayoutDashboard, // or appropriate icon
}
```

## Component Hierarchy

```
Portal (page - /portal route)
├── SidebarLayout (existing wrapper)
│   ├── AppSidebar (existing navigation)
│   └── Main Content Area
│       └── Tabs (shadcn/ui)
│           ├── TabsList
│           │   ├── TabsTrigger "Projects"
│           │   └── TabsTrigger "Customers"
│           ├── TabsContent "projects"
│           │   └── Placeholder content
│           └── TabsContent "customers"
│               └── Placeholder content
```

## Design Decisions

### Why This Approach?

1. **Consistency**: Follows the established Admin.tsx pattern
2. **Simplicity**: Uses existing shadcn/ui components without custom implementations
3. **Extensibility**: Empty content areas make it easy to add features incrementally
4. **User Experience**: Tabbed interface provides clear navigation between related sections

### Component Choices

- **SidebarLayout**: Maintains consistent app-wide navigation and layout
- **shadcn/ui Tabs**: Provides accessible, styled tab navigation out of the box
- **Dashed border placeholders**: Clear visual indication of future content areas

## Future Enhancements

### Projects Tab Content (Phase 2)
- Project list/grid view
- Project creation button
- Search and filter functionality
- Project status indicators

### Customers Tab Content (Phase 2)
- Customer list/table
- Customer profile cards
- Add new customer button
- Customer search functionality

## Implementation Checklist

- [ ] Create `/src/pages/Portal.tsx` component
- [ ] Import required shadcn/ui components (Tabs, TabsList, TabsTrigger, TabsContent)
- [ ] Import SidebarLayout from layouts
- [ ] Add route to App.tsx
- [ ] Update navigation menu to include Portal link at `/portal`
- [ ] Test tab switching functionality
- [ ] Verify responsive behavior on mobile/tablet
- [ ] Ensure proper authentication wrapping with ProtectedRoute

## Notes

- The component is named "Portal" and is accessible at the `/portal` route
- Tab grid is set to 2 columns with max-width for better appearance
- Content placeholders use muted text color to indicate temporary state
- The implementation follows KISS principle per CLAUDE.md guidelines
- No unnecessary abstractions or premature optimizations included