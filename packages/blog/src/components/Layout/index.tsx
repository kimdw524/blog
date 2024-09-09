import { Outlet } from 'react-router-dom';

import Navbar from '../common/Navbar';

import Nav from '../common/Nav';

const Layout = () => {
  return (
    <>
      <Navbar>
        <Navbar.Logo>kimdw524's blog</Navbar.Logo>
        <Nav>
          <Nav.Item>Posts</Nav.Item>
          <Nav.Item>About me</Nav.Item>
          <Nav.Item>Github</Nav.Item>
        </Nav>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Layout;
