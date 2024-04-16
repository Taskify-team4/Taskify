import React from 'react';
import * as S from './Chip.style';
import { TChipProps } from '@components/chip/Chip.type';

function Chip({ children, size, color }: TChipProps) {
  return (
    <S.BasicChip $size={size} $color={color}>
      {children}
    </S.BasicChip>
  );
}

export default Chip;
