import React, { useEffect, useState } from 'react';
import { dashboard } from '@components/sidemenu/Sidemenu.type';
import Sidemenu from '@components/sidemenu/Sidemenu';
import * as S from '@pages/dashboard/[dashboardId]/edit.style';
import DashBoardHeader from '@components/headers/DashBoardHeader';
import MemberTable from '@components/table/member/MemberTable';
import leftarrowIcon from '@public/icons/left_arrow.svg';
import Image from 'next/image';
import EditName from '@components/pages/dashboardEdit/editName/EditName';
import size from '@constants/breakpointsSize';
import InviteTable from '@components/table/invite/InviteTable';
import { User } from '@utils/testData';
import {
  getDashboard,
  getDashboardInvites,
  getDashboardList,
  getDashboardMembers,
  getMyData,
  postDashboardInvites,
  updateDashboard,
} from '@utils/editDashboard/api';
import { DashBoardMember, DashBoardNameData } from '@utils/editDashboard/edit.type';
import { TColorCode } from '@components/chips/Chip.type';
import { useRouter } from 'next/router';

export async function getServerSideProps(context: any) {
  const dashboardId = context.query['dashboardId'];

  const dashboardData = await getDashboard(dashboardId);
  const invitees = await getDashboardInvites(dashboardId);
  const members = await getDashboardMembers(dashboardId);
  const myData = await getMyData();
  const dashboardList = await getDashboardList();

  return {
    props: {
      dashboardData,
      invitees,
      members,
      myData,
      dashboardList,
    },
  };
}

function Edit({
  dashboardData: initialDashboardData,
  invitees: initialInvitees,
  members,
  myData,
  dashboardList: initialDashboardList,
}: {
  dashboardData: DashBoardNameData;
  invitees: User[];
  members: DashBoardMember[];
  myData: DashBoardMember;
  dashboardList: dashboard[];
}) {
  const [windowWidth, setWindowWidth] = useState(1920);
  const [selectedColor, setSelectedColor] = useState<TColorCode>(initialDashboardData.color);
  const [dashboardList, setDashboardList] = useState(initialDashboardList);
  const [dashboardData, setDashboardData] = useState(initialDashboardData);
  const [dashboardName, setDashboardName] = useState(initialDashboardData.title);
  const [invitees, setInvitees] = useState(initialInvitees);
  const [inviteId, setInviteId] = useState('');
  const router = useRouter();
  const dashboardId = router.query['dashboardId'];

  const handleUpdateClick = async () => {
    if (dashboardId) {
      await updateDashboard(Number(dashboardId), dashboardName, selectedColor);
      const newDashboardList = await getDashboardList();
      const newDashboardData = await getDashboard(Number(dashboardId));

      setDashboardData(newDashboardData);
      setDashboardList(newDashboardList);
    }
  };
  console.log(inviteId);
  const handleInviteClick = async () => {
    await postDashboardInvites(Number(dashboardId), inviteId);
    const newInvitees = await getDashboardInvites(Number(dashboardId));
    setInvitees(newInvitees);
  };

  // 브라우저 넓이 받아오기
  useEffect(() => {
    const resizeHandler = () => {
      setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 500);
    };

    resizeHandler();

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <S.PageContainer>
      <div>
        <Sidemenu dashboards={dashboardList} />
      </div>
      <S.RightSection>
        <DashBoardHeader
          title={dashboardData.title}
          mydata={{
            id: myData.userId,
            nickname: myData.nickname,
            email: myData.email || '',
          }}
          userList={members}
          crown={true}
        />
        <S.PageContents>
          <S.GoBackButton>
            <Image src={leftarrowIcon.src} width={20} height={20} alt="돌아가기 버튼" /> 돌아가기
          </S.GoBackButton>
          <EditName
            isMobile={windowWidth <= size.tablet}
            title={dashboardData.title}
            color={dashboardData.color}
            onTileClick={setSelectedColor}
            onClick={handleUpdateClick}
            onChange={setDashboardName}
          />
          <MemberTable members={members} />
          <InviteTable users={invitees} onInviteClick={handleInviteClick} onChange={setInviteId} />
          <S.DeleteDashboardButton> 대시보드 삭제하기 </S.DeleteDashboardButton>
        </S.PageContents>
      </S.RightSection>
    </S.PageContainer>
  );
}

export default Edit;
