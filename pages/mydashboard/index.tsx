import * as S from '@components/pages/mydashboard/Mydashboard.style';
import Sidemenu from '@components/sidemenu/Sidemenu';
import DashBoardHeader from '@components/headers/DashBoardHeader';
import MyDashboardList from '@components/pages/mydashboard/MyDashboardList';
import InvitedDashTable from '@components/table/invitedDash/InvitedDashTable';
import { MyDataProvider } from '@contexts/myDataContext';
import React from 'react';
import { DashProvider } from '@contexts/dashContext';
import { useRouter } from 'next/router';
import { Helmet } from 'react-helmet-async';

function Mydashboard() {
  const router = useRouter();
  const { dashboardId }: { dashboardId: number } = router.query as unknown as { dashboardId: number };

  return (
    <MyDataProvider>
      <DashProvider dashboardId={dashboardId}>
        <S.MyDashboardContainer>
          <Sidemenu />
          <S.MyDashBoardLayout>
            <DashBoardHeader title="내 대시보드" />
            <S.MyDashboardContent>
              <MyDashboardList />
              <InvitedDashTable />
            </S.MyDashboardContent>
          </S.MyDashBoardLayout>
        </S.MyDashboardContainer>
      </DashProvider>
    </MyDataProvider>
  );
}

export default Mydashboard;
