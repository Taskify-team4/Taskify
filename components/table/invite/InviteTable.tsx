import React from 'react';
import * as S from '@components/table/Table.style';
import TableHeader from '@components/table/TableHeader';
import TableLists from '@components/table/TableList';
import InviteList from '@components/table/invite/InviteList';
import { User } from '@utils/testData';

function InviteTable({ users, onInviteClick, onChange }: { users: User[]; onInviteClick?: any; onChange?: any }) {
  return (
    <S.TableContainer>
      <TableHeader title="초대 내역" isInvite isPagenation onInviteClick={onInviteClick} onChange={onChange} />
      <TableLists title="이메일">
        <InviteList data={users} buttonText="취소" />
      </TableLists>
    </S.TableContainer>
  );
}

export default InviteTable;
