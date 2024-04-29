import React from 'react';
import * as S from '@components/table/TableList.style';
import { TableListsProps } from './Table.type';

function TableList({ children, title }: TableListsProps) {
  return (
    <S.TableListContainer>
      <S.ListTitle>{title}</S.ListTitle>
      {children}
    </S.TableListContainer>
  );
}

export default TableList;
