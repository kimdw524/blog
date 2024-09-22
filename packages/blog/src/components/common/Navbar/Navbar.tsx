import { ReactNode, useRef } from 'react';

import * as s from './Navbar.css';

import useIsScrolled from '@/hooks/useIsScrolled';

import { mergeClass } from '@/utils/mergeClass';

interface NavbarProps {
  children: ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  const headerRef = useRef<HTMLHeadElement>(null);

  const isScrolled = useIsScrolled();

  return (
    <header
      ref={headerRef}
      className={mergeClass(s.navbar, isScrolled && s.scrolled)}
    >
      {children}
    </header>
  );
};

export default Navbar;
