import * as S from '@pages/mydashboard/Mydashboard.style';
import Sidemenu from '@components/sidemenu/Sidemenu';
import DashBoardHeader from '@components/headers/DashBoardHeader';
import MyDashboardList from '@components/pages/mydashboard/MyDashboardList';
import InvitedDashTable from '@components/table/invitedDash/InvitedDashTable';

// test
import { testDashBoards, testHeaderData } from './test';
import { getMyDashboards, getMyDashboardsByPagination } from './api';
import { useEffect, useState } from 'react';
import { TDashboards } from '@pages/dashboard/Dashboard.type';

type TDashboardsByPagination = TDashboards & { cursorId: number; totalCount: number };

function Mydashboard() {
  const [myDashboards, setMyDashboards] = useState<TDashboards>([]);
  const [myDashboardsByPagination, setMyDashboardsByPagination] = useState<TDashboardsByPagination>();

  const fetchMyDashboards = async () => {
    const res = await getMyDashboards();
    setMyDashboards(res);
    console.log(myDashboards);
  };
  const fetchMyDashboardsByPagination = async () => {
    const res = await getMyDashboardsByPagination(1);
    setMyDashboardsByPagination(res);
    console.log(myDashboardsByPagination);
  };

  useEffect(() => {
    //fetchMyDashboards();
  }, []);

  return (
    <S.MyDashboardContainer>
      <Sidemenu dashboards={myDashboards} />
      <S.MyDashBoardLayout>
        <DashBoardHeader {...testHeaderData} />
        <S.MyDashboardContent>
          <MyDashboardList />
          <InvitedDashTable />
        </S.MyDashboardContent>
      </S.MyDashBoardLayout>
    </S.MyDashboardContainer>
  );
}

export default Mydashboard;
