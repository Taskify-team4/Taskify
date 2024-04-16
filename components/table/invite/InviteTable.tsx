import React from 'react';
import * as S from '@components/table/Table.style';
import TableHeader from '@components/table/TableHeader';
import TableLists from '@components/table/TableList';
import InviteList from '@components/table/invite/InviteList';
import { USER_LIST } from '@utils/testData';

function InviteTable() {
  return (
    <S.TableContainer>
      <TableHeader title="초대 내역" isInvite isPagenation />
      <TableLists title="이메일">
        <InviteList data={USER_LIST} buttonText="취소" />
      </TableLists>
    </S.TableContainer>
  );
}

export default InviteTable;
