import React from 'react';
import Button from '@components/buttons/Button';
import * as S from '@components/table/TableHeader.style';
import { HeaderProps } from './Table.type';

function TableHeader({ title, isInvite, isPagenation }: HeaderProps) {
  return (
    <S.Container>
      <S.HeaderTitle>{title}</S.HeaderTitle>
      <S.HeaderButtons>
        {isPagenation && (
          <S.Pagenation>
            <S.CurrentPage>1 페이지 중 1</S.CurrentPage>
            <Button.PagenationLeft />
            <Button.PagenationRight />
          </S.Pagenation>
        )}
        {isInvite && <Button.AddInvite>초대하기</Button.AddInvite>}
      </S.HeaderButtons>
    </S.Container>
  );
}

export default TableHeader;
