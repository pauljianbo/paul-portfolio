# Clickable Cards Feature

## Overview

This feature makes the entire project card clickable, allowing users to navigate to the project URL by clicking anywhere on the card. The implementation uses event handling and propagation control to create an intuitive user experience.

## How It Works

### Core Functionality

1. **Entire Card is Clickable**: Users can click anywhere on the project card to visit the project
2. **New Tab Navigation**: Clicking opens the project URL in a new tab to preserve the user's browsing session
3. **Selective Event Handling**: Certain interactive elements prevent the card click to avoid conflicts

### Technical Implementation

#### Main Card Click Handler

```typescript
const handleCardClick = (projectUrl: string) => {
  window.open(projectUrl, '_blank', 'noopener,noreferrer');
};
```

- Opens the project URL in a new tab
- Uses `noopener,noreferrer` for security best practices
- Preserves the user's current browsing session

#### Card Container Setup

```jsx
<div className="...cursor-pointer..." onClick={() => handleCardClick(project.projectUrl)}>
  {/* Card content */}
</div>
```

- Added `cursor-pointer` class to indicate clickability
- `onClick` handler attached to the main card container
- Event bubbling allows clicks anywhere inside to trigger navigation

#### Event Propagation Control

The feature uses `event.stopPropagation()` to prevent conflicts with interactive elements:

##### 1. Floating Action Button

```jsx
<a href={project.projectUrl} onClick={(e) => e.stopPropagation()}>
  <ArrowUpRight />
</a>
```

##### 2. Read More Button

```jsx
<button
  onClick={(e) => {
    e.stopPropagation(); // Prevents card navigation
    toggleCard(index); // Only toggles text expansion
  }}
>
  Read more
</button>
```

## User Experience Benefits

### Improved Accessibility

- **Large Click Target**: The entire card is clickable, making it easier for users with motor difficulties
- **Touch-Friendly**: Ideal for mobile and tablet users with larger touch targets
- **Intuitive**: Users naturally expect cards to be clickable in modern web interfaces

### Navigation Efficiency

- **Quick Access**: Users can click anywhere on the card without precise targeting
- **Tab Preservation**: New tab opening keeps the portfolio page open
- **Visual Feedback**: Hover effects and cursor changes indicate interactivity

### Conflict Prevention

- **Selective Interaction**: Interactive elements work independently without triggering card navigation
- **No Double Navigation**: Floating action button doesn't cause duplicate tab opening
- **Clean UX**: Read more functionality works without interfering with card clicks

## Implementation Details

### Event Handling Strategy

1. **Event Bubbling**: Leverages DOM event bubbling to catch clicks anywhere on the card
2. **Stop Propagation**: Uses `stopPropagation()` on specific elements to prevent unwanted triggers
3. **Selective Prevention**: Only prevents propagation where necessary, maintaining natural behavior

### CSS Classes

```css
.cursor-pointer {
  cursor: pointer; /* Indicates clickability */
}

/* Hover effects enhance the clickable feel */
.group-hover\:-translate-y-2 {
  transform: translateY(-0.5rem);
}
```

### Security Considerations

- `noopener`: Prevents new tab from accessing `window.opener`
- `noreferrer`: Prevents referrer information from being passed
- External link handling follows security best practices

## Browser Compatibility

- **Modern Browsers**: Full support in Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: Works seamlessly on iOS Safari and Android Chrome
- **Event Handling**: Uses standard DOM events with broad compatibility
- **CSS Features**: Hover effects gracefully degrade in older browsers

## Testing Scenarios

### Functional Testing

1. Click anywhere on card → Should open project URL in new tab
2. Click "Read more" → Should only expand/collapse text
3. Click floating action button → Should open project URL (single tab)
4. Mobile touch → Should work with touch events

### Edge Cases

1. Rapid clicking → Should not open multiple tabs due to event handling
2. Keyboard navigation → Card should be accessible via keyboard
3. Screen readers → Should announce clickable cards appropriately

## Code Organization

### File Location

- `app/components/HomeCards/ProjectSection.tsx`

### Related Components

- Uses `projects` array data structure
- Integrates with Swiper carousel component
- Works with theme context for styling

### Key Functions

- `handleCardClick()`: Main navigation handler
- Event propagation control on interactive elements
- CSS classes for visual feedback

## Future Enhancements

### Potential Improvements

1. **Analytics Tracking**: Add click tracking for project visits
2. **Keyboard Support**: Enhance keyboard navigation and Enter key handling
3. **Loading States**: Show loading indicator for external navigation
4. **Custom Animations**: Add more sophisticated hover and click animations

### Accessibility Enhancements

1. **ARIA Labels**: Add descriptive labels for screen readers
2. **Focus Management**: Improve focus handling for keyboard users
3. **Voice Commands**: Consider voice navigation support

## Maintenance Notes

### Testing Checklist

- [ ] Card click opens correct project URL
- [ ] New tab opens with security attributes
- [ ] Read more button doesn't trigger navigation
- [ ] Floating action button works independently
- [ ] Mobile touch events work properly
- [ ] Hover effects display correctly

### Code Review Points

- Event propagation is correctly implemented
- Security attributes are present on external links
- CSS classes maintain visual consistency
- No performance issues with event handlers
