import { ReactNode } from 'react';

import * as s from './NavItem.css';

interface NavItemProps {
  children: ReactNode;
}

const NavItem = ({ children }: NavItemProps) => {
  return <div className={s.item}>{children}</div>;
};

export default NavItem;
