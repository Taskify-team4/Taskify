import React, { useState } from 'react';
import Image from 'next/image';
import * as S from '@components/pages/signup/Signup.style';
import logoImg from '@public/icons/logo_img.svg';
import logoTaskify from '@public/icons/logo_taskify.svg';
import TextInput from '@components/inputs/textInput/TextInput';
import PasswordInput from '@components/inputs/passwordInput/PasswordInput';

const BASE_URL = `https://sp-taskify-api.vercel.app/4-4`;

function Signup() {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [checkBox, setCheckBox] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCheckBoxChange = () => {
    setCheckBox(!checkBox);
  };

  const handleSubmitSignupClick = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      email: email,
      nickname: nickname,
      password: password,
    };

    try {
      const response = await fetch(`${BASE_URL}/users`, {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': 'include',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok) {
        console.log(result);
        // router.push('/dashboard/:dashboardId');
      } else {
        setErrorMsg(result.message);
        console.log(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const TextInputList = [
    { id: 'email', placeholder: '이메일을 입력해 주세요', onChange: setEmail, label: '이메일' },
    { id: 'nickname', placeholder: '닉네임을 입력해 주세요', onChange: setNickname, label: '닉네임' },
  ];

  const passwordInputList = [
    {
      id: 'password',
      type: 'password',
      placeholder: '8자 이상 입력해 주세요',
      onChange: setPassword,
      label: '비밀번호',
    },
    {
      id: 'passwordCheck',
      type: 'password',
      placeholder: '비밀번호를 한번 더 입력해 주세요',
      onChange: setPasswordCheck,
      label: '비밀번호 확인',
    },
  ];

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
      <S.SignupInputContainer onSubmit={handleSubmitSignupClick}>
        {TextInputList.map((inputItem) => (
          <TextInput
            key={inputItem.id}
            id={inputItem.id}
            placeholder={inputItem.placeholder}
            onChange={inputItem.onChange}
          >
            {inputItem.label}
          </TextInput>
        ))}
        {passwordInputList.map((inputItem) => (
          <PasswordInput
            key={inputItem.id}
            id={inputItem.id}
            type={inputItem.type}
            placeholder={inputItem.placeholder}
            onChange={inputItem.onChange}
          >
            {inputItem.label}
          </PasswordInput>
        ))}
        <S.SignupRuleWrap>
          <S.SignupCheckBox type="checkbox" onChange={handleCheckBoxChange} />
          <S.SignupCheckBoxComment>이용약관에 동의합니다.</S.SignupCheckBoxComment>
        </S.SignupRuleWrap>
        <S.SignupBtn disabled={!email || !password || !passwordCheck || !checkBox}>가입하기</S.SignupBtn>
      </S.SignupInputContainer>
      <S.CheckUserWrap>
        이미 가입하셨나요? <S.LoginPath href={'/login'}>로그인하기</S.LoginPath>
      </S.CheckUserWrap>
    </S.SignupContainner>
  );
}

export default Signup;
