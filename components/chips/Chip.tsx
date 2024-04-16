import React from 'react';
import * as S from './Chip.style';
import { TChipProps } from '@components/chips/Chip.type';

function Chip({ children, size, color }: TChipProps) {
  return (
    <S.BasicChip $size={size} $color={color}>
      {children}
    </S.BasicChip>
  );
}

function RoundChip({ children, size, color }: TChipProps) {
  return (
    <S.RoundChip $size={size} $color={color}>
      {children}
    </S.RoundChip>
  );
}

function SquareChip({ children, size, color }: TChipProps) {
  return (
    <S.SquareChip $size={size} $color={color}>
      {children}
    </S.SquareChip>
  );
}

Chip.Round = RoundChip;
Chip.Square = SquareChip;

export default Chip;
