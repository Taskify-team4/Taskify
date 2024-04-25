import * as S from '@pages/mydashboard/Mydashboard.style';
import Sidemenu from '@components/sidemenu/Sidemenu';
import DashBoardHeader from '@components/headers/DashBoardHeader';
import MyDashboardList from '@components/pages/mydashboard/MyDashboardList';
import InvitedDashTable from '@components/table/invitedDash/InvitedDashTable';
import { postInvitation } from './api';
import { useMyData } from '@contexts/myDataContext';
import { useEffect } from 'react';

function Mydashboard() {
  const { myData } = useMyData();

  // const handletest = async () => {
  //   const res = await postInvitation(7078);
  //   console.log(res);
  // };

  // useEffect(() => {
  //   handletest();
  // }, []);

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
          <InvitedDashTable />
        </S.MyDashboardContent>
      </S.MyDashBoardLayout>
    </S.MyDashboardContainer>
  );
}

export default Mydashboard;
