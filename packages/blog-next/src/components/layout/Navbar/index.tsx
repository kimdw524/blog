'use client';

import Nav from '@/components/common/Nav';
import CommonNavbar from '@/components/common/Navbar';

const Navbar = () => {
  return (
    <CommonNavbar>
      <CommonNavbar.Logo>blog</CommonNavbar.Logo>
      <Nav>
        <Nav.Item>Menu1</Nav.Item>
        <Nav.Item>Menu2</Nav.Item>
        <Nav.Item>Menu3</Nav.Item>
      </Nav>
    </CommonNavbar>
  );
};

export default Navbar;
