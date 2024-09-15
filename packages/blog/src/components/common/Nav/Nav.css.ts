import { breakpoints, colorPalette } from '@kimdw524/dds';

import { style, keyframes } from '@vanilla-extract/css';

const fadeIn = keyframes({
  from: {
    opacity: '0',
  },

  to: {
    opacity: '1',
  },
});

const swipe = keyframes({
  from: {
    transform: 'translateX(100%)',
    opacity: 0,
  },

  to: {
    transform: 'translateX(0)',
    opacity: '1',
  },
});

export const normal = style({
  display: 'flex',
  flexDirection: 'row',
});

export const overlay = style({
  '@media': {
    [`screen and (max-width: ${breakpoints.sm})`]: {
      display: 'none',
      position: 'fixed',
      inset: '0 0 0 0',
      backgroundColor: 'rgba(0, 0, 0, 0.33)',
      animation: `${fadeIn} 0.2s ease 1`,
      zIndex: '100',

      [`.${normal}`]: {
        animation: `${swipe} 0.2s ease 1`,
      },
    },
  },
});

export const collapsed = style({
  display: 'block !important',
});

export const compact = style({});

export const nav = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  [`.${normal}`]: {
    display: 'flex',
  },

  [`.${compact}`]: {
    display: 'none',
  },

  '@media': {
    [`screen and (max-width: ${breakpoints.sm})`]: {
      [`.${normal}`]: {
        display: 'block',
        position: 'fixed',
        top: '0',
        right: '0',
        width: '15rem',
        maxWidth: '100vw',
        height: '100vh',
        borderLeft: `0.0625rem solid ${colorPalette.grey[400]}`,
        backgroundColor: '#fff',
      },

      [`.${compact}`]: {
        display: 'block',
      },
    },
  },
});

export const hamburger = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2.5rem',
  height: '2.5rem',
  border: '0',
  borderRadius: '50%',
  backgroundColor: 'transparent',
  transition: 'all 0.2s ease',
  cursor: 'pointer',

  ':active': {
    backgroundColor: colorPalette.grey[200],
  },
});
