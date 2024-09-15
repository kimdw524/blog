import { breakpoints } from '@kimdw524/dds';

import { style } from '@vanilla-extract/css';

export const navbar = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '5rem',
  padding: '0 1.25rem',

  '@media': {
    [`screen and (max-width: ${breakpoints.sm})`]: {
      height: '3.5rem',
      padding: '0 1rem',
      borderBottom: '0.0625rem solid #ddd',
    },
  },
});
