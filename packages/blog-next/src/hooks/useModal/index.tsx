import {
  createContext,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react';

import ModalList, { ModalListRef } from './ModalList';

type ModalState = 'ACTIVE' | 'FADEOUT';

export interface ModalAmationClassNames {
  base: string;
  enter: string;
  exit: string;
}

export interface ModalPushProps {
  children: ReactElement;
  animation?: ModalAmationClassNames;
  onClose?: () => void;
}

export interface ModalData extends ModalPushProps {
  id: number;
  state: ModalState;
  onFadeOutEnd?: () => void;
}

interface ModalContextType {
  push: (data: ModalPushProps) => void;
  pop: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

interface ModalProviderProps {
  children: ReactNode;
  defaultAnimation: ModalAmationClassNames;
}

export const ModalProvider = ({
  children,
  defaultAnimation,
}: ModalProviderProps) => {
  const modalListRef = useRef<ModalListRef>(null);

  const push = useCallback(
    (data: ModalPushProps) => {
      if (!modalListRef.current) {
        return;
      }

      modalListRef.current.push({
        ...data,
        animation: data.animation ?? defaultAnimation,
      });
    },
    [modalListRef]
  );

  const pop = useCallback(() => {
    if (!modalListRef.current) {
      return;
    }

    modalListRef.current.pop();
  }, [modalListRef]);

  const contextValue = useMemo(() => {
    return { push, pop };
  }, [push, pop]);

  useEffect(() => {
    const handlePopState = () => {
      pop();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [pop]);

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      <ModalList ref={modalListRef} />
    </ModalContext.Provider>
  );
};

const useModal = () => {
  const modalContext = useContext(ModalContext);

  const pop = () => {
    window.history.back();
  };

  const push = (props: ModalPushProps) => {
    if (!modalContext) {
      return;
    }

    modalContext.push(props);
  };

  return { push, pop };
};

export default useModal;
