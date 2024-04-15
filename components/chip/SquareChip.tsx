import React, { ReactNode } from 'react';
import * as S from '@components/chip/chip.style';

export const SmallSquareChip = ({ children }: { children: ReactNode }) => {
  return <S.SquareChip $size="small">{children}</S.SquareChip>;
};

export const LargeSquareChip = ({ children }: { children: ReactNode }) => {
  return <S.SquareChip $size="large">{children}</S.SquareChip>;
};
