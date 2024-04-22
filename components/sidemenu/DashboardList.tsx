import * as S from '@components/sidemenu/Sidemenu.style';
import React, { useState } from 'react';
import { ColorTile } from '@components/chips/Chip.style';
import crownImg from '@public/icons/crown.svg';
import { TDashboards } from '@pages/dashboard/Dashboard.type';
import { useDashContext } from '@contexts/dashContext';

function DashboardList() {
  const { dashboards } = useDashContext();
  const [itemIndex, setItemIndex] = useState<number>();

  const handleItemClick = (index: number) => {
    setItemIndex(index);
  };
  return (
    <S.DashBoardsList>
      {dashboards
        ? dashboards.map((dashboard, index) => (
            <S.DashBoardsItem
              key={`${index} ${dashboard.title}`}
              onClick={() => handleItemClick(index)}
              selected={itemIndex === index}
            >
              <ColorTile $size={'tiny'} $color={dashboard.color} />
              <S.DashBoardTitle>{dashboard.title}</S.DashBoardTitle>
              {dashboard.createdByMe && (
                <S.DashBoardCrown src={crownImg} alt="본인이 만든 대시보드일 때 생기는 왕관 아이콘" />
              )}
            </S.DashBoardsItem>
          ))
        : null}
    </S.DashBoardsList>
  );
}

export default DashboardList;
