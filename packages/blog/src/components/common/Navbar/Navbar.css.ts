import { breakpoints, theme } from '@kimdw524/dds';

import { style } from '@vanilla-extract/css';

export const navbar = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'sticky',
  top: '0',
  zIndex: '90',
  height: '5rem',
  padding: '0 1.25rem',
  borderBottom: '0.0625rem solid transparent',
  backdropFilter: 'blur(0.5rem)',
  transition: 'border-bottom 0.5s ease',

  '@media': {
    [`screen and (max-width: ${breakpoints.sm})`]: {
      height: '3.5rem',
      padding: '0 1rem',
      borderBottom: `0.0625rem solid ${theme.color.border.disabled}`,
    },
  },
});

export const scrolled = style({
  borderBottom: `0.0625rem solid ${theme.color.border.disabled}`,
});
