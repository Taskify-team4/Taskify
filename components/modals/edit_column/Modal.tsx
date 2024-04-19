import React from 'react';
import * as S from '@components/modals/edit_column/Modal.style';
import Button from '@components/buttons/Button';
import ModalInput from '@components/inputs/modalInput/ModalInput';
import { ModalBaseProps } from '@components/modals/Modal.type';
import { deleteColumn } from '@pages/dashboard/api';

type TEditColumnModalProps = ModalBaseProps & {
  columnid: number;
};

function EditColumnModal({ close, columnid }: TEditColumnModalProps) {
  const trigger = () => {
    return close && close();
  };

  const fetchDeleteColumn = async () => {
    const res = await deleteColumn(columnid);
    if (res.ok) {
      window.location.reload();
    }
  };

  const handleDeleteButton = () => {
    fetchDeleteColumn();
  };

  return (
    <S.ModalContainer>
      <S.ModalTitle>컬럼 관리</S.ModalTitle>
      <ModalInput id="dashboardName" type="text" placeholder="변경할 이름을 입력해주세요.">
        이름
      </ModalInput>

      <S.EditButtonsContainer>
        <S.DeleteButtonWrapper>
          <S.DeleteColumnButton onClick={handleDeleteButton}>삭제하기</S.DeleteColumnButton>
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
