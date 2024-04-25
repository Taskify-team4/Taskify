import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import * as S from '@components/pages/login/Login.style';
import logoImg from '@public/icons/logo_img.svg';
import logoTaskify from '@public/icons/logo_taskify.svg';
import TextInput from '@components/inputs/textInput/TextInput';
import PasswordInput from '@components/inputs/passwordInput/PasswordInput';
import { BackdropContainer } from '@components/modals/Modal';
import ModalBase from '@components/modals/ModalBase';
import PasswordModal from '@components/modals/inconsistent_password/Modal';

const BASE_URL = `https://sp-taskify-api.vercel.app/4-4`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  const handleSubmitLoginClick = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': 'include',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok) {
        const accessToken = result.accessToken;
        localStorage.setItem('accessToken', accessToken);
        router.push('/mydashboard');
      } else {
        setErrorMsg(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setOpenModal(errorMsg !== '');
  }, [errorMsg]);

  return (
    <S.LoginContainner>
      <S.LoginLogoContainner href={'/'}>
        <S.LogoImageWrap>
          <Image fill src={logoImg.src} alt="logoImg" priority />
        </S.LogoImageWrap>
        <S.LoginMarkWrap>
          <Image fill src={logoTaskify.src} alt="logoTaskify" />
        </S.LoginMarkWrap>
      </S.LoginLogoContainner>
      <S.LoginTitleMsg>오늘도 만나서 반가워요!</S.LoginTitleMsg>
      <S.LoginInputContainer onSubmit={handleSubmitLoginClick}>
        <TextInput id="email" placeholder="이메일을 입력해 주세요" email={email} onChange={setEmail}>
          이메일
        </TextInput>
        <PasswordInput
          id="password"
          type="password"
          placeholder="비밀번호를 입력해 주세요"
          password={password}
          onChange={setPassword}
        >
          비밀번호
        </PasswordInput>
        {openModal ? (
          <BackdropContainer>
            <ModalBase
              close={() => {
                setOpenModal((prev) => !prev);
                setErrorMsg('');
              }}
            >
              <PasswordModal errorMsg={errorMsg} />
            </ModalBase>
          </BackdropContainer>
        ) : (
          <></>
        )}
        <S.LoginBtn disabled={!email || !password}>로그인</S.LoginBtn>
      </S.LoginInputContainer>
      <S.CheckUserWrap>
        회원이 아니신가요? <S.SignupPath href={'/signup'}>회원가입하기</S.SignupPath>
      </S.CheckUserWrap>
    </S.LoginContainner>
  );
}

export default Login;
