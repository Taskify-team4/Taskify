import React, { ReactNode, useState } from 'react';
import * as S from '@components/inputs/Input.style';
import { emailRegex, nicknameRegex, passwordRegex } from '@utils/dataRegex';

type InputProps = {
  children: ReactNode;
  id: string;
  type: string;
  inputType: string;
  placeholder: string;
  email?: string;
  nickname?: string;
  password?: string;
  passwordCheck?: string;
  passwordCompare?: boolean;
  onChange: any;
  onError: any;
  errorMsg: string;
  defaultValue?: string;
};

function Input({
  children,
  id,
  type,
  placeholder,
  email,
  nickname,
  password,
  passwordCheck,
  passwordCompare,
  onChange,
  onError,
  errorMsg,
  defaultValue,
}: InputProps) {
  const handleFocusInput = () => {
    onError('');
  };

  const handleBlurInput = () => {
    const emailId = id === 'email';
    const nicknameId = id === 'nickname';
    const passwordId = id === 'password';
    const passwordCheckId = id === 'passwordCheck';

    if (email === '' || nickname === '' || password === '' || passwordCheck === '') return;

    if (!email?.match(emailRegex) && emailId) {
      onError('이메일 형식으로 작성해 주세요.');
      return;
    }

    if (!nickname?.match(nicknameRegex) && nicknameId) {
      onError('열 자 이하로 작성해 주세요.');
      return;
    }

    if (!password?.match(passwordRegex) && passwordId) {
      onError('8자 이상 작성해 주세요.');
      return;
    }
    console.log(password !== passwordCheck);
    if (passwordCompare && passwordCheckId) {
      onError('비밀번호가 일치하지 않습니다.');
      return;
    }
  };

  return (
    <S.InputContainer>
      <S.InputLabel htmlFor={id}>{children}</S.InputLabel>
      <S.Input
        id={id}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        onFocus={handleFocusInput}
        onBlur={handleBlurInput}
        $errorMsg={errorMsg}
      />
    </S.InputContainer>
  );
}

export default Input;
