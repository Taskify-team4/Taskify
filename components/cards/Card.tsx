import React from 'react';
import * as S from '@components/cards/Card.style';
import Image from 'next/image';
import Chip from '@components/chips/Chip';

// 리소스
import calendarIcon from '@public/icons/calendar.svg';
import { TColorKey } from '@components/chips/Chip.type';

type ChipProps = {
  text: string;
  color: TColorKey;
};

export type CardProps = {
  image: string | null;
  title: string;
  chips: ChipProps[];
  date: string;
};

function Card(props: CardProps) {
  return (
    <S.CardContainer>
      {props.image ? (
        <S.CardImage>
          <Image src={props.image} alt={'Card Image'} fill />
        </S.CardImage>
      ) : null}
      <S.CardContent>
        <S.CardTitle>{props.title}</S.CardTitle>
        <S.CardMeta>
          <S.CardChips>
            {props.chips.map((chip) => (
              <Chip.Square size={'small'} color={chip.color}>
                {chip.text}
              </Chip.Square>
            ))}
          </S.CardChips>
          <S.CardDate>
            <Image src={calendarIcon.src} alt={'calendarIcon'} width={18} height={18} /> {props.date}
          </S.CardDate>
        </S.CardMeta>
      </S.CardContent>
    </S.CardContainer>
  );
}

export default Card;
