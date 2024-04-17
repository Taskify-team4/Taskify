import Button from '@components/buttons/Button';
import React from 'react';
import styled from 'styled-components';
import { ModalBaseProps } from '@components/modals/Modal.type';

const TestModalContainer = styled.div`
  border: 1px solid red;
`;

function TestModal({ close }: ModalBaseProps) {
  const trigger = () => {
    return close && close();
  };

  return (
    <TestModalContainer>
      <div>테스트 모달</div>
      <Button.ModalConfirm onClick={trigger}>닫기</Button.ModalConfirm>
    </TestModalContainer>
  );
}
export default TestModal;
