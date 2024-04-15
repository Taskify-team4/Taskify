import React from 'react';
import * as S from '@components/chip/chip.style';
import { TChipProps } from '@components/chip/chip.type';

const SquareChip = ({ children, color, size }: TChipProps) => {
  return (
    <S.SquareChip $color={color} $size={size}>
      {children}
    </S.SquareChip>
  );
};

export default SquareChip;
