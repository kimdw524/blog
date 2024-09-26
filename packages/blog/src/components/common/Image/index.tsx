import { useRef, useState } from 'react';

import useIsInViewport from '@/hooks/useIsInViewport';

import { mergeClass } from '@/utils/mergeClass';

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

  const containerRef = useRef<HTMLDivElement>(null);

  const { isExposed } = useIsInViewport(containerRef);

  return (
    <div
      ref={containerRef}
      className={mergeClass(s.container, className)}
      style={{ width, height }}
    >
      {isExposed && (
        <>
          <img
            src={src}
            alt={alt}
            className={s.image}
            onLoad={() => setState('success')}
            onError={() => setState('error')}
          />
          <Loading done={state === 'success'} />
        </>
      )}
    </div>
  );
};

export default Image;
