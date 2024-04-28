import DashBoardHeader from '@components/headers/DashBoardHeader';
import Sidemenu from '@components/sidemenu/Sidemenu';
import React, { useEffect, useState } from 'react';
import * as S from '@pages/dashboard/Dashboard.style';
import Button from '@components/buttons/Button';
import Modal from '@components/modals/Modal';
import ModalBase from '@components/modals/ModalBase';
import NewColumnModal from '@components/modals/new_column/Modal';
import ColumnList from '@components/pages/dashboard/ColumnList';
import { useMyData } from '@contexts/myDataContext';

import { useDashContext } from '@contexts/dashContext';

import { useRouter } from 'next/router';
import { getDashboardMembers, postDashboardInvites } from '@utils/api';
import { DashBoardMember } from '@utils/editDashboard/edit.type';

function Dashboard() {
  const { myData } = useMyData();
  const { fetchDashboardInfo, dashInfo } = useDashContext();
  const router = useRouter();
  const { dashboardId }: { dashboardId: number } = router.query as unknown as { dashboardId: number };

  const [members, setMembers] = useState<DashBoardMember[]>([]);
  const [invitees, setInvitees] = useState([]);

  const fetchDashMembers = async (id: string) => {
    const res = await getDashboardMembers(id);
    setMembers(res.members);
  };

  const handleInviteClick = async (inviteEmail: string) => {
    await postDashboardInvites(dashboardId.toString(), inviteEmail);
  };

  useEffect(() => {
    if (dashboardId !== undefined) {
      fetchDashMembers(dashboardId.toString());
    }
    // fetchDashInvitees();
  }, [dashboardId]);

  return (
    <S.DashboardContainer>
      <Sidemenu />
      <S.DashboardContentContainer>
        <DashBoardHeader
          mydata={{
            id: myData.userId,
            nickname: myData.nickname,
            email: myData.email || '',
          }}
          userList={members}
          crown={dashInfo.createdByMe}
          onInviteClick={handleInviteClick}
        />

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
  );
}

export default Dashboard;
