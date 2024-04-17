import React from 'react';
import { ModalConfirmButton, ModalContainer } from '@components/modals/inconsistent_password/Modal.style';

function Modal() {
  return (
    <ModalContainer>
      비밀번호가 일치하지 않습니다.
      <ModalConfirmButton children={'확인'} />
    </ModalContainer>
  );
}

export default Modal;
