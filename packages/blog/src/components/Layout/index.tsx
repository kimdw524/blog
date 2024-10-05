import { Outlet } from 'react-router-dom';

import Nav from '@/components/common/Nav';
import Navbar from '@/components/common/Navbar';
import SignIn from '@/components/modals/SignIn';

import { Button } from '@kimdw524/dds';

import useModal from '@kimdw524/utils/useModal';

const Layout = () => {
  const { push } = useModal();

  const handleClick = () => {
    push({
      children: <SignIn />,
    });
  };

  return (
    <div>
      <Navbar>
        <Navbar.Logo>LOGO</Navbar.Logo>
        <Nav>
          <Nav.Item>Posts</Nav.Item>
          <Nav.Item>About me</Nav.Item>
          <Nav.Item>Github</Nav.Item>
          <Nav.Button>
            <Button onClick={handleClick}>로그인</Button>
          </Nav.Button>
        </Nav>
      </Navbar>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
