import * as S from '@pages/mydashboard/Mydashboard.style';
import Sidemenu from '@components/sidemenu/Sidemenu';
import DashBoardHeader from '@components/headers/DashBoardHeader';
import MyDashboardList from '@components/pages/mydashboard/MyDashboardList';
import InvitedDashTable from '@components/table/invitedDash/InvitedDashTable';
import { getInvitations } from './api';
import React, { useEffect, useState } from 'react';
import { TInvitation } from '@components/table/Table.type';
import { useDashContext } from '@contexts/dashContext';
import { useMyData } from '@contexts/myDataContext';

function Mydashboard() {
  const { fetchDashboards } = useDashContext();
  const { myData } = useMyData();

  const [myInvitation, setMyInvitation] = useState<TInvitation[]>([]);

  const fetchMyInvitation = async () => {
    const res = await getInvitations();
    setMyInvitation(res);
  };

  useEffect(() => {
    fetchMyInvitation();

    fetchDashboards();
  }, []);

  return (
    <S.MyDashboardContainer>
      <Sidemenu />
      <S.MyDashBoardLayout>
        <DashBoardHeader
          title={'내 대시보드'}
          mydata={{
            id: myData.userId,
            nickname: myData.nickname,
            email: myData.email || '',
          }}
          userList={[]}
        />
        <S.MyDashboardContent>
          <MyDashboardList />
          <InvitedDashTable invitations={myInvitation} />
        </S.MyDashboardContent>
      </S.MyDashBoardLayout>
    </S.MyDashboardContainer>
  );
}

export default Mydashboard;
