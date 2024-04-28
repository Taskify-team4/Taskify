import React, { useEffect } from 'react';
import Image from 'next/image';
import * as S from '@components/pages/myPage/MyPage.style';
import Sidemenu from '@components/sidemenu/Sidemenu';
import DashBoardHeader from '@components/headers/DashBoardHeader';
import leftArrow from '@public/icons/left_arrow.svg';
import Profile from '@components/pages/myPage/profile/Profile';
import Password from '@components/pages/myPage/password/Password';
import { useMyData } from '@contexts/myDataContext';

function mypage() {
  const { myData } = useMyData();

  return (
    <S.MyPageContainer>
      <Sidemenu />
      <S.MyPageMainContainer>
        <DashBoardHeader title="계정관리" mydata={myData} />
        <S.MyPageMainContent>
          <S.MyPageMainHead>
            <S.ImgWrap>
              <Image fill src={leftArrow} alt="leftArrow" />
            </S.ImgWrap>
            <S.HeadTitle>돌아가기</S.HeadTitle>
          </S.MyPageMainHead>
          <Profile />
          <Password />
        </S.MyPageMainContent>
      </S.MyPageMainContainer>
    </S.MyPageContainer>
  );
}

export default mypage;
