import DashBoardHeader from '@components/headers/DashBoardHeader';
import Sidemenu from '@components/sidemenu/Sidemenu';
import React, { useEffect, useState } from 'react';
import * as S from '@pages/dashboard/Dashboard.style';
import { DASH_DATA, USER_LIST } from '@utils/testData';
import Column from '@components/pages/dashboard/Column';
import Button from '@components/buttons/Button';
import Modal from '@components/modals/Modal';
import ModalBase from '@components/modals/ModalBase';
import NewColumnModal from '@components/modals/new_column/Modal';
import { useRouter } from 'next/router';
import { getColumns, getDashboardInfo, getDashboards } from './api';
import { TColumns, TDashInfo, TDashboards } from './Dashboard.type';

const initialDash = DASH_DATA[0];

function Dashboard() {
  const router = useRouter();
  const { dashboardId }: { dashboardId: number } = router.query as unknown as { dashboardId: number };

  const [dashInfo, setDashInfo] = useState<TDashInfo>({
    color: '',
    createdAt: '',
    createdByMe: false,
    id: 0,
    title: '',
    updatedAt: '',
    userId: 0,
  });
  const [dashboards, setDashboards] = useState<TDashboards>([]);
  const [columns, setColumns] = useState<TColumns>([]);

  const fetchDashboardInfo = async () => {
    const res = await getDashboardInfo(dashboardId);
    setDashInfo(res);
  };

  const fetchDashboards = async () => {
    const res = await getDashboards();
    const result = res.dashboards;
    setDashboards(result);
  };

  const fetchColumns = async () => {
    const res = await getColumns(dashboardId);
    const result = res.data;
    setColumns(result);
  };

  useEffect(() => {
    if (!dashboardId) return;
    fetchDashboardInfo();
    fetchDashboards();
    fetchColumns();
  }, [dashboardId]);

  return (
    <S.DashboardContainer>
      <Sidemenu dashboards={dashboards} />
      <div>
        <DashBoardHeader
          title={dashInfo.title}
          mydata={USER_LIST[0]}
          userList={USER_LIST}
          crown={initialDash.createdByMe}
        />
        <S.ColumnContainer>
          {columns.map((column) => (
            <Column column={column} key={column.id} />
          ))}

          <S.AddColumnButtonWrapper>
            <Modal
              content={
                <ModalBase>
                  <NewColumnModal dashboardId={Number(dashboardId)} fetchColumns={fetchColumns} />
                </ModalBase>
              }
            >
              <Button.AddColumn>새로운 컬럼 추가하기</Button.AddColumn>
            </Modal>
          </S.AddColumnButtonWrapper>
        </S.ColumnContainer>
      </div>
    </S.DashboardContainer>
  );
}

export default Dashboard;
