import React, { useState } from 'react';
import * as S from './Modal.style';
import ColorPalette from '@components/chips/ColorPalette';
import Button from '@components/buttons/Button';
import ModalInput from '@components/inputs/modalInput/ModalInput';
import { ModalBaseProps } from '@components/modals/Modal.type';
import { useDashContext } from '@contexts/dashContext';
import { postAddDashboard } from '@utils/api';

function NewDashBoardModal({ close }: ModalBaseProps) {
  const trigger = () => {
    return close && close();
  };
  const { fetchMyDashboardsAll } = useDashContext();
  const [selectedColor, setSelectedColor] = useState('#760dde');

  const handleCreateClick = async () => {
    let inputValue = (document.getElementById('dashboardName') as HTMLInputElement).value;
    try {
      if (inputValue === '') {
        throw Error;
      }
      const res = await postAddDashboard(inputValue, selectedColor);
      if (res?.status) {
        trigger();
        fetchMyDashboardsAll();
      }
    } catch (error) {
      alert('대시보드 이름을 입력해주세요');
    }
  };
  return (
    <S.ModalContainer>
      <S.ModalTitle>새로운 대시보드</S.ModalTitle>
      <ModalInput id="dashboardName" type="text" placeholder="대시보드 이름을 입력해주세요.">
        대시보드 이름
      </ModalInput>
      <ColorPalette
        size={'large'}
        initialColor="#760dde"
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <S.ModalButtons>
        <Button.ModalReject onClick={trigger}>취소</Button.ModalReject>
        <Button.ModalConfirm onClick={handleCreateClick}>생성</Button.ModalConfirm>
      </S.ModalButtons>
    </S.ModalContainer>
  );
}

export default NewDashBoardModal;
