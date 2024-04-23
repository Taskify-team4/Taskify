import * as S from '@components/sidemenu/Sidemenu.style';
import logoImg from '@public/icons/logo_img.svg';
import logoImgTaskify from '@public/icons/logo_taskify.svg';
import addBoxImg from '@public/icons/add.svg';
import React from 'react';
import DashboardList from './DashboardList';
import Modal from '@components/modals/Modal';
import ModalBase from '@components/modals/ModalBase';
import NewDashBoardModal from '@components/modals/new_dashboard/Modal';

function Sidemenu() {
  return (
    <S.SidemenuContainer>
      <S.LogoWrapper>
        <S.LogoImg src={logoImg} alt="logo" />
        <S.LogoImgTaskify src={logoImgTaskify} alt="logo Taskify" />
      </S.LogoWrapper>
      <Modal
        content={
          <ModalBase>
            <NewDashBoardModal />
          </ModalBase>
        }
      >
        <S.DashBoardsWrapper>
          <S.DashBoardsText>Dash Boards</S.DashBoardsText>
          <S.AddBoxImg src={addBoxImg} alt="add box" />
        </S.DashBoardsWrapper>
      </Modal>

      <DashboardList />
    </S.SidemenuContainer>
  );
}

export default Sidemenu;
