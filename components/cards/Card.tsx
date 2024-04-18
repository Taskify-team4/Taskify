import React from 'react';
import * as S from '@components/cards/Card.style';
import Image from 'next/image';
import Chip from '@components/chips/Chip';

// 리소스
import calendarIcon from '@public/icons/calendar.svg';
import { TColorKey } from '@components/chips/Chip.type';

type TagProps = {
  text: string;
  color: TColorKey;
};

export type CardProps = {
  imageUrl: string | null;
  title: string;
  tags: TagProps[];
  dueDate: string;
  assignee: { nickname: string };
};

function Card(props: CardProps) {
  return (
    <S.CardContainer>
      {props.imageUrl ? (
        <S.CardImageContainer>
          <S.CardImage src={props.imageUrl} alt="Card Image" fill />
        </S.CardImageContainer>
      ) : null}
      <S.CardContent>
        <S.CardTitle>{props.title}</S.CardTitle>
        <S.CardMeta>
          <S.CardChips>
            {props.tags.map((tag) => (
              <Chip.Square size={'small'} color={tag.color}>
                {tag.text}
              </Chip.Square>
            ))}
          </S.CardChips>
          <S.CardDateOwner>
            <S.CardDate>
              <Image src={calendarIcon.src} alt="Calendar Icon" width={18} height={18} /> {props.dueDate}
            </S.CardDate>
            <S.CardOwner str={props.assignee.nickname[0]} />
          </S.CardDateOwner>
        </S.CardMeta>
      </S.CardContent>
    </S.CardContainer>
  );
}

export default Card;
