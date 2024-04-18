import DashBoardHeader from '@components/headers/DashBoardHeader';
import Sidemenu from '@components/sidemenu/Sidemenu';
import React from 'react';
import * as S from '@pages/dashboard/Dashboard.style';
import { DASH_DATA, USER_LIST } from '@utils/testData';
import Column from '@components/pages/dashboard/Column';
import Button from '@components/buttons/Button';

const initialDash = DASH_DATA[0];

function dashboard() {
  return (
    <S.DashboardContainer>
      <Sidemenu dashboards={DASH_DATA} />
      <div>
        <DashBoardHeader
          title={initialDash.title}
          mydata={USER_LIST[0]}
          userList={USER_LIST}
          crown={initialDash.crown}
        />
        <S.ColumnContainer>
          <Column />
          <Column />
          <Column />
          <S.AddColumnButtonWrapper>
            <Button.AddColumn>새로운 컬럼 추가하기</Button.AddColumn>
          </S.AddColumnButtonWrapper>
        </S.ColumnContainer>
      </div>
    </S.DashboardContainer>
  );
}

export default dashboard;
