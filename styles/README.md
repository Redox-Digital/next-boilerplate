# Styling

### CSS : Next

_In progress_

Global styles VS style modules

### CSS: BEM

The CSS class naming is inspired by [BEM](https://bem.info/). It stands for "Block Element Modifier":

- Block is the main container, like a card
- Elements are items in the block; like title, button, ...
- Modifier are variations; like states, alternative colors, ...

_Example_

```css
.poiCard {
  ...;
} /* Block */
.poiCard__title {
  ...;
} /* Block__Element */
.poiCard__button__secondary {
  ...;
} /* Block__Element__Modifier */
```

### CSS: ITCSS

The folder structure is inspired by [ITCSS](https://developer.helpscout.com/seed/glossary/itcss/). We organise folders like so:

- `settings` : variables, mixins, libraries, ...
- `normalize` : CSS resets and normalizing rules
- `elements` : Style rules for bare HTML elements (like `h1` or `button`).
- `layouts` : Style rules for elements responsible for layout or structuring.
- `components` : UI specific rules, like cards, call-to-actions, ...

_(! Not relevant for now !)Note: don't forget to import your newly created `.scss` file into `/styles/index.scss`_
