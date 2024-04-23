import React from 'react';
import * as S from './LandingFooter.style';
import email from '@public/icons/email.svg';
import facebook from '@public/icons/facebook.svg';
import instagram from '@public/icons/instagram.svg';

function LandingFooter() {
  return (
    <S.LandingFooter>
      <S.CodeIT>©codeit - 2023</S.CodeIT>
      <S.Terms>
        <button>
          <S.Policy>Privacy Policy</S.Policy>
        </button>
        <button>
          <S.FAQ>FAQ</S.FAQ>
        </button>
      </S.Terms>
      <S.FooterIcons>
        <S.Icon src={email} alt="이메일" priority />
        <S.Icon src={facebook} alt="페이스북 아이콘" priority />
        <S.Icon src={instagram} alt="인스타그램 아이콘" priority />
      </S.FooterIcons>
    </S.LandingFooter>
  );
}

export default LandingFooter;
