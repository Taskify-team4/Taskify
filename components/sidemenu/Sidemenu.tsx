import * as S from '@components/sidemenu/Sidemenu.style';
import logoImg from '@public/icons/logo_img.svg';
import logoImgTaskify from '@public/icons/logo_taskify.svg';
import addBoxImg from '@public/icons/add.svg';
import DashboardList from './DashboardList';
import Modal from '@components/modals/Modal';
import ModalBase from '@components/modals/ModalBase';
import NewDashBoardModal from '@components/modals/new_dashboard/Modal';
import React, { useEffect, useState } from 'react';
import { TDashboards } from '@pages/dashboard/Dashboard.type';
import { getMyDashboards } from '@pages/mydashboard/api';
import Button from '@components/buttons/Button';

function Sidemenu() {
  const [myDashboardsInSideBar, setMyDashboardsInSideBar] = useState<TDashboards>([]);
  const [dashPageInSideBar, setDashPageInSideBar] = useState(1);
  const [dashPageLimitInSideBar, setdashPageLimitInSideBar] = useState(1);

  const fetchMyDashboards = async () => {
    const res = await getMyDashboards(dashPageInSideBar);
    const result = res.dashboards;

    setMyDashboardsInSideBar(result);
    setdashPageLimitInSideBar(Math.ceil(res.totalCount / 10));
  };
  const handlePrevClick = () => {
    setDashPageInSideBar((prev) => {
      if (prev > 1) return prev - 1;
      return prev;
    });
  };
  const handleNextClick = () => {
    setDashPageInSideBar((prev) => {
      if (prev < dashPageLimitInSideBar) return prev + 1;
      return prev;
    });
  };
  const handleDashPageClick = async () => {
    const { dashboards: nowDashboards } = await getMyDashboards(dashPageInSideBar);
    setMyDashboardsInSideBar(nowDashboards);
  };
  useEffect(() => {
    fetchMyDashboards();
  }, []);
  useEffect(() => {
    handleDashPageClick();
  }, [dashPageInSideBar]);

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

      <DashboardList dashboards={myDashboardsInSideBar} />
      {myDashboardsInSideBar ? (
        <S.DashBoardPagination>
          <S.PagenationText>
            {dashPageLimitInSideBar} 페이지 중 {dashPageInSideBar}
          </S.PagenationText>
          <S.PageButton>
            <Button.PagenationLeft onClick={handlePrevClick} />
            <Button.PagenationRight onClick={handleNextClick} />
          </S.PageButton>
        </S.DashBoardPagination>
      ) : (
        <></>
      )}
    </S.SidemenuContainer>
  );
}

export default Sidemenu;
