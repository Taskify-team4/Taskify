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

function SelectBox({
  children,
  currentColumn,
  currentAssignee,
  columns,
  members,
  onType,
  onChangeColumn,
  onChangeAssignee,
  selectedColumn,
  setSelectedColumn,
}: SelectBoxProps) {
  return (
    <S.SelectBoxContainer>
      <S.SelectBoxTitle>{children}</S.SelectBoxTitle>
      <Select
        currentColumn={currentColumn}
        currentAssignee={currentAssignee}
        columns={columns}
        members={members}
        onType={onType}
        onChangeAssignee={onChangeAssignee}
        onChangeColumn={onChangeColumn}
        selectedColumn={selectedColumn}
        setSelectedColumn={setSelectedColumn}
      />
    </S.SelectBoxContainer>
  );
}

export default SelectBox;
