import * as S from '@components/table/Table.style';
import Image from 'next/image';
import EmptyImg from '@public/icons/no_invite.svg';
import React, { ReactNode } from 'react';

function Empty({ children, isMyDashboard }: { children: ReactNode; isMyDashboard: boolean }) {
  return (
    <S.EmptyInvitation $isMyDashboard={isMyDashboard}>
      <Image src={EmptyImg} alt="비어있는 콘텐츠" width={100} height={100} />
      <S.EmptyText>{children}</S.EmptyText>
    </S.EmptyInvitation>
  );
}

export default Empty;
