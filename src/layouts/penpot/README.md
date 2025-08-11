# PenPot Layout Refactor

This directory contains clean, modular Astro components that replace the bloated PenPot-generated code with maintainable, semantic layouts.

## Components Overview

### 🧭 ProjectNavigation.astro

Standalone sidebar navigation component with project links.

**Features:**

- Clean semantic HTML (`<nav>`, `<ul>`, `<li>`)
- Responsive design (collapses on mobile)
- Active state indication
- Hover effects
- Customizable site name and project list

**Props:**

```typescript
{
  siteName?: string;           // Default: "CASEY HUNT"
  projects?: Array<{
    name: string;
    href: string;
    active?: boolean;
  }>;
}
```

### 📄 ProjectTwoColumn.astro

Flexible two-column project layout with image and content areas.

**Features:**

- CSS Grid-based responsive layout
- Multiple content slots for flexibility
- Built-in image placeholder
- Typography hierarchy
- Mobile-first responsive design

**Props:**

```typescript
{
  title: string;               // Required project title
  medium?: string;             // e.g., "Procreate"
  year?: string;               // e.g., "2021"
  description?: string;        // Project description
  attribution?: string;        // Attribution text
  imageSlot?: boolean;         // Show image area (default: true)
}
```

**Slots:**

- `image` - Custom image content
- `left-content` - Override entire left column
- `right-content` - Override entire right column
- `description` - Left column description area
- Default slot - Main project content (right column)

### 🏗️ SiteLayout.astro

Main layout that combines navigation with content areas.

**Features:**

- Optional navigation toggle
- Responsive layout
- Integration with BaseHead component
- Google Fonts loading
- Flexible content area

**Props:**

```typescript
{
  title?: string;              // Page title
  description?: string;        // Meta description
  showNav?: boolean;           // Show navigation (default: true)
  siteName?: string;           // Pass to navigation
  projects?: Array<{...}>;     // Pass to navigation
}
```

## Usage Examples

### Full Site with Navigation

```astro
---
import SiteLayout from "../../layouts/penpot/SiteLayout.astro";
import ProjectTwoColumn from "../../layouts/penpot/ProjectTwoColumn.astro";
---

<SiteLayout title="My Project" showNav={true}>
  <ProjectTwoColumn title="Project Name" medium="Procreate" year="2021">
    <p>Project content goes here...</p>
  </ProjectTwoColumn>
</SiteLayout>
```

### Standalone Project Page

```astro
---
import ProjectTwoColumn from "../../layouts/penpot/ProjectTwoColumn.astro";
---

<ProjectTwoColumn title="Project Name" medium="Procreate" year="2021">
  <p>Project content without navigation...</p>
</ProjectTwoColumn>
```

### Custom Image Content

```astro
<ProjectTwoColumn title="My Project">
  <img slot="image" src="/my-image.jpg" alt="Project image" />
  <p>Project description...</p>
</ProjectTwoColumn>
```

### Custom Left Column Content

```astro
<ProjectTwoColumn title="My Project">
  <div slot="left-content">
    <h2>Custom Title</h2>
    <p>Custom description...</p>
  </div>
  <p>Right column content...</p>
</ProjectTwoColumn>
```

## Test Pages

- `/penpot/` - Full site with navigation and two-column layout
- `/penpot/project-standalone` - Standalone project page (no nav)
- `/penpot/navigation-test` - Navigation component in isolation

## Improvements Over PenPot Output

### Before (PenPot):

- ❌ 1000+ lines of CSS
- ❌ Cryptic auto-generated class names (`site-main-a0f489038000`)
- ❌ Excessive nested divs
- ❌ Hardcoded content
- ❌ No semantic HTML
- ❌ Poor maintainability

### After (Clean Astro):

- ✅ ~200 lines of CSS total
- ✅ Semantic class names (`.project-navigation`, `.main-content`)
- ✅ Clean HTML structure
- ✅ Dynamic content via props
- ✅ Proper semantic elements (`<nav>`, `<main>`, `<article>`)
- ✅ Highly maintainable and extensible

## Typography

Uses Google Fonts with fallbacks:

- **Space Mono** - Headings and titles
- **Source Code Pro** - Body text and navigation
- System monospace fonts as fallbacks

## Responsive Design

- **Desktop**: Side-by-side navigation and content
- **Mobile**: Stacked layout with navigation on top
- **Breakpoint**: 768px

## Color Palette

- **Primary Text**: `#000000`
- **Accent Color**: `#e15a7c` (pink/red)
- **Background**: `#ffffff`
- **Borders**: `#eeeeee`
- **Muted Text**: `#666666`

## Future Extensions

This modular system makes it easy to add:

- Additional project layout templates
- Different navigation styles
- Theme variations
- Animation and interaction
- CMS integration
