import React from 'react';
import * as S from './LandingMain.style';
import mainImg from '@public/images/landing.png';

function LandingMain() {
  return (
    <S.Main>
      <S.MainImg src={mainImg} alt="메인 이미지" />
      <S.Title>
        <S.MainTitle>
          새로운 일정 관리
          <S.Violet> Taskify</S.Violet>
        </S.MainTitle>
      </S.Title>
      <S.MainSubTitle>서비스의 메인 설명 들어갑니다.</S.MainSubTitle>
      <S.LoginButton>로그인하기</S.LoginButton>
    </S.Main>
  );
}

export default LandingMain;
