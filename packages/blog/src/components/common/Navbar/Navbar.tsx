import { ReactNode } from 'react';

import * as s from './Navbar.css';

interface NavbarProps {
  children: ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  return <div className={s.navbar}>{children}</div>;
};

export default Navbar;
