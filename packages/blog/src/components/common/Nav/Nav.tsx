import { ReactNode, useState } from 'react';

import { mergeClass } from '@/utils/mergeClass';

import { Bars3Icon } from '@heroicons/react/24/solid';

import * as s from './Nav.css';

interface NavProps {
  children: ReactNode;
}

const Nav = ({ children }: NavProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsCollapsed(true);
  };

  const handleOverlayClick = () => {
    setIsCollapsed(false);
  };

  return (
    <nav className={s.nav}>
      <div
        className={mergeClass(s.overlay, isCollapsed && s.collapsed)}
        onClick={handleOverlayClick}
      >
        <div className={s.normal} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
      <div className={s.compact}>
        <button className={s.hamburger} onClick={handleMenuClick}>
          <Bars3Icon style={{ width: '1.5rem', height: '1.5rem' }} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
