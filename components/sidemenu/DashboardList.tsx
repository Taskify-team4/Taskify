import * as S from '@components/sidemenu/Sidemenu.style';
import { SidemenuProps } from '@components/sidemenu/Sidemenu.type';
import React, { useState } from 'react';
import { ColorTile } from '@components/chips/Chip.style';
import crownImg from '@public/icons/crown.svg';

function DashboardList({ dashboards }: SidemenuProps) {
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
              {dashboard.crown && (
                <S.DashBoardCrown src={crownImg.src} alt="본인이 만든 대시보드일 때 생기는 왕관 아이콘" />
              )}
            </S.DashBoardsItem>
          ))
        : null}
    </S.DashBoardsList>
  );
}

export default DashboardList;
