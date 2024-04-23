import DashBoardHeader from '@components/headers/DashBoardHeader';
import Sidemenu from '@components/sidemenu/Sidemenu';
import React from 'react';
import * as S from '@pages/dashboard/Dashboard.style';
import { USER_LIST } from '@utils/testData';
import Button from '@components/buttons/Button';
import Modal from '@components/modals/Modal';
import ModalBase from '@components/modals/ModalBase';
import NewColumnModal from '@components/modals/new_column/Modal';
import ColumnList from '@components/pages/dashboard/ColumnList';

function Dashboard() {
  return (
    <S.DashboardContainer>
      <Sidemenu />
      <div>
        <DashBoardHeader mydata={USER_LIST[0]} userList={USER_LIST} />
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
      </div>
    </S.DashboardContainer>
  );
}

export default Dashboard;
