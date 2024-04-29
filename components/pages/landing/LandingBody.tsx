import React from 'react';
import * as S from './LandingBody.style';
import Point1 from './Point1';
import Point2 from './Point2';
import Settings from './Settings';

function LandingBody() {
  return (
    <S.LandingBody>
      <Point1 />
      <Point2 />
      <Settings />
    </S.LandingBody>
  );
}

export default LandingBody;
