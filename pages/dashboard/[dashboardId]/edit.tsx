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
import {
  deleteInvite,
  deleteMember,
  getDashboard,
  getDashboardInvites,
  getDashboardList,
  getDashboardMembers,
  getMyData,
  postDashboardInvites,
  updateDashboard,
} from '@utils/editDashboard/api';
import { DashBoardMember, DashBoardNameData, Invitations } from '@utils/editDashboard/edit.type';
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
  members: initialMembers,
  myData,
  dashboardList: initialDashboardList,
}: {
  dashboardData: DashBoardNameData;
  invitees: Invitations[];
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
  const [members, setMembers] = useState(initialMembers);
  const router = useRouter();
  const dashboardId = router.query['dashboardId']?.toString();

  const handleUpdateClick = async () => {
    if (dashboardId) {
      await updateDashboard(dashboardId, dashboardName, selectedColor);
      const newDashboardList = await getDashboardList();
      const newDashboardData = await getDashboard(dashboardId);

      setDashboardData(newDashboardData);
      setDashboardList(newDashboardList);
    }
  };

  const handleInviteClick = async (inviteId: string) => {
    if (dashboardId) {
      await postDashboardInvites(dashboardId, inviteId);
      const newInvitees = await getDashboardInvites(dashboardId);
      setInvitees(newInvitees);
    }
  };

  const handleCancelInviteClick = async (cancelId: number) => {
    if (dashboardId) {
      await deleteInvite(dashboardId, cancelId);

      const newInvitees = await getDashboardInvites(dashboardId);
      setInvitees(newInvitees);
    }
  };

  const handleDeleteMemberClick = async (deleteId: number) => {
    if (dashboardId) {
      await deleteMember(deleteId);
      const newMembers = await getDashboardMembers(dashboardId);
      setMembers(newMembers);
    }
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
          <MemberTable members={members} onDeleteClick={handleDeleteMemberClick} />
          <InviteTable
            users={invitees}
            onCancelInviteClick={handleCancelInviteClick}
            onInviteClick={handleInviteClick}
          />
          <S.DeleteDashboardButton> 대시보드 삭제하기 </S.DeleteDashboardButton>
        </S.PageContents>
      </S.RightSection>
    </S.PageContainer>
  );
}

export default Edit;
