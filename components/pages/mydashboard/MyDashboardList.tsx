import * as S from '@components/pages/mydashboard/MyDashboardList.style';
import Button from '@components/buttons/Button';

// test
import { TDashboards } from '@pages/dashboard/Dashboard.type';

type TMyDashboardListProps = {
  dashboards: TDashboards;
};
function MyDashboardList({ dashboards }: TMyDashboardListProps) {
  return (
    <S.MyDashBoardListContainer>
      <S.MyDashBoardList>
        <Button.AddDashboard>대시보드 생성하기</Button.AddDashboard>
        {dashboards ? (
          dashboards.map((dashboard, index) => (
            <Button.Dashboard key={`${index} ${dashboard.title}`} dashboardData={dashboard} />
          ))
        ) : (
          <></>
        )}
      </S.MyDashBoardList>
      {dashboards ? (
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
