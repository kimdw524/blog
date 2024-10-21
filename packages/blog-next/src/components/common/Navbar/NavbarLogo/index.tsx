import { ReactNode } from 'react';

import * as s from './NavbarLogo.css';

interface NavbarLogoProps {
  children: ReactNode;
}

const NavbarLogo = ({ children }: NavbarLogoProps) => {
  return <div className={s.logo}>{children}</div>;
};

export default NavbarLogo;
