import React from 'react';
import * as S from '@components/table/Table.style';
import TableHeader from '@components/table/TableHeader';
import TableList from '@components/table/TableList';
import MemberList from '@components/table/member/MemberList';
import { DashBoardMember, PagenationInfo } from '@components/pages/dashboard/dashboardId/edit.type';

function MemberTable({
  members,
  onDeleteClick,
  onNextClick,
  onPreviousClick,
  pageInfo,
}: {
  members: DashBoardMember[];
  onDeleteClick: (deleteId: number) => void;
  onNextClick?: () => void;
  onPreviousClick?: () => void;
  pageInfo?: PagenationInfo;
}) {
  return (
    <S.TableContainer>
      <TableHeader
        title="구성원"
        isPagenation
        onNextClick={onNextClick}
        onPreviousClick={onPreviousClick}
        pageInfo={pageInfo}
      />
      <TableList title="이름">
        <MemberList data={members} buttonText="삭제" onDeleteClick={onDeleteClick} />
      </TableList>
    </S.TableContainer>
  );
}

export default MemberTable;
