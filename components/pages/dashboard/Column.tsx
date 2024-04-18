import Button from '@components/buttons/Button';
import Card from '@components/cards/Card';
import { CARD } from '@utils/testData';
import React from 'react';
import * as S from '@components/pages/dashboard/Column.style';
import { ColorTile } from '@components/chips/Chip.style';
import Image from 'next/image';
import settingIcon from '@public/icons/setting.svg';

function Column({}) {
  return (
    <S.ColumnContainer>
      <S.ColumnHeader>
        <S.TitleWrapper>
          <ColorTile $size={'tiny'} $color="purple" />
          <S.ColumnTitle>To Do</S.ColumnTitle>
          <S.CardsCount>{CARD.length}</S.CardsCount>
        </S.TitleWrapper>
        <Image src={settingIcon} width={24} height={24} alt="설정 아이콘" />
      </S.ColumnHeader>

      <Button.AddTodo />
      {CARD.map((card, idx) => (
        <li key={idx}>
          <Card {...card} />
        </li>
      ))}
    </S.ColumnContainer>
  );
}

export default Column;
