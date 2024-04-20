import React, { ReactNode } from 'react';
import * as S from '@components/inputs/modalInput/selectBox/SelectBox.style';
import Select from './Select';

type SelectBoxProps = {
  children: ReactNode;
  onData: string[];
  onType?: boolean;
  onModify?: boolean;
};

function SelectBox({ children, onData, onType, onModify }: SelectBoxProps) {
  return (
    <S.SelectBoxContainer>
      <S.SelectBoxTitle>{children}</S.SelectBoxTitle>
      <Select onData={onData} onType={onType} onModify={onModify} />
    </S.SelectBoxContainer>
  );
}

export default SelectBox;
