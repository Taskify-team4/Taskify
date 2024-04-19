import React from 'react';
import * as S from '@components/table/Table.style';
import TableHeader from '@components/table/TableHeader';
import TableList from '@components/table/TableList';
import MemberList from '@components/table/member/MemberList';
import { DashBoardMember } from '@utils/editDashboard/edit.type';

function MemberTable({ members, onDeleteClick }: { members: DashBoardMember[]; onDeleteClick: any }) {
  return (
    <S.TableContainer>
      <TableHeader title="구성원" isPagenation />
      <TableList title="이름">
        <MemberList data={members} buttonText="삭제" onDeleteClick={onDeleteClick} />
      </TableList>
    </S.TableContainer>
  );
}

export default MemberTable;
