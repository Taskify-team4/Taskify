import React from 'react';
import Image from 'next/image';
import * as S from '@components/pages/login/Login.style';
import logoImg from '@public/icons/logo_img.svg';
import logoTaskify from '@public/icons/logo_taskify.svg';
import TextInput from '@components/inputs/textInput/TextInput';
import PasswordInput from '@components/inputs/passwordInput/PasswordInput';

function Login() {
  return (
    <S.LoginContainner>
      <S.LoginLogoContainner href={'/'}>
        <S.LogoImageWrap>
          <Image fill src={logoImg.src} alt="" />
        </S.LogoImageWrap>
        <S.LoginMarkWrap>
          <Image fill src={logoTaskify.src} alt="" />
        </S.LoginMarkWrap>
      </S.LoginLogoContainner>
      <S.LoginTitleMsg>오늘도 만나서 반가워요!</S.LoginTitleMsg>
      <S.LoginInputContainer>
        <TextInput id="email" placeholder="이메일을 입력해 주세요">
          이메일
        </TextInput>
        <PasswordInput id="password" type="password" placeholder="비밀번호를 입력해 주세요">
          비밀번호
        </PasswordInput>
        <S.LoginBtn disabled>로그인</S.LoginBtn>
      </S.LoginInputContainer>
      <S.CheckUserWrap>
        회원이 아니신가요? <S.SignupPath href={'/signup'}>회원가입하기</S.SignupPath>
      </S.CheckUserWrap>
    </S.LoginContainner>
  );
}

export default Login;
