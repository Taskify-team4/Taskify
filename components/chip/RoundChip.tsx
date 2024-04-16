import React from 'react';
import * as S from '@components/chip/Chip.style';
import { TChipProps } from '@components/chip/Chip.type';

const RoundChip = ({ children, color, size }: TChipProps) => {
  return (
    <S.RoundChip $color={color} $size={size}>
      {children}
    </S.RoundChip>
  );
};

export default RoundChip;
