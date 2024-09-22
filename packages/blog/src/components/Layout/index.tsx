import { Outlet } from 'react-router-dom';

import Navbar from '../common/Navbar';

import Nav from '../common/Nav';

import { lightTheme } from '@kimdw524/dds';

const Layout = () => {
  return (
    <div className={lightTheme}>
      <Navbar>
        <Navbar.Logo>LOGO</Navbar.Logo>
        <Nav>
          <Nav.Item>Posts</Nav.Item>
          <Nav.Item>About me</Nav.Item>
          <Nav.Item>Github</Nav.Item>
        </Nav>
      </Navbar>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
