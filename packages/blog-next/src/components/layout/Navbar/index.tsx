'use client';

import Nav from '@/components/common/Nav';
import CommonNavbar from '@/components/common/Navbar';
import Link from 'next/link';

const Navbar = () => {
  return (
    <CommonNavbar>
      <CommonNavbar.Logo>blog</CommonNavbar.Logo>
      <Nav>
        <Nav.Item>
          <Link href="/">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="/posts">Posts</Link>
        </Nav.Item>
      </Nav>
    </CommonNavbar>
  );
};

export default Navbar;
