import * as S from '@pages/mydashboard/Mydashboard.style';
import Sidemenu from '@components/sidemenu/Sidemenu';
import DashBoardHeader from '@components/headers/DashBoardHeader';
import MyDashboardList from '@components/pages/mydashboard/MyDashboardList';
import InvitedDashTable from '@components/table/invitedDash/InvitedDashTable';
import { useMyData } from '@contexts/myDataContext';

function Mydashboard() {
  const { myData } = useMyData();

  return (
    <S.MyDashboardContainer>
      <Sidemenu />
      <S.MyDashBoardLayout>
        <DashBoardHeader
          mydata={{
            id: myData.userId,
            nickname: myData.nickname,
            email: myData.email || '',
          }}
        />
        <S.MyDashboardContent>
          <MyDashboardList />
          <InvitedDashTable />
        </S.MyDashboardContent>
      </S.MyDashBoardLayout>
    </S.MyDashboardContainer>
  );
}

export default Mydashboard;
