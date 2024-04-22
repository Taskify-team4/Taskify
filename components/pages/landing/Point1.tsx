import React, { useEffect } from 'react';
import * as S from './Point1.style';
import point1 from '@public/images/point1.png';

function Point1() {
  return (
    <S.Point1 data-aos="fade-up" data-aos-offset="500">
      <S.Point1Title>Point1</S.Point1Title>
      <S.Point1Description>
        일의 우선순위를
        <br /> 관리하세요
      </S.Point1Description>
      <S.Point1Img src={point1} alt="포인트1 이미지" />
    </S.Point1>
  );
}

export default Point1;
