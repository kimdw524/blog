import { Button } from '@kimdw524/dds';
import { ReactNode } from 'react';

import * as s from './Nav.css';

interface NavProps {
  children: ReactNode;
}

const Nav = ({ children }: NavProps) => {
  return (
    <nav className={s.nav}>
      <div className={s.normal}>{children}</div>
      <div className={s.collapsed}>
        <Button>메뉴</Button>
      </div>
    </nav>
  );
};

export default Nav;
