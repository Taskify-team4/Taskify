import React from 'react';
import * as S from './Modal.style';
import ColorPalette from '@components/chips/ColorPalette';
import Button from '@components/buttons/Button';
import ModalInput from '@components/inputs/modalInput/ModalInput';
import { ModalBaseProps } from '@components/modals/Modal.type';

function NewDashBoardModal({ close }: ModalBaseProps) {
  const trigger = () => {
    return close && close();
  };

  return (
    <S.ModalContainer>
      <S.ModalTitle>새로운 대시보드</S.ModalTitle>
      <ModalInput id="dashboardName" type="text" placeholder="대시보드 이름을 입력해주세요.">
        대시보드 이름
      </ModalInput>
      <ColorPalette size={'large'} />
      <S.ModalButtons>
        <Button.ModalReject onClick={trigger}>취소</Button.ModalReject>
        <Button.ModalConfirm onClick={trigger}>생성</Button.ModalConfirm>
      </S.ModalButtons>
    </S.ModalContainer>
  );
}

export default NewDashBoardModal;
