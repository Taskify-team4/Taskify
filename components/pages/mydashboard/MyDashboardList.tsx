import * as S from '@components/pages/mydashboard/MyDashboardList.style';
import Button from '@components/buttons/Button';

// test
import { testDashBoard } from '@pages/mydashboard/test';
function MyDashboardList() {
  return (
    <S.MyDashBoardListContainer>
      <S.MyDashBoardList>
        <Button.AddDashboard>대시보드 생성하기</Button.AddDashboard>
        {testDashBoard ? (
          testDashBoard.map((dashboard, index) => (
            <Button.Dashboard key={`${index} ${dashboard.dashboardData.title}`} {...dashboard} />
          ))
        ) : (
          <></>
        )}
      </S.MyDashBoardList>
      {testDashBoard ? (
        <S.MyDashBoardPagenation>
          <S.PagenationText>1 페이지 중 1</S.PagenationText>
          <S.PagenationButton>
            <Button.PagenationLeft />
            <Button.PagenationRight />
          </S.PagenationButton>
        </S.MyDashBoardPagenation>
      ) : (
        <></>
      )}
    </S.MyDashBoardListContainer>
  );
}
export default MyDashboardList;
