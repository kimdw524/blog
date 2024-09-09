import { ReactNode } from 'react';

import * as s from './Logo.css';

interface LogoProps {
  children: ReactNode;
}

const Logo = ({ children }: LogoProps) => {
  return <div className={s.logo}>{children}</div>;
};

export default Logo;
