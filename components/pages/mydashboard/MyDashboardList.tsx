import * as S from '@components/pages/mydashboard/MyDashboardList.style';
import Button from '@components/buttons/Button';

// test
import { TDashboards } from '@pages/dashboard/Dashboard.type';
import { useDashContext } from '@contexts/dashContext';
import { useState } from 'react';
import Modal from '@components/modals/Modal';
import ModalBase from '@components/modals/ModalBase';
import NewDashBoardModal from '@components/modals/new_dashboard/Modal';

function MyDashboardList() {
  const { dashboards } = useDashContext();
  return (
    <S.MyDashBoardListContainer>
      <S.MyDashBoardList>
        <Modal
          content={
            <ModalBase>
              <NewDashBoardModal />
            </ModalBase>
          }
        >
          <Button.AddDashboard>대시보드 생성하기</Button.AddDashboard>
        </Modal>
        {dashboards ? (
          dashboards.map((dashboard, index) => (
            <Button.Dashboard key={`${index} ${dashboard.title}`} dashboardData={dashboard} />
          ))
        ) : (
          <></>
        )}
      </S.MyDashBoardList>
      {dashboards ? (
        <S.MyDashBoardPagenation>
          <S.PagenationText>1 페이지 중 1</S.PagenationText>
          <S.PagenationButton>
            <Button.PagenationLeft />
            <Button.PagenationRight />
          </S.PagenationButton>
        </S.MyDashBoardPagenation>
      ) : (
        <></>
      )}
    </S.MyDashBoardListContainer>
  );
}
export default MyDashboardList;
