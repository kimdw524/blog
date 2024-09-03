import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import theme, { type Palette } from '../../styles/theme.css';

const colorVar = {
  main: createVar(),
  hover: createVar(),
  disabled: createVar(),
  contrastText: createVar(),
};

export const container = recipe({
  base: {
    overflow: 'hidden',
    borderRadius: '0.25rem',
    lineHeight: '0',
    transition: 'all 0.2s ease',
  },

  variants: {
    color: Object.keys(theme.palette).reduce((acc, palette) => {
      const color = theme.palette[palette as Palette];

      acc[palette as Palette] = style({
        vars: {
          [colorVar.main]: color.main,
          [colorVar.hover]: color.hover,
          [colorVar.disabled]: color.disabled,
          [colorVar.contrastText]: color.contrastText,
        },
      });

      return acc;
    }, {} as Record<Palette, string>),

    variant: {
      outlined: {
        boxShadow: `inset 0 0 0 0.0625rem ${theme.color.border.secondary}`,
        backgroundColor: theme.color.background,

        '&:has(:disabled)': {
          boxShadow: `inset 0 0 0 0.0625rem ${theme.color.border.disabled}`,
        },

        selectors: {
          '&:has(:focus)': {
            boxShadow: `inset 0 0 0 0.0625rem ${colorVar.hover}`,
          },
        },
      },

      contained: {
        backgroundColor: `${colorVar.main}`,

        '&:has(:disabled)': {
          backgroundColor: `${colorVar.disabled}`,
          cursor: 'not-allowed',
        },
      },
    },
  },
});

export const textfield = recipe({
  base: {
    boxSizing: 'border-box',
    width: '100%',
    padding: '0.75rem',
    border: '0',
    outline: 'none',
    backgroundColor: 'transparent',
    color: theme.color.text.primary,
    transition: 'all 0.1s ease',
    resize: 'none',

    '::-webkit-scrollbar': {
      width: '0.25rem',
      height: '0.25rem',
    },

    '::-webkit-scrollbar-thumb': {
      borderRadius: '0.25rem',
      backgroundColor: theme.color.border.primary,
    },

    '::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
    },
  },

  variants: {
    size: {
      sm: { padding: '0.625rem 0.5rem', fontSize: '0.875rem' },
      md: { padding: '0.75rem 0.625rem', fontSize: '1rem' },
      lg: { padding: '0.875rem 0.75rem', fontSize: '1.125rem' },
    },

    variant: {
      outlined: {
        ':disabled': {
          color: theme.color.text.disabled,
        },
      },

      contained: {
        color: `${colorVar.contrastText}`,
      },
    },
  },
});
