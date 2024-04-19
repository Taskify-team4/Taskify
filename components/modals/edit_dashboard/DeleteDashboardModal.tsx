import React from 'react';
import * as S from '@components/modals/new_dashboard/Modal.style';
import Button from '@components/buttons/Button';
import { ModalBaseProps } from '@components/modals/Modal.type';

export type CancelModalProps = ModalBaseProps & {
  onDeleteClick?: any;
};

function CancelInviteModal({ close, onDeleteClick }: CancelModalProps) {
  const trigger = () => {
    return close && close();
  };

  return (
    <S.ModalContainer>
      <S.ModalTitle>정말 대시보드를 삭제하시겠습니까?</S.ModalTitle>
      <S.ModalButtons>
        <Button.ModalReject onClick={trigger}>아니오</Button.ModalReject>
        <Button.ModalConfirm
          onClick={() => {
            onDeleteClick();
            trigger();
          }}
        >
          네
        </Button.ModalConfirm>
      </S.ModalButtons>
    </S.ModalContainer>
  );
}

export default CancelInviteModal;
