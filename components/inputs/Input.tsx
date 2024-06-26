import React, { ReactNode, useState } from 'react';
import * as S from '@components/inputs/Input.style';
import { emailRegex, nicknameRegex, passwordRegex } from '@utils/dataRegex';
import { InputProps } from './Input.type';

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
  disabled,
  defaultValue,
  inputValue,
}: InputProps) {
  const handleFocusInput = () => {
    onError('');
  };

  const handleBlurInput = () => {
    const emailId = id === 'email';
    const nicknameId = id === 'nickname';
    const passwordId = id === 'password';
    const newPasswordId = id === 'newPassword';
    const newPasswordCheckID = id === 'newPasswordCheck';
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

    if (!password?.match(passwordRegex) && (passwordId || newPasswordId)) {
      onError('8자 이상 작성해 주세요.');
      return;
    }

    if (passwordCompare && (passwordCheckId || newPasswordCheckID)) {
      onError('비밀번호가 일치하지 않습니다.');
      return;
    }
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
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
        onChange={handleChangeInput}
        onFocus={handleFocusInput}
        onBlur={handleBlurInput}
        $errorMsg={errorMsg}
        value={inputValue}
        disabled={disabled}
      />
    </S.InputContainer>
  );
}

export default Input;
