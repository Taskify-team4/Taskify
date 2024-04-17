import React from 'react';
import * as S from '@components/modals/edit_column/Modal.style';
import Button from '@components/buttons/Button';
import ModalInput from '@components/inputs/modalInput/ModalInput';
import { ModalBaseProps } from '@components/modals/Modal.type';

function EditColumnModal({ close }: ModalBaseProps) {
  const trigger = () => {
    return close && close();
  };

  return (
    <S.ModalContainer>
      <S.ModalTitle>컬럼 관리</S.ModalTitle>
      <ModalInput id="dashboardName" type="text" placeholder="변경할 이름을 입력해주세요.">
        이름
      </ModalInput>

      <S.EditButtonsContainer>
        <S.DeleteButtonWrapper>
          <S.DeleteColumnButton>삭제하기</S.DeleteColumnButton>
        </S.DeleteButtonWrapper>

        <S.ModalButtons>
          <Button.ModalReject onClick={trigger}>취소</Button.ModalReject>
          <Button.ModalConfirm onClick={trigger}>변경</Button.ModalConfirm>
        </S.ModalButtons>
      </S.EditButtonsContainer>
    </S.ModalContainer>
  );
}

export default EditColumnModal;
