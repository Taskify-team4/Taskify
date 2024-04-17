import React from 'react';
import * as S from '@components/modals/inconsistent_password/Modal.style';

function Modal() {
  return (
    <S.ModalContainer>
      비밀번호가 일치하지 않습니다.
      <S.ModalConfirmButton children={'확인'} />
    </S.ModalContainer>
  );
}

export default Modal;
