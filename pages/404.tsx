import React from 'react';
import * as S from '@components/pages/404/404.style';

function NotFound() {
  return (
    <S.NotFoundContainer>
      <S.NotFoundTitle>404</S.NotFoundTitle>
      <S.NotFoundDesc>페이지가 없거나 접근할 수 없어요</S.NotFoundDesc>
      <S.NotFoundDesc2>입력하신 주소가 맞는지 다시 확인 주세요</S.NotFoundDesc2>
      <S.NotFoundBtn href={'/'}>홈으로</S.NotFoundBtn>
    </S.NotFoundContainer>
  );
}

export default NotFound;
