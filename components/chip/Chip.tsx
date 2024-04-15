import React from 'react';
import * as S from './chip.style';
import { TChipProps } from '@components/chip/chip.type';

const Chip = ({ children, size, color }: TChipProps) => {
  return (
    <S.BasicChip $size={size} $color={color}>
      {children}
    </S.BasicChip>
  );
};

export default Chip;
