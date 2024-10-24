'use client';

import { ReactNode, useRef } from 'react';

import * as s from './Navbar.css';

import useIsScrolled from '@kimdw524/utils/useIsScrolled';

import { mergeClasses } from '@/utils/mergeClasses';

interface NavbarProps {
  children: ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  const headerRef = useRef<HTMLHeadElement>(null);

  const isScrolled = useIsScrolled();

  return (
    <header
      ref={headerRef}
      className={mergeClasses(s.navbar, isScrolled && s.scrolled)}
    >
      {children}
    </header>
  );
};

export default Navbar;
