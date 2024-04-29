import React, { useEffect, useState } from 'react';
import Sidemenu from '@components/sidemenu/Sidemenu';
import * as S from '@components/pages/dashboard/dashboardId/edit.style';
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
import ModalBase from '@components/modals/ModalBase';
import Modal from '@components/modals/Modal';
import ConfirmModal from '@components/modals/edit_dashboard/ConfirmModal';
import useWindowSize from '@hooks/useWindowSize';
import { MyDataProvider } from '@contexts/myDataContext';
import {
  deleteDashboard,
  deleteInvite,
  deleteMember,
  getDashboardInfo,
  getDashboardInvites,
  getDashboardMembers,
  postDashboardInvites,
  updateDashboard,
} from '@utils/api';
import { TDashInfo } from '@components/pages/dashboard/Dashboard.type';
import { DashBoardMember, Invitations } from '@components/pages/dashboard/dashboardId/edit.type';
import { DashProvider } from '@contexts/dashContext';

export const getServerSideProps = async (context: any) => {
  const { dashboardId } = context.query;
  return {
    props: {
      dashboardId,
    },
  };
};

function Edit({ dashboardId }: { dashboardId: string }) {
  const { windowWidth } = useWindowSize();

  const [selectedColor, setSelectedColor] = useState<TColorCode | string>('');

  const [dashboardName, setDashboardName] = useState<string>('');

  const [invitees, setInvitees] = useState<Invitations[]>([]);
  const [members, setMembers] = useState<DashBoardMember[]>([]);
  const [invitesPage, setInvitesPage] = useState(1);
  const [memberPage, setMemberPage] = useState(1);
  const [dashInfo, setDashInfo] = useState<TDashInfo>({
    color: '',
    createdAt: '',
    createdByMe: false,
    id: 0,
    title: '',
    updatedAt: '',
    userId: 0,
  });
  const [totalInvitees, setTotalInvitees] = useState(0);
  const [totalMembers, setTotalMembers] = useState(0);
  const [isEdited, setIsEdited] = useState(false);

  const limitInvitePage = totalInvitees === 0 ? 1 : Number(Math.ceil(totalInvitees / PAGE_SIZE));
  const limitMemberPage = Number(Math.ceil(totalMembers / PAGE_SIZE));

  const router = useRouter();

  const fetchDashInfo = async () => {
    const res = await getDashboardInfo(dashboardId);
    setDashInfo(res);
  };

  const fetchInvitees = async () => {
    const res = await getDashboardInvites(dashboardId, 1);
    setInvitees(res.invitees);
    setTotalInvitees(res.totalInvitees);
  };

  const fetchMembers = async () => {
    const res = await getDashboardMembers(dashboardId, 1);
    setMembers(res.members);
    setTotalMembers(res.totalMembers);
  };

  const handleUpdateClick = async () => {
    if (dashboardId) {
      await updateDashboard(dashboardId, dashboardName, selectedColor);
      setIsEdited(true);
      await fetchDashInfo();
    }
  };

  const handleInviteClick = async (inviteEmail: string) => {
    if (dashboardId && !invitees.some((item) => item.invitee.email === inviteEmail)) {
      await postDashboardInvites(dashboardId, inviteEmail);
      const { invitees: newInvitees, totalInvitees: newTotalInvitees } = await getDashboardInvites(dashboardId, 1);
      setInvitees(newInvitees);
      setTotalInvitees(newTotalInvitees);
    } else if (invitees.some((item) => item.invitee.email === inviteEmail)) {
      alert('이미 초대된 사용자입니다.');
    }
  };

  const handleCancelInviteClick = async (cancelId: number) => {
    if (dashboardId) {
      await deleteInvite(dashboardId, cancelId);

      const { invitees: newInvitees, totalInvitees: newTotalInvitees } = await getDashboardInvites(
        dashboardId,
        invitesPage,
      );
      setInvitees(newInvitees);
      setTotalInvitees(newTotalInvitees);
    }
  };

  const handleDeleteMemberClick = async (deleteId: number) => {
    if (dashboardId) {
      await deleteMember(deleteId);
      const { members: newMembers, totalMembers: newTotalMembers } = await getDashboardMembers(dashboardId, memberPage);
      setMembers(newMembers);
      setTotalMembers(newTotalMembers);
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

  useEffect(() => {
    fetchDashInfo();
    fetchMembers();
    fetchInvitees();
  }, [isEdited]);

  return (
    <MyDataProvider>
      <DashProvider dashboardId={+dashboardId}>
        <S.PageContainer>
          <div>
            <Sidemenu isDashboardEdited={isEdited} setIsDashboardEdited={setIsEdited} />
          </div>
          <S.RightSection>
            <DashBoardHeader
              userList={members}
              crown={dashInfo.createdByMe}
              onInviteClick={handleInviteClick}
              isDashboardEdited={isEdited}
              setIsDashboardEdited={setIsEdited}
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
                    <ConfirmModal
                      text={'정말 대시보드를 삭제하시겠습니까?'}
                      onConfirmClick={handleDeleteDashboardClick}
                    />
                  </ModalBase>
                }
              >
                <S.DeleteDashboardButton> 대시보드 삭제하기 </S.DeleteDashboardButton>
              </Modal>
            </S.PageContents>
          </S.RightSection>
        </S.PageContainer>
      </DashProvider>
    </MyDataProvider>
  );
}

export default Edit;
