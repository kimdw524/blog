import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import theme, { type Palette } from '../../styles/theme.css';

const colorVar = {
  main: createVar(),
  hover: createVar(),
  active: createVar(),
  disabled: createVar(),
  contrastText: createVar(),
};

export const chip = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    lineHeight: '0',
    transition: 'all 0.2s ease',
    cursor: 'default',
    userSelect: 'none',
  },

  variants: {
    color: Object.keys(theme.palette).reduce((acc, palette) => {
      const color = theme.palette[palette as Palette];

      acc[palette as Palette] = style({
        vars: {
          [colorVar.main]: color.main,
          [colorVar.hover]: color.hover,
          [colorVar.active]: color.active,
          [colorVar.disabled]: color.disabled,
          [colorVar.contrastText]: color.contrastText,
        },
      });

      return acc;
    }, {} as Record<Palette, string>),

    variant: {
      contained: {
        backgroundColor: colorVar.main,
        color: colorVar.contrastText,

        '&.click:not(.disabled)': {
          cursor: 'pointer',

          '&:hover': {
            backgroundColor: colorVar.hover,
          },

          '&:active': {
            backgroundColor: colorVar.active,
          },
        },

        '&.disabled': {
          backgroundColor: colorVar.disabled,
        },
      },
      outlined: {
        boxShadow: `inset 0 0 0 0.0625rem ${colorVar.main}`,
        backgroundColor: theme.color.background,
        color: colorVar.main,

        '&.click:not(.disabled)': {
          cursor: 'pointer',

          '&:hover': {
            boxShadow: `inset 0 0 0 0.0625rem ${colorVar.hover}`,
            color: colorVar.hover,
          },

          '&:active': {
            boxShadow: `inset 0 0 0 0.0625rem ${colorVar.active}`,
            color: colorVar.active,
          },
        },

        '&.disabled': {
          boxShadow: `inset 0 0 0 0.0625rem ${colorVar.disabled}`,
          color: colorVar.disabled,
        },
      },
    },

    size: {
      sm: {
        height: '1.5rem',
        padding: '0 0.5rem',
        borderRadius: '0.75rem',
        fontSize: '0.75rem',
      },

      md: {
        height: '1.75rem',
        padding: '0 0.625rem',
        borderRadius: '0.875rem',
        fontSize: '0.875rem',
      },

      lg: {
        height: '2rem',
        padding: '0 0.75rem',
        borderRadius: '1rem',
        fontSize: '1rem',
      },
    },
  },
});
