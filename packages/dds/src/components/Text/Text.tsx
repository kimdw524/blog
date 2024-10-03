import { CSSProperties, ReactNode } from 'react';

import * as s from './Text.css';

type TextElement = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TextProps {
  children: ReactNode;
  color?: string;
  weight?: CSSProperties['fontWeight'];
  element?: TextElement;
}

const Text = ({
  children,
  color,
  weight,
  element: Element = 'p',
}: TextProps) => {
  return (
    <Element className={s.text} style={{ color, fontWeight: weight }}>
      {children}
    </Element>
  );
};

export default Text;
