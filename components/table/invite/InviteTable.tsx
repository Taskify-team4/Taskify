import React from 'react';
import * as S from '@components/table/Table.style';
import TableHeader from '@components/table/TableHeader';
import TableLists from '@components/table/TableList';
import InviteList from '@components/table/invite/InviteList';
import { Invitations } from '@utils/editDashboard/edit.type';

function InviteTable({
  users,
  onInviteClick,
  onCancelInviteClick,
  onNextClick,
  onPreviousClick,
  pageInfo,
}: {
  users: Invitations[];
  onInviteClick?: any;
  onCancelInviteClick?: any;
  onNextClick?: any;
  onPreviousClick?: any;
  pageInfo?: { current: number; limit: number };
}) {
  return (
    <S.TableContainer>
      <TableHeader
        title="초대 내역"
        isInvite
        isPagenation
        onInviteClick={onInviteClick}
        onNextClick={onNextClick}
        onPreviousClick={onPreviousClick}
        pageInfo={pageInfo}
      />
      <TableLists title="이메일">
        <InviteList data={users} buttonText="취소" onCancelInviteClick={onCancelInviteClick} />
      </TableLists>
    </S.TableContainer>
  );
}

export default InviteTable;
