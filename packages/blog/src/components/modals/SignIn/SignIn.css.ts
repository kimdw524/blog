import { theme } from '@kimdw524/dds';

import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '1.25rem',
  borderRadius: '0.5rem',
  backgroundColor: '#fff',
});

export const method = style({
  padding: '1rem',
  borderRadius: '0.5rem',
  backgroundColor: theme.color.background.secondary,
  textAlign: 'center',
});

export const kakao = style({
  cursor: 'pointer',
});
