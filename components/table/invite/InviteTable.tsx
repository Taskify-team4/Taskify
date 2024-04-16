import React from 'react';
import * as S from '@components/table/Table.style';
import TableHeader from '../TableHeader';
import TableLists from '../TableList';
import { USER_LIST } from '@utils/testData';
import InviteList from './InviteList';

function InviteListTable() {
  return (
    <S.Container>
      <TableHeader title="초대 내역" isInvite isPagenation />

      <TableLists title="이메일">
        <InviteList data={USER_LIST} buttonText="취소" />
      </TableLists>
    </S.Container>
  );
}

export default InviteListTable;
