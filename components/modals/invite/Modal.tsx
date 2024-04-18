import React from 'react';
import * as S from '@components/modals/new_dashboard/Modal.style';
import Button from '@components/buttons/Button';
import ModalInput from '@components/inputs/modalInput/ModalInput';
import { ModalBaseProps } from '@components/modals/Modal.type';

export type InviteModalProps = ModalBaseProps & {
  onInviteClick: any;
  onChange: any;
};

function InviteModal({ close, onInviteClick, onChange }: InviteModalProps) {
  const trigger = () => {
    return close && close();
  };

  return (
    <S.ModalContainer>
      <S.ModalTitle>초대하기</S.ModalTitle>
      <ModalInput id="email" type="text" placeholder="이메일을 입력해주세요." onChange={onChange}>
        이메일
      </ModalInput>
      <S.ModalButtons>
        <Button.ModalReject onClick={trigger}>취소</Button.ModalReject>
        <Button.ModalConfirm
          onClick={() => {
            onInviteClick();
            trigger();
          }}
        >
          초대
        </Button.ModalConfirm>
      </S.ModalButtons>
    </S.ModalContainer>
  );
}

export default InviteModal;
