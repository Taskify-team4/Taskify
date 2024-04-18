import React from 'react';
import * as S from '@components/modals/new_dashboard/Modal.style';
import Button from '@components/buttons/Button';
import ModalInput from '@components/inputs/modalInput/ModalInput';
import { ModalBaseProps } from '@components/modals/Modal.type';

function NewColumnModal({ close }: ModalBaseProps) {
  const trigger = () => {
    return close && close();
  };

  return (
    <S.ModalContainer>
      <S.ModalTitle>새 컬럼 생성</S.ModalTitle>
      <ModalInput id="dashboardName" type="text" placeholder="컬럼 이름을 입력해주세요.">
        이름
      </ModalInput>
      <S.ModalButtons>
        <Button.ModalReject onClick={trigger}>취소</Button.ModalReject>
        <Button.ModalConfirm onClick={trigger}>생성</Button.ModalConfirm>
      </S.ModalButtons>
    </S.ModalContainer>
  );
}

export default NewColumnModal;
