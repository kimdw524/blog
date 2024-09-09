import { ReactNode } from 'react';

import * as s from './Nav.css';

interface NavProps {
  children: ReactNode;
}

const Nav = ({ children }: NavProps) => {
  return <nav className={s.nav}>{children}</nav>;
};

export default Nav;
