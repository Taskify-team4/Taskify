import React, { Key } from 'react';
import * as S from '@components/cards/Card.style';
import Image from 'next/image';
import Chip from '@components/chips/Chip';

// 리소스
import calendarIcon from '@public/icons/calendar.svg';
import { TCard } from '@components/pages/dashboard/Dashboard.type';

export type CardProps = {
  card: TCard;
};

function Card({ card }: CardProps) {
  return (
    <S.CardContainer>
      {card.imageUrl ? (
        <S.CardImageContainer>
          <S.CardImage src={card.imageUrl} alt="Card Image" fill />
        </S.CardImageContainer>
      ) : null}
      <S.CardContent>
        <S.CardTitle>{card.title}</S.CardTitle>
        <S.CardMeta>
          <S.CardChips>
            {card.tags.map((tag: string, idx: Key) => (
              <Chip.Square size={'small'} key={idx} color={tag.split(':')[1]}>
                {tag.split(':')[0]}
              </Chip.Square>
            ))}
          </S.CardChips>
          <S.CardDateOwner>
            <S.CardDate>
              <Image src={calendarIcon.src} alt="Calendar Icon" width={18} height={18} /> {card.dueDate}
            </S.CardDate>
            <S.CardOwner str={card.assignee.nickname[0]} profileImageUrl={card.assignee.profileImageUrl} />
          </S.CardDateOwner>
        </S.CardMeta>
      </S.CardContent>
    </S.CardContainer>
  );
}

export default Card;
