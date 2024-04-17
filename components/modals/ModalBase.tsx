import React, { Children, cloneElement, isValidElement, ReactElement } from 'react';
import styled from 'styled-components';
import { ModalBaseProps } from './Modal.type';

const ModalBaseContainer = styled.div`
  width: 80%;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  color: var(--black300);
  border-radius: 8px;
  font-size: 30px;
  padding: 28px;
`;

function ModalBase({ children, close }: ModalBaseProps) {
  return (
    <ModalBaseContainer>
      {children &&
        Children.map(children, (child) => {
          if (isValidElement(child)) {
            const childElement = child as ReactElement<{ close?: () => void }>;
            return cloneElement(childElement, { close });
          }
          return child;
        })}
    </ModalBaseContainer>
  );
}

export default ModalBase;
