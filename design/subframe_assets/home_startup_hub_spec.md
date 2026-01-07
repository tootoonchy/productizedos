# Subframe Design Specification: Home Startup Hub

This document captures the specific design details extracted from the Subframe "Home Startup Hub" workspace.

## 1. Page Hierarchy
The project consists of several specialized hubs:
- `Home Startup Hub` (Primary Landing)
- `Dashboard`
- `Exit Accelerator Hub`
- `Community Hub`
- `Founder Marketplace Hub`

## 2. Visual Style Breakdown

### Typography
- **Headings**: Extra Bold, Sans-Serif. High visual weight for the main Value Prop.
- **Copy**: Clean, medium line-height for readability.

### Hero Section Components
- **Pill Badges**:
    - Style: Rounded-full, subtle background color.
    - Colors observed: Pastel Green, Pastel Peach, Pastel Blue.
- **Buttons**:
    - **Primary**: Solid Black, rounded-md (~8px), White text. Label: "Apply for Next Cohort".
    - **Secondary**: Transparent/Subtle border with trailing icon (arrow).

### Layout Patterns
- **Navbar**: Sticky or fixed top. Navigation links on the left/center, account actions on the right.
- **Responsive**: The design is optimized for responsive breakpoints.

## 3. Implementation Checklist
- [ ] Replicate the Navigation Bar structure.
- [ ] Build the Hero section with dynamic pill badges.
- [ ] Create the primary/secondary button variants.
- [ ] Set up the responsive grid for the "Hub" layout.
