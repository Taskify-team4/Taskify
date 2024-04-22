import React from 'react';
import * as S from '@components/modals/new_dashboard/Modal.style';
import Button from '@components/buttons/Button';
import { ModalBaseProps } from '@components/modals/Modal.type';

export type ConfirmModalProps = ModalBaseProps & {
  text: string;
  onConfirmClick: () => void;
};

function ConfirmModal({ close, text, onConfirmClick }: ConfirmModalProps) {
  const trigger = () => {
    return close && close();
  };

  return (
    <S.ModalContainer>
      <S.ModalTitle>{text}</S.ModalTitle>
      <S.ModalButtons>
        <Button.ModalReject onClick={trigger}>아니오</Button.ModalReject>
        <Button.ModalConfirm
          onClick={() => {
            onConfirmClick();
            trigger();
          }}
        >
          네
        </Button.ModalConfirm>
      </S.ModalButtons>
    </S.ModalContainer>
  );
}

export default ConfirmModal;
