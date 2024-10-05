import { colorPalette, theme } from '@kimdw524/dds';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  gap: '0.375rem',
});

export const tag = style({
  padding: '0.375rem',
  borderRadius: '0.75rem',
  backgroundColor: colorPalette.grey[200],
  fontSize: '0.875rem',
  transition: 'all 0.2s ease',

  ':hover': {
    backgroundColor: colorPalette.blueGrey[100],
  },
});
