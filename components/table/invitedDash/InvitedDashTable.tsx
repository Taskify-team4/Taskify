import React from 'react';
import * as S from '@components/table/Table.style';
import TableHeader from '@components/table/TableHeader';
import TableLists from '@components/table/TableList';
import { INVITATION_LIST } from '@utils/testData';
import InvitedDashList from '@components/table/invitedDash/InvitedDashList';
import SearchBar from '@components/table/invitedDash/SearchBar';
import Image from 'next/image';
import EmptyImg from '@public/icons/no_invite.svg';

function InvitedDashTable() {
  return (
    <S.TableContainer $isInvitedDash>
      <TableHeader title="초대받은 대시보드" />
      {INVITATION_LIST ? <SearchBar /> : <></>}
      <S.ListsContainer>
        <TableLists isInvitedDash>
          {INVITATION_LIST ? (
            // <InvitedDashList data={INVITATION_LIST} />
            <></>
          ) : (
            <S.EmptyInvitation>
              <Image src={EmptyImg} alt="초대받은 대시보드가 비어있음" width={100} height={100} />
              <S.EmptyText>아직 초대받은 대시보드가 없어요</S.EmptyText>
            </S.EmptyInvitation>
          )}
        </TableLists>
      </S.ListsContainer>
    </S.TableContainer>
  );
}

export default InvitedDashTable;
