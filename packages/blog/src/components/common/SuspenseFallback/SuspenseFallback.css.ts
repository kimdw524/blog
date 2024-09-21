import { colorPalette } from '@kimdw524/dds';

import { style, keyframes } from '@vanilla-extract/css';

const skeleton = keyframes({
  from: {
    backgroundPosition: '-200% 0',
  },

  to: {
    backgroundPosition: '200% 0',
  },
});

const fadeIn = keyframes({
  from: {
    opacity: '0',
  },

  to: {
    opacity: '1',
  },
});

export const wrapper = style({
  boxSizing: 'border-box',
});

export const suspense = style({
  width: '100%',
  height: '100%',
  background: `linear-gradient(90deg, ${colorPalette.grey[50]} 0%, ${colorPalette.grey[200]} 50%, ${colorPalette.grey[50]} 100%)`,
  backgroundSize: '200% 100%',
  borderRadius: '0.5rem',
  animation: `${skeleton} 2s linear 0s infinite, ${fadeIn} 1s ease`,
});
