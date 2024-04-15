import React, { ReactNode } from 'react';
import * as S from './chip.style';

function Chip({ children }: { children: ReactNode }) {
  return <S.BasicChip>{children}</S.BasicChip>;
}

export default Chip;
