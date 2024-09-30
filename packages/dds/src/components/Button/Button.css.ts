import { recipe } from '@vanilla-extract/recipes';

import theme, { type Palette } from '../../styles/theme.css';

export const button = recipe({
  base: {
    border: 0,
    borderRadius: '0.25rem',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    cursor: 'pointer',
    transition: 'all 0.1s ease',
    userSelect: 'none',
  },

  variants: {
    color: Object.keys(theme.palette).reduce((acc, palette) => {
      const color = theme.palette[palette as Palette];

      acc[palette as Palette] = {
        backgroundColor: color.main,
        color: color.contrastText,

        ':hover': {
          backgroundColor: color.hover,
        },

        ':active': {
          backgroundColor: color.active,
        },

        ':disabled': {
          backgroundColor: color.disabled,
          cursor: 'not-allowed',
        },
      };

      return acc;
    }, {} as Record<Palette, object>),

    size: {
      sm: { padding: '0.5rem', fontSize: '0.875rem' },
      md: { padding: '0.625rem', fontSize: '1rem' },
      lg: { padding: '0.75rem', fontSize: '1.125rem' },
    },
  },
});
