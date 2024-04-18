import React from 'react';
import * as S from '@components/table/TableList.style';
import Button from '@components/buttons/Button';
import { InvitedDashListProps } from '@components/table/Table.type';

function InvitedDashList({ data }: InvitedDashListProps) {
  return (
    <>
      <S.InvitedDashListTitleContainer>
        <S.ListData>
          <span>이름</span>
          <span>초대자</span>
          <span>수락여부</span>
        </S.ListData>
      </S.InvitedDashListTitleContainer>

      {data.map((item) => (
        <S.TableList key={item.id}>
          <S.ListData $isInvitedDash>
            <S.DashTitle>{item.dashboard.title}</S.DashTitle>
            <S.InviterName>{item.inviter.nickname}</S.InviterName>
            <span>
              <S.InvitedDashButtonsContainer>
                <Button.Confirm>수락</Button.Confirm>
                <Button.Reject>거절</Button.Reject>
              </S.InvitedDashButtonsContainer>
            </span>
          </S.ListData>
        </S.TableList>
      ))}
    </>
  );
}

export default InvitedDashList;