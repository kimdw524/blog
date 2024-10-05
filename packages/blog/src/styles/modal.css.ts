import type { ModalAmationClassNames } from '@kimdw524/utils/useModal';

import { style } from '@vanilla-extract/css';

export const modalCenter: ModalAmationClassNames = {
  base: style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    inset: '0 0 0 0',
    overflowY: 'hidden',
    zIndex: '100',
    boxSizing: 'border-box',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    opacity: '0',

    [`> ${'div'}`]: {
      opacity: '0',
      transform: 'translateY(4rem) scale(0.9)',
    },
  }),

  enter: style({
    opacity: '1',
    transition: 'all 0.3s ease',

    [`> ${'div'}`]: {
      opacity: '1',
      transition: 'all 0.3s ease',
      transform: 'translateY(0) scale(1)',
    },
  }),

  exit: style({
    opacity: '0',
    transition: 'all 0.3s ease',
    pointerEvents: 'none',

    [`> ${'div'}`]: {
      opacity: '0',
      transition: 'all 0.3s ease',
      transform: 'translateY(4rem) scale(0.9)',
    },
  }),
};
