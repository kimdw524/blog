import { colorPalette } from '@kimdw524/dds';

import { style } from '@vanilla-extract/css';

export const thumbnail = style({
  aspectRatio: '16 / 9',
  transition: 'all 0.2s ease',
});

export const thumbnailWrapper = style({
  overflow: 'hidden',
  aspectRatio: '16 / 9',
  borderRadius: '0.75rem',
});

export const container = style({
  maxWidth: '100%',
  padding: '0.75rem',
  boxSizing: 'border-box',
  borderRadius: '0.5rem',
  transition: 'all 0.2s ease',
  cursor: 'pointer',

  ':hover': {
    backgroundColor: colorPalette.blueGrey[50],

    [`.${thumbnail}`]: {
      transform: 'scale(1.05)',
    },
  },
});

export const title = style({
  overflow: 'hidden',
  paddingTop: '0.375rem',
  fontSize: '1.25rem',
  fontWeight: 'bold',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const content = style({
  overflow: 'hidden',
  padding: '0.375rem 0',
  color: colorPalette.grey[900],
  fontSize: '1rem',
  fontWeight: 'normal',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const date = style({
  color: colorPalette.grey[700],
  fontSize: '0.875rem',
  textAlign: 'right',
});
