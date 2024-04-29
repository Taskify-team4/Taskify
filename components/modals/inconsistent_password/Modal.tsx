import React from 'react';
import { ModalBaseProps } from '@components/modals/Modal.type';
import * as S from '@components/modals/inconsistent_password/Modal.style';

function PasswordModal({ close, errorMsg }: ModalBaseProps) {
  const trigger = () => {
    return close && close();
  };

  return (
    <S.ModalContainer>
      {errorMsg}
      <S.ModalConfirmButton children={'확인'} onClick={trigger} />
    </S.ModalContainer>
  );
}

export default PasswordModal;
