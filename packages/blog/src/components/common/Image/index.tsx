import { mergeClass } from '@/utils/mergeClass';

import { useState } from 'react';

import * as s from './Image.css';

import Loading from './Loading';

interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  className?: string;
}

type ImageState = 'loading' | 'success' | 'error';

const Image = ({ src, alt, width, height, className }: ImageProps) => {
  const [state, setState] = useState<ImageState>('loading');

  return (
    <div
      className={mergeClass(s.container, className)}
      style={{ width, height }}
    >
      <img
        src={src}
        alt={alt}
        className={s.image}
        onLoad={() => setState('success')}
        onError={() => setState('error')}
      />
      <Loading done={state === 'success'} />
    </div>
  );
};

export default Image;
