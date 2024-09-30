import { ReactNode } from 'react';

import * as s from './Button.css';

interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <div className={s.button}>{children}</div>;
};

export default Button;
