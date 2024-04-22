import React, { useState } from 'react';
import * as S from '@components/modals/edit_column/Modal.style';
import Button from '@components/buttons/Button';
import ModalInput from '@components/inputs/modalInput/ModalInput';
import { ModalBaseProps } from '@components/modals/Modal.type';
import { deleteColumn, postChangeColumnTitle } from '@pages/dashboard/api';
import { useDashContext } from '@contexts/dashContext';

type TEditColumnModalProps = ModalBaseProps & {
  columnid: number;
};

function EditColumnModal({ close, columnid }: TEditColumnModalProps) {
  const { fetchColumns } = useDashContext();
  const [columnTitle, setColumnTitle] = useState({ title: '' });
  const trigger = () => {
    return close && close();
  };

  const handleChange = (title: string) => {
    setColumnTitle({
      title: title,
    });
  };

  const fetchPostChangeColumnTitle = async () => {
    try {
      const res = await postChangeColumnTitle(columnid, columnTitle);
      if (res.ok) {
        fetchColumns();
        console.log('이름 변경!');
        trigger();
      }
    } catch (error) {
      console.error('컬럼 이름 수정 실패', error);
    }
  };

  const fetchDeleteColumn = async () => {
    const res = await deleteColumn(columnid);
    if (res.ok) {
      trigger();
      fetchColumns();
    }
  };

  const handleChangeButtonClick = () => {
    fetchPostChangeColumnTitle();
  };

  const handleDeleteButtonClick = () => {
    fetchDeleteColumn();
  };

  return (
    <S.ModalContainer>
      <S.ModalTitle>컬럼 관리</S.ModalTitle>
      <ModalInput id="dashboardName" type="text" placeholder="변경할 이름을 입력해주세요." onChange={handleChange}>
        이름
      </ModalInput>

      <S.EditButtonsContainer>
        <S.DeleteButtonWrapper>
          <S.DeleteColumnButton onClick={handleDeleteButtonClick}>삭제하기</S.DeleteColumnButton>
        </S.DeleteButtonWrapper>

        <S.ModalButtons>
          <Button.ModalReject onClick={trigger}>취소</Button.ModalReject>
          <Button.ModalConfirm onClick={handleChangeButtonClick}>변경</Button.ModalConfirm>
        </S.ModalButtons>
      </S.EditButtonsContainer>
    </S.ModalContainer>
  );
}

export default EditColumnModal;
