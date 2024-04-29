import React, { useEffect, useState } from 'react';
import * as S from '@components/table/Table.style';
import TableHeader from '@components/table/TableHeader';
import TableLists from '@components/table/TableList';
import InvitedDashList from '@components/table/invitedDash/InvitedDashList';
import SearchBar from '@components/table/invitedDash/SearchBar';
import { TInvitation } from '@components/table/Table.type';
import { ChangeEvent } from 'react';
import { getInvitations, reactDashboardInvites } from '@utils/api';
import Empty from '@components/table/invite/Empty';
import { useDashContext } from '@contexts/dashContext';

export type ChangeHandler = (event: ChangeEvent<HTMLInputElement>) => void;

function InvitedDashTable() {
  const [myInvitation, setMyInvitation] = useState<TInvitation[]>([]);
  const [cursorId, setCursorId] = useState<number | undefined>(undefined);
  const { fetchMyDashboardsAll } = useDashContext();

  const fetchMyInvitation = async (cursorId?: number) => {
    const res = await getInvitations(cursorId);
    setMyInvitation(cursorId ? myInvitation.concat(res) : res);
  };
  const searchMyInvitation = async (title: string) => {
    setMyInvitation([]);
    if (title === '') {
      setCursorId(undefined);
      fetchMyInvitation();
    } else {
      const res = await getInvitations(undefined, title);
      setMyInvitation(res);
    }
  };

  const handleConfirmClick = async (id: number) => {
    try {
      const res = await reactDashboardInvites(id, true);
      if (res instanceof Error) {
        throw res;
      } else {
        fetchMyInvitation();
        fetchMyDashboardsAll();
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleRejectClick = async (id: number) => {
    try {
      const res = await reactDashboardInvites(id, false);
      if (res instanceof Error) {
        throw res;
      } else {
        fetchMyInvitation();
        fetchMyDashboardsAll();
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleSearchInvitation: ChangeHandler = async (event) => {
    searchMyInvitation(event.target.value);
  };

  useEffect(() => {
    fetchMyInvitation(cursorId);
  }, [cursorId]);

  return (
    <S.TableContainer $isInvitedDash>
      <TableHeader title="초대받은 대시보드" />
      <SearchBar onSearchInvitation={handleSearchInvitation} />

      <S.ListsContainer>
        <TableLists isInvitedDash>
          {myInvitation.length !== 0 ? (
            <InvitedDashList
              data={myInvitation}
              IsObserverEnd={{ cursorId, setCursorId }}
              onConfirmClick={handleConfirmClick}
              onRejectClick={handleRejectClick}
            />
          ) : (
            <Empty isMyDashboard={true}>아직 초대받은 대시보드가 없어요</Empty>
          )}
        </TableLists>
      </S.ListsContainer>
    </S.TableContainer>
  );
}

export default InvitedDashTable;
