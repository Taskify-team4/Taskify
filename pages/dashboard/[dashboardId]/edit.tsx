import React from 'react';
import { SidemenuProps } from '@components/sidemenu/Sidemenu.type';
import Sidemenu from '@components/sidemenu/Sidemenu';
import * as S from '@pages/dashboard/[dashboardId]/edit.style';
import DashBoardHeader from '@components/headers/DashBoardHeader';
import { DashBoardPros } from '@components/headers/Header.type';
import MemberTable from '@components/table/member/MemberTable';
import InviteTable from '@components/table/invite/InviteTable';
import leftarrowIcon from '@public/icons/left_arrow.svg';
import Image from 'next/image';
import EditName from '@components/pages/dashboardEdit/editName/EditName';

function Edit() {
  const SidemenuData: SidemenuProps = {
    dashboards: [
      { color: 'green', title: 'sample', crown: true },
      { color: 'pink', title: 'sample2', crown: false },
    ],
  };
  const HeaderData: DashBoardPros = {
    title: 'sample',
    mydata: {
      id: 1,
      nickname: '김준영',
      email: 'www@www.com',
    },
    userList: [
      {
        id: 1,
        nickname: '김준영',
        email: 'www@www.com',
      },
      {
        id: 2,
        nickname: '최정훈',
        email: 'www@www.com',
      },
    ],
    crown: true,
  };

  return (
    <S.PageContainer>
      <div>
        <Sidemenu dashboards={SidemenuData.dashboards} />
      </div>
      <S.RightSection>
        <DashBoardHeader {...HeaderData} />
        <S.PageContents>
          <S.GoBackButton>
            <Image src={leftarrowIcon.src} width={20} height={20} alt="돌아가기 버튼" /> 돌아가기
          </S.GoBackButton>
          <EditName />
          <MemberTable />
          <InviteTable />
          <S.DeleteDashboardButton> 대시보드 삭제하기 </S.DeleteDashboardButton>
        </S.PageContents>
      </S.RightSection>
    </S.PageContainer>
  );
}

export default Edit;