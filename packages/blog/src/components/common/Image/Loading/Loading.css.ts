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

export const container = style({
  position: 'absolute',
  inset: '0',
  zIndex: '10',
  background: `linear-gradient(90deg, ${colorPalette.grey[100]} 0%, ${colorPalette.grey[300]} 50%, ${colorPalette.grey[100]} 100%)`,
  backgroundSize: '200% 100%',
  animation: `${skeleton} 2s linear 0s infinite`,
  transition: 'all 0.2s ease',
});

export const done = style({
  opacity: '0',
});
