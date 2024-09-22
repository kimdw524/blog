import { globalStyle, style } from '@vanilla-extract/css';

export const preventScroll = style({
  overflowY: 'hidden',
});

globalStyle('body', {
  overflowX: 'hidden',
  margin: '0',
  outline: 'none',
  WebkitTapHighlightColor: 'transparent',
});
