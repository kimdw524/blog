import { breakpoints } from '@kimdw524/dds';

import { style } from '@vanilla-extract/css';

export const normal = style({
  display: 'flex',
  flexDirection: 'row',
});

export const collapsed = style({});

export const nav = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  [`.${normal}`]: {
    display: 'flex',
  },

  [`.${collapsed}`]: {
    display: 'none',
  },
  '@media': {
    [`screen and (max-width: ${breakpoints.sm})`]: {
      [`.${normal}`]: {
        display: 'none',
      },

      [`.${collapsed}`]: {
        display: 'block',
      },
    },
  },
});
