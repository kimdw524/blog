import { breakpoints, colorPalette } from '@kimdw524/dds';

import { style } from '@vanilla-extract/css';

export const button = style({
  padding: '0 0.5rem',

  ':last-of-type': {
    padding: '0 0 0 0.5rem',
  },

  '@media': {
    [`screen and (max-width: ${breakpoints.sm})`]: {
      display: 'flex',
      padding: '0.75rem !important',

      [`> ${'*'}`]: {
        flex: '1 1 auto',
      },
    },
  },
});
