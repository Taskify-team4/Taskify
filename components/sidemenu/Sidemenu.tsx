import * as S from '@components/sidemenu/Sidemenu.style';
import logoImg from '@public/icons/logo_img.svg';
import logoImgTaskify from '@public/icons/logo_taskify.svg';
import addBoxImg from '@public/icons/add.svg';
import crownImg from '@public/icons/crown.svg';
import { ColorTile } from '@components/chips/Chip.style';
import { TColorKey } from '@components/chips/Chip.type';
import React, { useState } from 'react';

// 임시로 만듦.
type dashboard = {
  color: TColorKey;
  title: string;
  crown?: boolean;
};
type SidemenuProps = {
  dashboards: dashboard[];
};
export default function Sidemenu({ dashboards }: SidemenuProps) {
  const [itemIndex, setItemIndex] = useState<number>();

  const handleItemClick = (index: number) => {
    setItemIndex(index);
  };

  return (
    <S.SidemenuContainer>
      <S.logoWrapper>
        <S.logoImg src={logoImg} alt="logo" />
        <S.logoImgTaskify src={logoImgTaskify} alt="logo Taskify" />
      </S.logoWrapper>
      <S.dashBoardsWrapper
        onClick={() => {
          console.log('모달떠야함');
        }}
      >
        <S.dashBoardsText>Dash Boards</S.dashBoardsText>
        <S.addBoxImg src={addBoxImg} alt="add box" />
      </S.dashBoardsWrapper>
      <S.dashBoardsList>
        {dashboards &&
          dashboards.map((dashboard, index) => (
            <S.dashBoardsItem
              key={`${index} ${dashboard.title}`}
              onClick={() => handleItemClick(index)}
              selected={itemIndex === index}
            >
              <ColorTile $size={'tiny'} $color={dashboard.color} />
              <span id="title">{dashboard.title}</span>
              {dashboard.crown && (
                <S.dashBoardCrown src={crownImg} alt="본인이 만든 대시보드일 때 생기는 왕관 아이콘" />
              )}
            </S.dashBoardsItem>
          ))}
      </S.dashBoardsList>
    </S.SidemenuContainer>
  );
}
