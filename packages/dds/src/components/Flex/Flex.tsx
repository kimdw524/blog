import { CSSProperties, ReactNode } from 'react';

import * as s from './Flex.css';

interface FlexProps {
  children: ReactNode;
  flexDirection?: CSSProperties['flexDirection'];
  gap?: string;
  alignItems?: CSSProperties['alignItems'];
  justifyContent?: CSSProperties['justifyContent'];
  margin?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  padding?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
}

const Flex = ({ children, ...props }: FlexProps) => {
  return (
    <div className={s.flex} style={{ ...props }}>
      {children}
    </div>
  );
};

export default Flex;
