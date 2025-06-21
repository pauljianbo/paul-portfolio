# Conditional Read More Feature

## Overview

This feature dynamically detects when project descriptions exceed 3 lines of text and only displays the "Read more" button when truncation is actually needed. This creates a cleaner user interface by avoiding unnecessary buttons for short descriptions.

## How It Works

### Core Functionality

1. **Smart Detection**: Automatically detects if text exceeds 3 lines using DOM measurements
2. **Dynamic Button Display**: Only shows "Read more" button when text is actually truncated
3. **Clean UI**: No unnecessary buttons for descriptions that fit within 3 lines
4. **Responsive**: Recalculates truncation on window resize for responsive behavior

### Technical Implementation

#### State Management

```typescript
const [isTruncated, setIsTruncated] = useState<boolean[]>([]);
const descriptionRefs = useRef<(HTMLParagraphElement | null)[]>([]);
```

- `isTruncated`: Array tracking which project descriptions are truncated
- `descriptionRefs`: References to DOM elements for measuring text height

#### Truncation Detection Logic

```typescript
const checkTruncation = () => {
  const truncatedStates = descriptionRefs.current.map((ref) => {
    if (!ref) return false;
    return ref.scrollHeight > ref.clientHeight;
  });
  setIsTruncated(truncatedStates);
};
```

**How the Detection Works:**

1. **scrollHeight**: Total height of the content including hidden overflow
2. **clientHeight**: Visible height of the element (3 lines when clamped)
3. **Comparison**: When `scrollHeight > clientHeight`, text is truncated
4. **CSS line-clamp-3**: Limits visible text to exactly 3 lines

#### DOM Measurements

```jsx
<p
  ref={(el) => {
    descriptionRefs.current[index] = el;
  }}
  className={`leading-relaxed text-slate-600 dark:text-slate-300 ${
    !expandedCards.includes(index) ? 'line-clamp-3' : ''
  }`}
>
  {project.description}
</p>
```

- Each description gets a ref for measurement
- `line-clamp-3` CSS class applied when not expanded
- Dynamic className based on expansion state

#### Conditional Button Rendering

```jsx
{
  isTruncated[index] && (
    <button
      onClick={(e) => {
        e.stopPropagation();
        toggleCard(index);
      }}
    >
      {expandedCards.includes(index) ? 'Show less' : 'Read more'}
    </button>
  );
}
```

- Button only renders when `isTruncated[index]` is true
- Integrates with clickable card feature using `stopPropagation()`

#### Responsive Recalculation

```typescript
useEffect(() => {
  // Check truncation after content loads
  const timer = setTimeout(checkTruncation, 100);

  // Check on window resize
  const handleResize = () => {
    setTimeout(checkTruncation, 100);
  };

  window.addEventListener('resize', handleResize);

  return () => {
    clearTimeout(timer);
    window.removeEventListener('resize', handleResize);
  };
}, [projects]);
```

- Initial check after component mount with 100ms delay
- Recalculates on window resize for responsive behavior
- Cleanup prevents memory leaks

## CSS Implementation

### Line Clamping

```css
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

- Uses WebKit line clamping for cross-browser support
- Limits text to exactly 3 lines
- Hides overflow content with ellipsis

### Text Styling

```css
.leading-relaxed {
  line-height: 1.625; /* Consistent line height for accurate measurement */
}
```

- Consistent line height ensures accurate measurements
- Relaxed leading for better readability

## User Experience Benefits

### Clean Interface

- **No Clutter**: Eliminates unnecessary buttons for short descriptions
- **Visual Hierarchy**: Only shows interactive elements when needed
- **Consistent Layout**: Cards maintain uniform appearance regardless of content length

### Intelligent Interaction

- **Context-Aware**: Users only see "Read more" when there's actually more to read
- **Predictable Behavior**: Button appearance indicates there's hidden content
- **Smooth Transitions**: Expanding and collapsing text feels natural

### Responsive Design

- **Adaptive**: Recalculates truncation when window size changes
- **Mobile-Friendly**: Works correctly across different screen sizes
- **Font-Agnostic**: Adapts to different font sizes and line heights

## Technical Details

### DOM Measurement Strategy

#### Why scrollHeight vs clientHeight?

1. **scrollHeight**: Represents the total content height including hidden areas
2. **clientHeight**: Represents the visible height within the element
3. **line-clamp Effect**: When line-clamp-3 is applied, clientHeight becomes the height of exactly 3 lines
4. **Overflow Detection**: If content exceeds 3 lines, scrollHeight > clientHeight

#### Timing Considerations

- **100ms Delay**: Allows DOM to render before measurement
- **Resize Debouncing**: Prevents excessive calculations during window resize
- **Effect Dependencies**: Recalculates when projects data changes

### Performance Optimization

#### Efficient Measurements

```typescript
// Batch DOM reads to avoid layout thrashing
const truncatedStates = descriptionRefs.current.map((ref) => {
  if (!ref) return false;
  return ref.scrollHeight > ref.clientHeight;
});
```

- Batch DOM reads to minimize reflows
- Early return for missing refs
- Single state update for all measurements

#### Memory Management

- Event listener cleanup in useEffect return
- Timeout cleanup to prevent memory leaks
- Ref array management for dynamic content

## Browser Compatibility

### CSS Features

- **line-clamp**: Supported in modern browsers (Chrome 6+, Firefox 68+, Safari 5+)
- **Flexbox**: Required for line-clamp, widely supported
- **Graceful Degradation**: Falls back to standard overflow:hidden in older browsers

### JavaScript APIs

- **DOM Measurements**: scrollHeight and clientHeight are universally supported
- **useRef/useState**: React hooks with broad compatibility
- **setTimeout/addEventListener**: Standard APIs with full support

## Edge Cases & Handling

### Font Loading

- **Web Fonts**: Measurements occur after DOM render, accounting for font changes
- **Fallback Fonts**: Works with system fonts and web font fallbacks
- **Font Size Changes**: Responsive recalculation handles dynamic font sizing

### Dynamic Content

- **Content Updates**: useEffect dependency on projects array triggers recalculation
- **Runtime Changes**: Component handles project data changes gracefully
- **State Synchronization**: isTruncated array stays synchronized with projects

### Responsive Breakpoints

- **Window Resize**: Automatic recalculation on viewport changes
- **CSS Breakpoints**: Works with Tailwind responsive classes
- **Text Reflow**: Handles text reflow at different screen sizes

## Testing Scenarios

### Functional Testing

1. **Short Text**: No "Read more" button should appear
2. **Long Text**: "Read more" button should appear
3. **Borderline Text**: Text exactly at 3 lines should not show button
4. **Window Resize**: Button should appear/disappear based on new layout

### Content Variations

1. **Different Description Lengths**: Test with various text lengths
2. **Special Characters**: Ensure measurement works with unicode/emojis
3. **Mixed Content**: Test with descriptions containing HTML entities
4. **Empty Descriptions**: Handle edge case of empty/null descriptions

### Responsive Testing

1. **Mobile Devices**: Verify behavior on small screens
2. **Tablet Orientation**: Test portrait/landscape orientation changes
3. **Browser Zoom**: Ensure measurements work at different zoom levels
4. **Font Size Changes**: Test with user-defined font size preferences

## Code Organization

### File Structure

```
app/components/HomeCards/ProjectSection.tsx
├── State management (isTruncated, descriptionRefs)
├── Truncation detection (checkTruncation function)
├── Effect hooks (measurement timing)
└── Conditional rendering (button display logic)
```

### Key Components

- **State Arrays**: Track truncation state for each project
- **Ref Management**: DOM element references for measurements
- **Effect Coordination**: Timing and cleanup management
- **Conditional Logic**: Smart button rendering

## Future Enhancements

### Advanced Features

1. **Animation**: Smooth height transitions when expanding/collapsing
2. **Custom Line Count**: Make the 3-line limit configurable
3. **Character Limits**: Alternative truncation based on character count
4. **Preview Text**: Show partial sentences rather than hard line cuts

### Performance Improvements

1. **Intersection Observer**: Only measure visible cards
2. **Debounced Resize**: More sophisticated resize handling
3. **Memoization**: Cache measurements for identical content
4. **Virtual Scrolling**: Optimize for large numbers of projects

### Accessibility Enhancements

1. **Screen Reader Support**: Announce when content is truncated
2. **Keyboard Navigation**: Enhanced keyboard support for expansion
3. **Focus Management**: Maintain focus state during expansion
4. **ARIA Attributes**: Proper accessibility labeling

## Maintenance Checklist

### Regular Testing

- [ ] Verify button only appears when text exceeds 3 lines
- [ ] Test responsive behavior on window resize
- [ ] Check performance with large numbers of projects
- [ ] Validate cross-browser compatibility

### Code Quality

- [ ] DOM measurements are efficient
- [ ] Event listeners are properly cleaned up
- [ ] State updates are batched appropriately
- [ ] Error handling for edge cases

### Design Consistency

- [ ] Button styling matches design system
- [ ] Animations are smooth and performant
- [ ] Typography scales correctly across devices
- [ ] Integration with theme system works properly
