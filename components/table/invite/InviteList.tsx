import React from 'react';
import * as S from '@components/table/TableList.style';
import Button from '@components/buttons/Button';
import { InvitedDashListProps } from '@components/table/Table.type';
import ModalBase from '@components/modals/ModalBase';
import Modal from '@components/modals/Modal';
import ConfirmModal from '@components/modals/edit_dashboard/ConfirmModal';
import Empty from '@components/table/invite/Empty';

function InviteList({ data, buttonText, onCancelInviteClick }: InvitedDashListProps) {
  return (
    <>
      {data.length === 0 ? (
        <Empty isMyDashboard={false}>아직 초대한 멤버가 없어요</Empty>
      ) : (
        data.map((item) => (
          <S.TableList key={item.id}>
            <S.ListData>{item.invitee.email}</S.ListData>
            {buttonText && (
              <Modal
                content={
                  <ModalBase>
                    <ConfirmModal
                      text={'정말 초대를 취소하시겠습니까?'}
                      onConfirmClick={() => onCancelInviteClick && onCancelInviteClick(item.id)}
                    />
                  </ModalBase>
                }
              >
                <Button.Delete>{buttonText}</Button.Delete>
              </Modal>
            )}
          </S.TableList>
        ))
      )}
    </>
  );
}

export default InviteList;
