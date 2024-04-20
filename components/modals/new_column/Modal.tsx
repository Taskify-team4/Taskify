import React, { useState } from 'react';
import * as S from '@components/modals/new_dashboard/Modal.style';
import Button from '@components/buttons/Button';
import ModalInput from '@components/inputs/modalInput/ModalInput';
import { ModalBaseProps } from '@components/modals/Modal.type';
import { TColumnForm } from '@pages/dashboard/Dashboard.type';
import { postNewColumn } from '@pages/dashboard/api';

type TNewColumnModalProps = ModalBaseProps & {
  dashboardId: number;
  fetchColumns: () => void;
};

function NewColumnModal({ close, dashboardId, fetchColumns }: TNewColumnModalProps) {
  const [columnData, setColumnData] = useState<TColumnForm>({ title: '', dashboardId: 0 });

  const trigger = () => {
    return close && close();
  };

  const handleChange = (title: string) => {
    setColumnData({
      title: title,
      dashboardId: dashboardId,
    });
  };

  const handleCreateColumnButtonClick = async () => {
    try {
      const res = await postNewColumn(columnData);
      if (res.id) {
        trigger();
        fetchColumns();
      }
    } catch (error) {
      console.error('컬럼 생성 실패', error);
    }
  };

  return (
    <S.ModalContainer>
      <S.ModalTitle>새 컬럼 생성</S.ModalTitle>
      <ModalInput id="dashboardName" type="text" placeholder="컬럼 이름을 입력해주세요." onChange={handleChange}>
        이름
      </ModalInput>
      <S.ModalButtons>
        <Button.ModalReject onClick={trigger}>취소</Button.ModalReject>
        <Button.ModalConfirm onClick={handleCreateColumnButtonClick}>생성</Button.ModalConfirm>
      </S.ModalButtons>
    </S.ModalContainer>
  );
}

export default NewColumnModal;
