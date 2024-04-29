import DashBoardHeader from '@components/headers/DashBoardHeader';
import Sidemenu from '@components/sidemenu/Sidemenu';
import React, { useEffect, useState } from 'react';
import * as S from '@components/pages/dashboard/Dashboard.style';
import Button from '@components/buttons/Button';
import Modal from '@components/modals/Modal';
import ModalBase from '@components/modals/ModalBase';
import NewColumnModal from '@components/modals/new_column/Modal';
import ColumnList from '@components/pages/dashboard/ColumnList';
import { MyDataProvider } from '@contexts/myDataContext';
import { DashProvider } from '@contexts/dashContext';
import { useRouter } from 'next/router';
import { getDashboardInfo, getDashboardMembers, postDashboardInvites } from '@utils/api';
import { DashBoardMember } from '@components/pages/dashboard/dashboardId/edit.type';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { TDashInfo } from '../../components/pages/dashboard/Dashboard.type';

function Dashboard() {
  const router = useRouter();
  const [members, setMembers] = useState<DashBoardMember[]>([]);
  const [dashInfo, setDashInfo] = useState<TDashInfo>({
    color: '#760dde',
    createdAt: '',
    createdByMe: false,
    id: 0,
    title: '',
    updatedAt: '',
    userId: 0,
  });
  const { dashboardId }: { dashboardId: number } = router.query as unknown as { dashboardId: number };

  const fetchDashMembers = async (id: string) => {
    const res = await getDashboardMembers(id);
    setMembers(res.members);
  };

  const fetchDashboardInfo = async () => {
    if (dashboardId) {
      const res = await getDashboardInfo(dashboardId.toString());
      setDashInfo(res);
    }
  };

  const handleInviteClick = async (inviteEmail: string) => {
    await postDashboardInvites(dashboardId.toString(), inviteEmail);
  };

  useEffect(() => {
    if (dashboardId !== undefined) {
      fetchDashMembers(dashboardId.toString());
    }
    fetchDashboardInfo();
  }, [dashboardId]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{`대시보드 - ${dashInfo.title}`}</title>
          {/* <meta name="description" content={description} /> */}
        </Helmet>
      </HelmetProvider>
      <MyDataProvider>
        <DashProvider dashboardId={dashboardId}>
          <S.DashboardContainer>
            <Sidemenu />
            <S.DashboardContentContainer>
              <DashBoardHeader userList={members} onInviteClick={handleInviteClick} />
              <S.ColumnContainer>
                <ColumnList />
                <S.AddColumnButtonWrapper>
                  <Modal
                    content={
                      <ModalBase>
                        <NewColumnModal />
                      </ModalBase>
                    }
                  >
                    <Button.AddColumn>새로운 컬럼 추가하기</Button.AddColumn>
                  </Modal>
                </S.AddColumnButtonWrapper>
              </S.ColumnContainer>
            </S.DashboardContentContainer>
          </S.DashboardContainer>
        </DashProvider>
      </MyDataProvider>
    </>
  );
}

export default Dashboard;
