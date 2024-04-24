import React from 'react';
import * as S from '@components/table/Table.style';
import TableHeader from '@components/table/TableHeader';
import TableLists from '@components/table/TableList';
import InvitedDashList from '@components/table/invitedDash/InvitedDashList';
import SearchBar from '@components/table/invitedDash/SearchBar';
import Image from 'next/image';
import EmptyImg from '@public/icons/no_invite.svg';
import { TInvitation } from '@components/table/Table.type';

type TInvitedDashTableProps = { invitations: TInvitation[] };
function InvitedDashTable({ invitations }: TInvitedDashTableProps) {
  console.log(invitations);
  return (
    <S.TableContainer $isInvitedDash>
      <TableHeader title="초대받은 대시보드" />
      {invitations !== undefined ? <SearchBar /> : <></>}
      <S.ListsContainer>
        <TableLists isInvitedDash>
          {invitations !== undefined ? (
            <InvitedDashList data={invitations} />
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
