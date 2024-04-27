import React, { ReactNode } from 'react';
import * as S from '@components/inputs/modalInput/selectBox/SelectBox.style';
import Select, { TMember } from './Select';
import { TColumn } from '@pages/dashboard/Dashboard.type';

type SelectBoxProps = {
  children: ReactNode;
  members?: TMember[];
  columns?: TColumn[];
  onType?: boolean;
  onModify?: boolean;
  onChangeColumn?: (id: number) => void;
  onChangeAssignee?: (id: number) => void;
};

function SelectBox({ children, columns, members, onType, onChangeColumn, onChangeAssignee }: SelectBoxProps) {
  return (
    <S.SelectBoxContainer>
      <S.SelectBoxTitle>{children}</S.SelectBoxTitle>
      <Select
        columns={columns}
        members={members}
        onType={onType}
        onChangeAssignee={onChangeAssignee}
        onChangeColumn={onChangeColumn}
      />
    </S.SelectBoxContainer>
  );
}

export default SelectBox;
