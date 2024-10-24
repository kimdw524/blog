'use client';

import { ReactNode, useState } from 'react';

import { mergeClasses } from '@/utils/mergeClasses';

import { Bars3Icon } from '@heroicons/react/24/solid';

import * as s from './Nav.css';
import { preventScroll } from '@/app/layout.css';

interface NavProps {
  children: ReactNode;
}

const Nav = ({ children }: NavProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  console.log(isCollapsed);

  const toggleMenu = (showMenu: boolean) => {
    setIsCollapsed(showMenu);

    if (showMenu) {
      document.body.classList.add(preventScroll);
      return;
    }

    document.body.classList.remove(preventScroll);
  };

  return (
    <nav className={s.nav}>
      <div
        className={mergeClasses(s.overlay, isCollapsed && s.collapsed)}
        onClick={() => toggleMenu(false)}
      >
        <div className={s.normal} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
      <div className={s.compact}>
        <button className={s.hamburger} onClick={() => toggleMenu(true)}>
          <Bars3Icon style={{ width: '1.5rem', height: '1.5rem' }} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
