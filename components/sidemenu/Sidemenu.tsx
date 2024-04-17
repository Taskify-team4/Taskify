import * as S from '@components/sidemenu/Sidemenu.style';
import { SidemenuProps } from '@components/sidemenu/Sidemenu.type';
import logoImg from '@public/icons/logo_img.svg';
import logoImgTaskify from '@public/icons/logo_taskify.svg';
import addBoxImg from '@public/icons/add.svg';
import React from 'react';
import DashboardList from './DashboardList';

function Sidemenu(props: SidemenuProps) {
  return (
    <S.SidemenuContainer>
      <S.LogoWrapper>
        <S.LogoImg src={logoImg} alt="logo" />
        <S.LogoImgTaskify src={logoImgTaskify} alt="logo Taskify" />
      </S.LogoWrapper>
      <S.DashBoardsWrapper
        onClick={() => {
          console.log('모달떠야함');
        }}
      >
        <S.DashBoardsText>Dash Boards</S.DashBoardsText>
        <S.AddBoxImg src={addBoxImg} alt="add box" />
      </S.DashBoardsWrapper>
      <DashboardList {...props} />
    </S.SidemenuContainer>
  );
}

export default Sidemenu;
