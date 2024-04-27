import * as S from '@components/pages/mydashboard/MyDashboardList.style';
import Button from '@components/buttons/Button';
import { useDashContext } from '@contexts/dashContext';
import Modal from '@components/modals/Modal';
import ModalBase from '@components/modals/ModalBase';
import NewDashBoardModal from '@components/modals/new_dashboard/Modal';
import { useRouter } from 'next/router';

function MyDashboardList() {
  const { myDashboards, dashPage, dashPageLimit } = useDashContext();
  const router = useRouter();
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
        {myDashboards ? (
          myDashboards.map((dashboard, index) => (
            <Button.Dashboard
              key={`${index} ${dashboard.title}`}
              dashboardData={dashboard}
              onClick={() => router.push(`/dashboard/${dashboard.id}`)}
            />
          ))
        ) : (
          <></>
        )}
      </S.MyDashBoardList>
      {myDashboards ? (
        <S.MyDashBoardPagenation>
          <S.PagenationText>
            {dashPageLimit} 페이지 중 {dashPage}
          </S.PagenationText>
          <S.PagenationButton>
            <Button.PagenationLeft onClick={handlePrevClick()} />
            <Button.PagenationRight onClick={handleNextClick()} />
          </S.PagenationButton>
        </S.MyDashBoardPagenation>
      ) : (
        <></>
      )}
    </S.MyDashBoardListContainer>
  );
}
export default MyDashboardList;
