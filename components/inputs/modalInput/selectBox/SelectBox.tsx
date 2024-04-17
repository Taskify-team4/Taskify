import React, { ReactNode } from 'react';
import * as S from '@components/inputs/modalInput/selectBox/SelectBox.style';
import Select from './Select';

type SelectBoxProps = {
  children: ReactNode;
  onData: string[];
  onType?: boolean;
};

function SelectBox({ children, onData, onType }: SelectBoxProps) {
  return (
    <S.SelectBoxContainer>
      <S.SelectBoxTitle>{children}</S.SelectBoxTitle>
      <Select onData={onData} onType={onType} />
    </S.SelectBoxContainer>
  );
}

export default SelectBox;
