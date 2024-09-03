import { ReactNode } from 'react';

import * as s from './Chip.css';
import type { ChipVariants } from './Chip.types';

interface ChipProps
  extends ChipVariants,
    Omit<React.ComponentProps<'div'>, keyof ChipVariants> {
  children: ReactNode;
  disabled?: boolean;
}

const Chip = ({
  children,
  disabled = false,
  color = 'primary',
  size = 'md',
  variant = 'contained',
  ...props
}: ChipProps) => {
  return (
    <div
      className={[
        s.chip({ color, size, variant }),
        disabled && 'disabled',
        props.onClick && 'click',
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      <span>{children}</span>
    </div>
  );
};

export default Chip;
