import { breakpoints, colorPalette, theme } from '@kimdw524/dds';

import { style } from '@vanilla-extract/css';

export const item = style({
  padding: '0.5rem 0.75rem',
  borderRadius: '1rem',
  color: theme.color.text.secondary,
  fontSize: '1rem',
  fontWeight: 'normal',
  whiteSpace: 'nowrap',
  transition: 'background-color 0.3s ease, color 0.3s ease',
  cursor: 'pointer',
  userSelect: 'none',

  ':active': {
    backgroundColor: colorPalette.grey[200],
    color: theme.color.text.primary,
  },

  '@media': {
    [`(hover: hover) and (pointer: fine)`]: {
      ':hover': {
        backgroundColor: colorPalette.grey[200],
        color: theme.color.text.primary,
      },

      ':active': {
        backgroundColor: colorPalette.grey[200],
        color: theme.color.text.primary,
      },
    },

    [`screen and (max-width: ${breakpoints.sm})`]: {
      padding: '1rem',
      borderBottom: `0.0625rem solid ${colorPalette.grey[200]}`,
      borderRadius: '0',
    },
  },
});
