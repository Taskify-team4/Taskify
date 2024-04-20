import React from 'react';
import Button from '@components/buttons/Button';
import * as S from '@components/table/TableHeader.style';
import { HeaderProps } from './Table.type';
import Modal from '@components/modals/Modal';
import ModalBase from '@components/modals/ModalBase';
import InviteModal from '@components/modals/edit_dashboard/InviteModal';

function TableHeader({
  title,
  isInvite,
  isPagenation,
  onInviteClick,
  onNextClick,
  onPreviousClick,
  pageInfo,
}: HeaderProps) {
  return (
    <S.TableHeaderContainer>
      <S.HeaderTitle>{title}</S.HeaderTitle>
      <S.HeaderButtons>
        {isPagenation && (
          <S.Pagenation>
            <S.CurrentPage>
              {pageInfo?.limit} 페이지 중 {pageInfo?.current}
            </S.CurrentPage>
            <Button.PagenationLeft onClick={onPreviousClick} />
            <Button.PagenationRight onClick={onNextClick} />
          </S.Pagenation>
        )}
        {isInvite && (
          <S.InviteButtonWrapper>
            <Modal
              content={
                <ModalBase>
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
