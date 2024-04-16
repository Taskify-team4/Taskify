import React from 'react';
import * as S from '@components/cards/Card.style';
import { SquareChip } from '@components/chip/Chip.style';
import calendarIcon from '@public/icons/calendar.svg';
import Image from 'next/image';
import sampleCardImg from '@public/images/img1.png';

function Card() {
  return (
    <S.CardContainer>
      <S.CardImage>
        <Image src={sampleCardImg.src} alt={'sample'} fill />
      </S.CardImage>
      <S.CardTitle>새로운 일정 관리 Taskify</S.CardTitle>
      <S.CardChips>
        <SquareChip $size={'small'} $color={'orange'}>
          프로젝트
        </SquareChip>
        <SquareChip $size={'small'} $color={'pink'}>
          백엔드
        </SquareChip>
      </S.CardChips>
      <S.CardDate>
        <Image src={calendarIcon.src} alt={'calendarIcon'} width={18} height={18} /> 2024.12.12
      </S.CardDate>
    </S.CardContainer>
  );
}

export default Card;
