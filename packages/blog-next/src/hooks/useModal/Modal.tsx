import React, { useEffect, useRef } from 'react';

import { ModalData } from '.';

type ModalProps = ModalData;

const Modal = ({
  children,
  state,
  animation,
  onFadeOutEnd,
}: Required<ModalProps>) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current) {
      return;
    }

    if (state === 'ACTIVE') {
      wrapperRef.current.className = animation.base;

      requestAnimationFrame(() =>
        wrapperRef.current?.classList.add(animation.enter)
      );
      return;
    }

    wrapperRef.current.className = `${animation.base} ${animation.exit}`;
  }, [state, animation, wrapperRef]);

  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (e.target !== wrapperRef.current) {
      return;
    }

    if (state === 'FADEOUT' && onFadeOutEnd) {
      onFadeOutEnd();
    }
  };

  const handleClose = (e: React.MouseEvent) => {
    if (e.target !== wrapperRef.current || state === 'FADEOUT') {
      return;
    }

    window.history.back();
  };

  return (
    <div
      ref={wrapperRef}
      onTransitionEnd={handleTransitionEnd}
      onClick={handleClose}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

export default Modal;
