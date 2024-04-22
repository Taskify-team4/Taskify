import * as S from '@pages/mydashboard/Mydashboard.style';
import Sidemenu from '@components/sidemenu/Sidemenu';
import DashBoardHeader from '@components/headers/DashBoardHeader';
import MyDashboardList from '@components/pages/mydashboard/MyDashboardList';
import InvitedDashTable from '@components/table/invitedDash/InvitedDashTable';

// test
import { testDashBoards } from './test';
import { getInvitations, getMyDashboards, getMyDashboardsByPagination, getMyInfo } from './api';
import { useEffect, useState } from 'react';
import { TDashboards } from '@pages/dashboard/Dashboard.type';
import { TInvitation } from '@components/table/Table.type';
import { DashBoardPros, User } from '@components/headers/Header.type';

export const testHeaderData: DashBoardPros = {
  title: '내 대시보드',
  mydata: { id: 10, nickname: '홍성욱', email: 'test123@test.com' },
  userList: [],
};

type TDashboardsByPagination = TDashboards & { cursorId: number; totalCount: number };
function Mydashboard() {
  const [myInfo, setMyInfo] = useState<User>();
  const [myDashboards, setMyDashboards] = useState<TDashboards>([]);
  const [myDashboardsByPagination, setMyDashboardsByPagination] = useState<TDashboardsByPagination>();
  const [myDashboardPage, setMyDashboardPage] = useState(1);
  const [myInvitation, setMyInvitation] = useState<TInvitation[]>([]);

  const fetchMyInfo = async () => {
    const res = await getMyInfo();
    setMyInfo(res);
  };
  const fetchMyDashboards = async () => {
    const res = await getMyDashboards();
    setMyDashboards(res);
  };
  const fetchMyDashboardsByPagination = async () => {
    const res = await getMyDashboardsByPagination(4);
    setMyDashboardsByPagination(res);
    setMyDashboardPage(Math.ceil(res.totalCount / 5));
  };
  const fetchMyInvitation = async () => {
    const res = await getInvitations();
    setMyInvitation(res);
  };

  useEffect(() => {
    fetchMyInfo();
    fetchMyDashboards();
    fetchMyDashboardsByPagination();
    fetchMyInvitation();
    console.log(myInfo);
  }, []);

  return (
    <S.MyDashboardContainer>
      <Sidemenu dashboards={myDashboards} />
      <S.MyDashBoardLayout>
        <DashBoardHeader title={'내 대시보드'} mydata={myInfo} userList={[]} />
        <S.MyDashboardContent>
          <MyDashboardList dashboards={myDashboards} />
          <InvitedDashTable invitations={myInvitation} />
        </S.MyDashboardContent>
      </S.MyDashBoardLayout>
    </S.MyDashboardContainer>
  );
}

export default Mydashboard;
