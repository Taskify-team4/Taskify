import React from 'react';
import Button from '@components/buttons/Button';
import * as S from '@components/table/TableHeader.style';
import { HeaderProps } from './Table.type';
import Modal from '@components/modals/Modal';
import ModalBase from '@components/modals/ModalBase';
import InviteModal from '@components/modals/invite/Modal';

function TableHeader({ title, isInvite, isPagenation, onInviteClick }: HeaderProps) {
  return (
    <S.TableHeaderContainer>
      <S.HeaderTitle>{title}</S.HeaderTitle>
      <S.HeaderButtons>
        {isPagenation && (
          <S.Pagenation>
            <S.CurrentPage>1 페이지 중 1</S.CurrentPage>
            <Button.PagenationLeft />
            <Button.PagenationRight />
          </S.Pagenation>
        )}
        {isInvite && (
          <S.InviteButtonWrapper>
            <Modal
              content={
                <ModalBase>
                  {/* 모달 content */}
                  <InviteModal onInviteClick={onInviteClick} />
                </ModalBase>
              }
            >
              <Button.AddInvite>초대하기</Button.AddInvite>
            </Modal>
          </S.InviteButtonWrapper>
        )}
      </S.HeaderButtons>
    </S.TableHeaderContainer>
  );
}

export default TableHeader;
