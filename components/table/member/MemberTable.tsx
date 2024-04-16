import React from 'react';
import * as S from '@components/table/Table.style';
import TableHeader from '@components/table/TableHeader';
import TableList from '@components/table/TableList';
import MemberList from '@components/table/member/MemberList';
import { USER_LIST } from '@utils/testData';

function MemberTable() {
  return (
    <S.TableContainer>
      <TableHeader title="구성원" isPagenation />
      <TableList title="이름">
        <MemberList data={USER_LIST} buttonText="삭제" />
      </TableList>
    </S.TableContainer>
  );
}

export default MemberTable;
