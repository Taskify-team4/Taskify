import React from 'react';
import Image from 'next/image';
import * as S from '@components/pages/signup/Signup.style';
import logoImg from '@public/icons/logo_img.svg';
import logoTaskify from '@public/icons/logo_taskify.svg';
import TextInput from '@components/inputs/textInput/TextInput';
import PasswordInput from '@components/inputs/passwordInput/PasswordInput';

function Signup() {
  return (
    <S.SignupContainner>
      <S.SignupLogoContainner href={'/'}>
        <S.LogoImageWrap>
          <Image fill src={logoImg.src} alt="" />
        </S.LogoImageWrap>
        <S.SignupMarkWrap>
          <Image fill src={logoTaskify.src} alt="" />
        </S.SignupMarkWrap>
      </S.SignupLogoContainner>
      <S.SignupTitleMsg>첫 방문을 환영합니다!</S.SignupTitleMsg>
      <S.SignupInputContainer>
        <TextInput id="email" placeholder="이메일을 입력해 주세요">
          이메일
        </TextInput>
        <TextInput id="email" placeholder="닉네임을 입력해 주세요">
          닉네임
        </TextInput>
        <PasswordInput id="password" type="password" placeholder="8자 이상 입력해 주세요">
          비밀번호
        </PasswordInput>
        <PasswordInput id="password" type="password" placeholder="비밀번호를 한번 더 입력해 주세요">
          비밀번호 확인
        </PasswordInput>
        <S.SignupRuleWrap>
          <S.SignupCheckBox type="checkbox" />
          <S.SignupCheckBoxComment>이용약관에 동의합니다.</S.SignupCheckBoxComment>
        </S.SignupRuleWrap>
        <S.SignupBtn disabled>가입하기</S.SignupBtn>
      </S.SignupInputContainer>
      <S.CheckUserWrap>
        이미 가입하셨나요? <S.LoginPath href={'/login'}>로그인하기</S.LoginPath>
      </S.CheckUserWrap>
    </S.SignupContainner>
  );
}

export default Signup;
