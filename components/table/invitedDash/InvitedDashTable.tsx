import React, { useEffect, useState } from 'react';
import * as S from '@components/table/Table.style';
import TableHeader from '@components/table/TableHeader';
import TableLists from '@components/table/TableList';
import InvitedDashList from '@components/table/invitedDash/InvitedDashList';
import SearchBar from '@components/table/invitedDash/SearchBar';
import Image from 'next/image';
import EmptyImg from '@public/icons/no_invite.svg';
import { TInvitation } from '@components/table/Table.type';
import { getInvitations, reactDashboardInvites } from '@utils/api';

function InvitedDashTable() {
  const [myInvitation, setMyInvitation] = useState<TInvitation[]>([]);
  const [cursorId, setCursorId] = useState<number | undefined>(undefined);
  const fetchMyInvitation = async (cursorId?: number) => {
    const res = await getInvitations(cursorId);
    setMyInvitation(myInvitation.concat(res));
  };
  const reloadMyInvitation = async () => {
    const res = await getInvitations();
    setMyInvitation(res);
  };

  const handleConfirmClick = async (id: number) => {
    try {
      const res = await reactDashboardInvites(id, true);
      if (res?.status) {
        reloadMyInvitation();
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleRejectClick = async (id: number) => {
    try {
      const res = await reactDashboardInvites(id, false);
      if (res?.status) {
        reloadMyInvitation();
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMyInvitation(cursorId);
  }, [cursorId]);

  return (
    <S.TableContainer $isInvitedDash>
      <TableHeader title="초대받은 대시보드" />
      {myInvitation.length !== 0 ? <SearchBar /> : <></>}
      <S.ListsContainer>
        <TableLists isInvitedDash>
          {myInvitation.length !== 0 ? (
            <InvitedDashList
              data={myInvitation}
              IsObserverEnd={{ cursorId, setCursorId }}
              handleConfirmClick={handleConfirmClick}
              handleRejectClick={handleRejectClick}
            />
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
