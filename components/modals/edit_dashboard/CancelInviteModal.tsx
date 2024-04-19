import React from 'react';
import * as S from '@components/modals/new_dashboard/Modal.style';
import Button from '@components/buttons/Button';
import { ModalBaseProps } from '@components/modals/Modal.type';

export type CancelModalProps = ModalBaseProps & {
  onCancelInviteClick?: any;
};

function CancelInviteModal({ close, onCancelInviteClick }: CancelModalProps) {
  const trigger = () => {
    return close && close();
  };

  return (
    <S.ModalContainer>
      <S.ModalTitle>정말 초대를 취소하시겠습니까?</S.ModalTitle>
      <S.ModalButtons>
        <Button.ModalReject onClick={trigger}>아니오</Button.ModalReject>
        <Button.ModalConfirm
          onClick={() => {
            onCancelInviteClick();
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
