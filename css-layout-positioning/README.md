# Dev Notes

## CSS Position

**position:** static | relative | absolute | fixed | sticky;

### Static

```css
.element {
  position: static; /* Default position for every element */
}
```

- Every other value will give you access to **top, bottom, left, right, z-index** properties

### Relative

- Positions an element relative to its normal position

```css
/* This element will be offset by 30px from its initial top and left values */
.element {
  position: relative;
  top: 30px;
  left: 30px;
}
```

### Fixed

- Fixes an element onto the window, making it scrollable since it sits on another staking context
- Use top, left, bottom, and right to position the element relative to the entire browser window

```css
.element {
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
}
```

### Sticky

- Behaves like a normal element until it reaches a specified position, then it will stick
- Sticking point can be specified with top, right, left, and bottom

### Absolute

- Positions an element relative to its nearest ancestor with a specified position other than static

```css
/* Position a child element relative to its parent element */
.parent {
  position: relatve;
}

.child {
  position: absolute;
  top: 0;
  right: 0;
}
```

### z-index

- Controls the stacking context of elements
- Giving a smaller z-index to an element will stack it behind everything else while a greater z-index will place it above everything else

```css
.element-1 {
    position: relative;
    z-index: 1;
}

.element-2 {
    position: absolute:
    /* This will be placed on top of element 1 */
    z-index: 10;
}
```
