import React, { useEffect, useState } from 'react';
import Sidemenu from '@components/sidemenu/Sidemenu';
import * as S from '@pages/dashboard/[dashboardId]/edit.style';
import DashBoardHeader from '@components/headers/DashBoardHeader';
import MemberTable from '@components/table/member/MemberTable';
import leftarrowIcon from '@public/icons/left_arrow.svg';
import Image from 'next/image';
import EditName from '@components/pages/dashboardEdit/editName/EditName';
import size from '@constants/breakpointsSize';
import InviteTable from '@components/table/invite/InviteTable';
import { TColorCode } from '@components/chips/Chip.type';
import { useRouter } from 'next/router';
import { PAGE_SIZE } from '@constants/page';
import { EditPageProps } from '@utils/editDashboard/edit.type';
import ModalBase from '@components/modals/ModalBase';
import Modal from '@components/modals/Modal';
import ConfirmModal from '@components/modals/edit_dashboard/ConfirmModal';
import useWindowSize from '@hooks/useWindowSize';
import { useMyData } from '@contexts/myDataContext';
import { useDashContext } from '@contexts/dashContext';
import {
  deleteDashboard,
  deleteInvite,
  deleteMember,
  getDashboardInvites,
  getDashboardMembers,
  postDashboardInvites,
  updateDashboard,
} from '@utils/api';

export async function getServerSideProps(context: any) {
  const dashboardId = context.query['dashboardId'];

  const { invitees, totalInvitees } = await getDashboardInvites(dashboardId, 1);
  const { members, totalMembers } = await getDashboardMembers(dashboardId, 1);

  return {
    props: {
      invitees,
      members,
      totalInvitees,
      totalMembers,
    },
  };
}

function Edit({ invitees: initialInvitees, totalInvitees, members: initialMembers, totalMembers }: EditPageProps) {
  const { fetchDashboards, fetchDashboardInfo, dashInfo } = useDashContext();

  const { myData } = useMyData();
  const { windowWidth } = useWindowSize();

  const [selectedColor, setSelectedColor] = useState<TColorCode | string>(dashInfo.color);

  const [dashboardName, setDashboardName] = useState(dashInfo.title);

  const [invitees, setInvitees] = useState(initialInvitees);
  const [members, setMembers] = useState(initialMembers);
  const [invitesPage, setInvitesPage] = useState(1);
  const [memberPage, setMemberPage] = useState(1);

  const limitInvitePage = Number(Math.ceil(totalInvitees / PAGE_SIZE));
  const limitMemberPage = Number(Math.ceil(totalMembers / PAGE_SIZE));

  const router = useRouter();
  const dashboardId = router.query['dashboardId']?.toString();

  const handleUpdateClick = async () => {
    if (dashboardId) {
      await updateDashboard(dashboardId, dashboardName, selectedColor);

      fetchDashboardInfo();
      fetchDashboards();
    }
  };

  const handleInviteClick = async (inviteEmail: string) => {
    if (dashboardId && !invitees.some((item) => item.invitee.email === inviteEmail)) {
      await postDashboardInvites(dashboardId, inviteEmail);
      const { invitees: newInvitees } = await getDashboardInvites(dashboardId, 1);
      setInvitees(newInvitees);
    } else if (invitees.some((item) => item.invitee.email === inviteEmail)) {
      alert('이미 초대된 사용자입니다.');
    }
  };

  const handleCancelInviteClick = async (cancelId: number) => {
    if (dashboardId) {
      await deleteInvite(dashboardId, cancelId);

      const { invitees: newInvitees } = await getDashboardInvites(dashboardId, invitesPage);
      setInvitees(newInvitees);
    }
  };

  const handleDeleteMemberClick = async (deleteId: number) => {
    if (dashboardId) {
      await deleteMember(deleteId);
      const { members: newMembers } = await getDashboardMembers(dashboardId, memberPage);
      setMembers(newMembers);
    }
  };

  const handleDeleteDashboardClick = async () => {
    if (dashboardId) {
      await deleteDashboard(dashboardId);
      await router.push(`/mydashboard`);
    }
  };

  const handleInvitesPageClick = async () => {
    if (dashboardId) {
      const { invitees: newInvitees } = await getDashboardInvites(dashboardId, invitesPage);
      setInvitees(newInvitees);
    }
  };

  const handleMembersPageClick = async () => {
    if (dashboardId) {
      const { members: newMembers } = await getDashboardMembers(dashboardId, memberPage);
      setMembers(newMembers);
    }
  };

  const handlePreviousInvitesPageClick = () => {
    setInvitesPage((prev) => {
      if (prev > 1) return prev - 1;
      return prev;
    });
  };

  const handleNextInvitesPageClick = () => {
    setInvitesPage((prev) => {
      if (prev < limitInvitePage) return prev + 1;
      return prev;
    });
  };

  const handlePreviousMembersPageClick = () => {
    setMemberPage((prev) => {
      if (prev > 1) return prev - 1;
      return prev;
    });
  };

  const handleNextMembersPageClick = () => {
    setMemberPage((prev) => {
      if (prev < limitMemberPage) return prev + 1;
      return prev;
    });
  };

  useEffect(() => {
    if (dashboardId) {
      handleInvitesPageClick();
    }
  }, [invitesPage]);

  useEffect(() => {
    if (dashboardId) {
      handleMembersPageClick();
    }
  }, [memberPage]);

  return (
    <S.PageContainer>
      <div>
        <Sidemenu />
      </div>
      <S.RightSection>
        <DashBoardHeader
          mydata={{
            id: myData.userId,
            nickname: myData.nickname,
            email: myData.email || '',
          }}
          userList={initialMembers}
          crown={dashInfo.createdByMe}
          onInviteClick={handleInviteClick}
        />
        <S.PageContents>
          <S.GoBackButton href={`/dashboard/${dashboardId}`}>
            <Image src={leftarrowIcon.src} width={20} height={20} alt="돌아가기 버튼" /> 돌아가기
          </S.GoBackButton>
          <EditName
            isMobile={windowWidth <= size.tablet}
            title={dashInfo.title}
            color={dashInfo.color}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            onClick={handleUpdateClick}
            onChange={setDashboardName}
          />
          <MemberTable
            members={members}
            onDeleteClick={handleDeleteMemberClick}
            onNextClick={handleNextMembersPageClick}
            onPreviousClick={handlePreviousMembersPageClick}
            pageInfo={{ current: memberPage, limit: limitMemberPage }}
          />
          <InviteTable
            users={invitees}
            onCancelInviteClick={handleCancelInviteClick}
            onInviteClick={handleInviteClick}
            onPreviousClick={handlePreviousInvitesPageClick}
            onNextClick={handleNextInvitesPageClick}
            pageInfo={{ current: invitesPage, limit: limitInvitePage }}
          />
          <Modal
            content={
              <ModalBase>
                <ConfirmModal text={'정말 대시보드를 삭제하시겠습니까?'} onConfirmClick={handleDeleteDashboardClick} />
              </ModalBase>
            }
          >
            <S.DeleteDashboardButton> 대시보드 삭제하기 </S.DeleteDashboardButton>
          </Modal>
        </S.PageContents>
      </S.RightSection>
    </S.PageContainer>
  );
}

export default Edit;
