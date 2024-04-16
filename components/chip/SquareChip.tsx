import React from 'react';
import * as S from '@components/chip/Chip.style';
import { TChipProps } from '@components/chip/Chip.type';

const SquareChip = ({ children, color, size }: TChipProps) => {
  return (
    <S.SquareChip $color={color} $size={size}>
      {children}
    </S.SquareChip>
  );
};

export default SquareChip;
