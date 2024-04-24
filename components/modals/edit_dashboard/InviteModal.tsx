import React, { useState } from 'react';
import * as S from '@components/modals/new_dashboard/Modal.style';
import Button from '@components/buttons/Button';
import { ModalBaseProps } from '@components/modals/Modal.type';
import ModalInput from '@components/inputs/modalInput/ModalInput';

export type InviteModalProps = ModalBaseProps & {
  onInviteClick?: (inviteEmail: string) => void;
};

function InviteModal({ close, onInviteClick }: InviteModalProps) {
  const trigger = () => {
    return close && close();
  };

  const [inviteEmail, setInviteEmail] = useState<string>();

  return (
    <S.ModalContainer>
      <S.ModalTitle>초대하기</S.ModalTitle>
      <ModalInput id="email" type="text" placeholder="이메일을 입력해주세요." onChange={setInviteEmail}>
        이메일
      </ModalInput>
      <S.ModalButtons>
        <Button.ModalReject onClick={trigger}>취소</Button.ModalReject>
        <Button.ModalConfirm
          onClick={() => {
            if (onInviteClick && inviteEmail) {
              onInviteClick(inviteEmail);
            }
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
