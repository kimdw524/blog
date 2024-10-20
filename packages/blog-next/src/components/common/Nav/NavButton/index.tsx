import { ReactNode } from 'react';

import * as s from './NavButton.css';

interface NavButtonProps {
  children: ReactNode;
}

const NavButton = ({ children }: NavButtonProps) => {
  return <div className={s.button}>{children}</div>;
};

export default NavButton;
