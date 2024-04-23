import * as S from '@components/pages/mydashboard/MyDashboardList.style';
import Button from '@components/buttons/Button';

// test
import { useDashContext } from '@contexts/dashContext';
import Modal from '@components/modals/Modal';
import ModalBase from '@components/modals/ModalBase';
import NewDashBoardModal from '@components/modals/new_dashboard/Modal';

function MyDashboardList() {
  const { Pdashboards, dashPage, dashPageLimit } = useDashContext();
  const { handleNextClick, handlePrevClick } = useDashContext();
  return (
    <S.MyDashBoardListContainer>
      <S.MyDashBoardList>
        <Modal
          content={
            <ModalBase>
              <NewDashBoardModal />
            </ModalBase>
          }
        >
          <Button.AddDashboard>대시보드 생성하기</Button.AddDashboard>
        </Modal>
        {Pdashboards ? (
          Pdashboards.map((dashboard, index) => (
            <Button.Dashboard key={`${index} ${dashboard.title}`} dashboardData={dashboard} />
          ))
        ) : (
          <></>
        )}
      </S.MyDashBoardList>
      {Pdashboards ? (
        <S.MyDashBoardPagenation>
          <S.PagenationText>
            {dashPageLimit} 페이지 중 {dashPage}
          </S.PagenationText>
          <S.PagenationButton>
            <Button.PagenationLeft onClick={handlePrevClick} />
            <Button.PagenationRight onClick={handleNextClick} />
          </S.PagenationButton>
        </S.MyDashBoardPagenation>
      ) : (
        <></>
      )}
    </S.MyDashBoardListContainer>
  );
}
export default MyDashboardList;
