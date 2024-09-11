import { colorPalette, theme } from '@kimdw524/dds';

import { style } from '@vanilla-extract/css';

export const item = style({
  padding: '0.5rem 0.75rem',
  borderRadius: '1rem',
  color: theme.color.text.secondary,
  fontSize: '1rem',
  fontWeight: 'normal',
  whiteSpace: 'nowrap',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  userSelect: 'none',
  ':hover': {
    backgroundColor: colorPalette.grey[200],
    color: theme.color.text.primary,
  },
});
