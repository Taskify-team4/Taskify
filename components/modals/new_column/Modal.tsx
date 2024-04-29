import React, { useState } from 'react';
import * as S from '@components/modals/new_dashboard/Modal.style';
import Button from '@components/buttons/Button';
import ModalInput from '@components/inputs/modalInput/ModalInput';
import { ModalBaseProps } from '@components/modals/Modal.type';
import { TColumnForm } from '@pages/dashboard/Dashboard.type';
import { useDashContext } from '@contexts/dashContext';
import { postNewColumn } from '@utils/api';

function NewColumnModal({ close }: ModalBaseProps) {
  const { dashboardId, fetchColumns } = useDashContext();
  const [columnData, setColumnData] = useState<TColumnForm>({ title: '', dashboardId: Number(dashboardId) });
  const [isDiabled, setIsDisabled] = useState(true);

  const trigger = () => {
    return close && close();
  };

  const handleChange = (title: string) => {
    setColumnData((prevState) => ({
      ...prevState,
      title: title,
    }));
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
      <ModalInput
        id="dashboardName"
        type="text"
        placeholder="컬럼 이름을 입력해주세요."
        onChange={handleChange}
        setIsDisabled={setIsDisabled}
      >
        이름
      </ModalInput>
      <S.ModalButtons>
        <Button.ModalReject onClick={trigger}>취소</Button.ModalReject>
        <Button.ModalConfirm onClick={handleCreateColumnButtonClick} disabled={isDiabled}>
          생성
        </Button.ModalConfirm>
      </S.ModalButtons>
    </S.ModalContainer>
  );
}

export default NewColumnModal;
