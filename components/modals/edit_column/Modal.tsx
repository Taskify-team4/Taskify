import React, { useState } from 'react';
import * as S from '@components/modals/edit_column/Modal.style';
import Button from '@components/buttons/Button';
import ModalInput from '@components/inputs/modalInput/ModalInput';
import { ModalBaseProps } from '@components/modals/Modal.type';
import { useDashContext } from '@contexts/dashContext';
import { deleteColumn, updateColumnTitle } from '@utils/api';
import { TColumn } from '@pages/dashboard/Dashboard.type';

type TEditColumnModalProps = ModalBaseProps & {
  columnid: number;
  column: TColumn;
};

function EditColumnModal({ close, column }: TEditColumnModalProps) {
  const { fetchColumns } = useDashContext();
  const [columnTitle, setColumnTitle] = useState(column.title);
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
      const res = await updateColumnTitle(column.id, columnTitle);
      if (res.id) {
        trigger();
        fetchColumns();
      }
    } catch (error) {
      console.error('컬럼 이름 수정 실패', error);
    }
  };

  const fetchDeleteColumn = async () => {
    const res = await deleteColumn(column.id);
    console.log(res);
    if (res.status === 204) {
      trigger();
      fetchColumns();
    }
  };

  return (
    <S.ModalContainer>
      <S.ModalTitle>컬럼 관리</S.ModalTitle>
      <ModalInput
        id="dashboardName"
        type="text"
        placeholder="변경할 이름을 입력해주세요."
        onChange={handleChange}
        defaultValue={columnTitle}
      >
        이름
      </ModalInput>

      <S.EditButtonsContainer>
        <S.DeleteButtonWrapper>
          <S.DeleteColumnButton onClick={fetchDeleteColumn}>삭제하기</S.DeleteColumnButton>
        </S.DeleteButtonWrapper>

        <S.ModalButtons>
          <Button.ModalReject onClick={trigger}>취소</Button.ModalReject>
          <Button.ModalConfirm onClick={fetchPostChangeColumnTitle}>변경</Button.ModalConfirm>
        </S.ModalButtons>
      </S.EditButtonsContainer>
    </S.ModalContainer>
  );
}

export default EditColumnModal;
