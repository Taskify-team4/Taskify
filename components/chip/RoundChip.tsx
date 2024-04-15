import React, { ReactNode } from 'react';
import * as S from '@components/chip/chip.style';

export const SmallRoundChip = ({ children }: { children: ReactNode }) => {
  return <S.RoundChip $size="small">{children}</S.RoundChip>;
};

export const LargeRoundChip = ({ children }: { children: ReactNode }) => {
  return <S.RoundChip $size="large">{children}</S.RoundChip>;
};
