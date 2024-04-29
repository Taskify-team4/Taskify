import React from 'react';
import Image from 'next/image';
import * as S from '@components/pages/myPage/MyPage.style';
import Sidemenu from '@components/sidemenu/Sidemenu';
import DashBoardHeader from '@components/headers/DashBoardHeader';
import leftArrow from '@public/icons/left_arrow.svg';
import Profile from '@components/pages/myPage/profile/Profile';
import Password from '@components/pages/myPage/password/Password';
import { MyDataProvider } from '@contexts/myDataContext';
import { DashProvider } from '@contexts/dashContext';
import { useRouter } from 'next/router';

function mypage() {
  const router = useRouter();
  const { dashboardId }: { dashboardId: number } = router.query as unknown as { dashboardId: number };

  return (
    <MyDataProvider>
      <S.MyPageContainer>
        <DashProvider dashboardId={dashboardId}>
          <Sidemenu />
        </DashProvider>
        <S.MyPageMainContainer>
          <DashBoardHeader title="계정관리" />
          <S.MyPageMainContent>
            <S.MyPageMainHead>
              <S.GoBack onClick={() => router.push(`/mydashboard`)}>
                <S.ImgWrap>
                  <Image fill src={leftArrow} alt="leftArrow" />
                </S.ImgWrap>
                <S.HeadTitle>돌아가기</S.HeadTitle>
              </S.GoBack>
            </S.MyPageMainHead>
            <Profile />
            <Password />
          </S.MyPageMainContent>
        </S.MyPageMainContainer>
      </S.MyPageContainer>
    </MyDataProvider>
  );
}

export default mypage;
