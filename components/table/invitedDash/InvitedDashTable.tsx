import React from 'react';
import * as S from '@components/table/Table.style';
import TableHeader from '@components/table/TableHeader';
import TableLists from '@components/table/TableList';
import { INVITATION_LIST } from '@utils/testData';
import InvitedDashList from '@components/table/invitedDash/InvitedDashList';
import SearchBar from '@components/table/invitedDash/SearchBar';

function InvitedDashTable() {
  return (
    <S.TableContainer $isInvitedDash>
      <TableHeader title="초대받은 대시보드" />
      <SearchBar />
      <S.ListsContainer>
        <TableLists isInvitedDash>
          <InvitedDashList data={INVITATION_LIST} />
        </TableLists>
      </S.ListsContainer>
    </S.TableContainer>
  );
}

export default InvitedDashTable;
