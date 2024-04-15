import React, { ReactNode } from 'react';
import * as S from './chip.style';

function Chip({ children, size }: { children: ReactNode; size: string }) {
  return <S.BasicChip $size={size}>{children}</S.BasicChip>;
}

export default Chip;
