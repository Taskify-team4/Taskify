import * as S from '@components/sidemenu/Sidemenu.style';
import { ColorTile } from '@components/chips/Chip.style';
import crownImg from '@public/icons/crown.svg';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { TDashboards } from '@pages/dashboard/Dashboard.type';

function DashboardList({ myDashboardsInSideBar: dashboards }: { myDashboardsInSideBar: TDashboards }) {
  const router = useRouter();
  const [itemIndex, setItemIndex] = useState<number>();

  const handleItemClick = (index: number) => {
    setItemIndex(index);
  };

  return (
    <S.DashBoardsList>
      {dashboards ? (
        dashboards.map((dashboard, index) => (
          <S.DashBoardsItem
            key={`${index} ${dashboard.title}`}
            onClick={() => {
              handleItemClick(index);
              router.push(`/dashboard/${dashboard.id}`);
            }}
            selected={itemIndex === index}
          >
            <ColorTile $size={'tiny'} $color={dashboard.color} />
            <S.DashBoardTitle>{dashboard.title}</S.DashBoardTitle>
            {dashboard.createdByMe && (
              <S.DashBoardCrown src={crownImg} alt="본인이 만든 대시보드일 때 생기는 왕관 아이콘" />
            )}
          </S.DashBoardsItem>
        ))
      ) : (
        <></>
      )}
    </S.DashBoardsList>
  );
}

export default DashboardList;
