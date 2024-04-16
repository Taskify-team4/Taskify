import React from 'react';
import * as S from '@components/inputs/modalInput/selectBox/SelectBox.style';
import Select from './Select';

function SelectBox({ children }: any) {
  return (
    <S.SelectBoxContainer>
      <S.SelectBoxTitle>{children}</S.SelectBoxTitle>
      <Select />
    </S.SelectBoxContainer>
  );
}

export default SelectBox;
