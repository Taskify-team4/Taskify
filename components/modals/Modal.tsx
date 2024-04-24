import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { ModalProps, PortalProps } from './Modal.type';
import usePreventScroll from '@hooks/usePreventScroll';

export const BackdropContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  color: var(--black300);
  font-size: 30px;
  padding: 28px;
`;

function Portal({ isOpen, children }: PortalProps) {
  const [portal, setPortal] = useState<HTMLElement | null>();

  useEffect(() => {
    if (document) {
      const portalElem = document.getElementById('portal');
      setPortal(portalElem);
    }
  }, []);

  if (!isOpen) {
    return null;
  }
  return createPortal(children, portal as HTMLElement);
}

function Modal({ children, content, isConfirm = false, initialOpen = false }: ModalProps) {
  const [open, setOpen] = useState<boolean>(initialOpen);

  const modalHandler = () => {
    setOpen((prev) => !prev);
  };

  const Content = () => {
    usePreventScroll();
    return React.cloneElement(content, { close: modalHandler });
  };

  return (
    <div>
      <div onClick={modalHandler}>{children}</div>
      <Portal isOpen={open}>
        <BackdropContainer
          onClick={() => {
            !isConfirm && modalHandler();
          }}
        />
        <Content />
      </Portal>
    </div>
  );
}

export default Modal;
