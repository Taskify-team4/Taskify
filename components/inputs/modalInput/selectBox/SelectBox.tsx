import React, { ReactNode } from 'react';
import * as S from '@components/inputs/modalInput/selectBox/SelectBox.style';
import Select from './Select';
import { SelectBoxProps } from '@components/inputs/Input.type';

function SelectBox({
  children,
  currentColumn,
  currentAssignee,
  columns,
  members,
  onType,
  onChangeColumn,
  onChangeAssignee,
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
      />
    </S.SelectBoxContainer>
  );
}

export default SelectBox;
