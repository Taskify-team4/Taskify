import { ReactNode } from 'react';

export type ModalBaseProps = {
  children?: ReactNode;
  close?: () => void;
};

export type PortalProps = {
  isOpen: boolean;
  children: ReactNode;
};

export type ModalProps = {
  children: ReactNode;
  content: JSX.Element;
  isConfirm?: boolean;
  initialOpen?: boolean;
};
