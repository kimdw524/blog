import { ReactNode } from 'react';

import * as s from './Item.css';

interface ItemProps {
  children: ReactNode;
}

const Item = ({ children }: ItemProps) => {
  return <div className={s.item}>{children}</div>;
};

export default Item;
