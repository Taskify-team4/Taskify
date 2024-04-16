import React from 'react';
import * as S from '@components/table/Table.style';
import TableHeader from '../TableHeader';
import TableList from '../TableList';
import { USER_LIST } from '@utils/testData';
import MemberList from './MemberList';

function MemberTable() {
  return (
    <S.Container>
      <TableHeader title="구성원" isPagenation />
      <TableList title="이름">
        <MemberList data={USER_LIST} buttonText="삭제" />
      </TableList>
    </S.Container>
  );
}

export default MemberTable;
