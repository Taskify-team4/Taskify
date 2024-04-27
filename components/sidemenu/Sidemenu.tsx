import * as S from '@components/sidemenu/Sidemenu.style';
import logoImg from '@public/icons/logo_img.svg';
import logoImgTaskify from '@public/icons/logo_taskify.svg';
import addBoxImg from '@public/icons/add.svg';
import DashboardList from './DashboardList';
import Modal from '@components/modals/Modal';
import ModalBase from '@components/modals/ModalBase';
import NewDashBoardModal from '@components/modals/new_dashboard/Modal';
import Button from '@components/buttons/Button';
import { useDashContext } from '@contexts/dashContext';
import { useRouter } from 'next/router';

function Sidemenu() {
  const router = useRouter();
  const { myDashboardsInSideBar, dashPageInSideBar, dashPageLimitInSideBar } = useDashContext();
  const { handleNextClick, handlePrevClick } = useDashContext();
  return (
    <S.SidemenuContainer>
      <S.LogoWrapper onClick={() => router.push(`/mydashboard`)}>
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
      {myDashboardsInSideBar ? (
        <S.DashBoardPagination>
          <S.PagenationText>
            {dashPageLimitInSideBar} 페이지 중 {dashPageInSideBar}
          </S.PagenationText>
          <S.PageButton>
            <Button.PagenationLeft onClick={handlePrevClick(true)} />
            <Button.PagenationRight onClick={handleNextClick(true)} />
          </S.PageButton>
        </S.DashBoardPagination>
      ) : (
        <></>
      )}
    </S.SidemenuContainer>
  );
}

export default Sidemenu;
