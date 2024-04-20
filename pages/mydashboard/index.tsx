import * as S from '@pages/mydashboard/Mydashboard.style';
import Sidemenu from '@components/sidemenu/Sidemenu';
import DashBoardHeader from '@components/headers/DashBoardHeader';
import MyDashboardList from '@components/pages/mydashboard/MyDashboardList';
import InvitedDashTable from '@components/table/invitedDash/InvitedDashTable';

// test
import { testDashBoards, testHeaderData } from './test';

function Mydashboard() {
  return (
    <S.MyDashboardContainer>
      <Sidemenu dashboards={testDashBoards} />
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
