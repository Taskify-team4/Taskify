import React from 'react';
import * as S from './Point2.style';
import point2 from '@public/images/point2.png';

function Point2() {
  return (
    <S.Point2 data-aos="fade-up" data-aos-offset="500">
      <S.Point2Title>Point2</S.Point2Title>
      <S.Point2Description>
        해야 할 일을
        <br /> 등록하세요
      </S.Point2Description>
      <S.Point2Img src={point2} alt="포인트2 이미지" />
    </S.Point2>
  );
}

export default Point2;
