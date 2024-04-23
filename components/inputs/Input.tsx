import React, { ReactNode } from 'react';
import * as S from '@components/inputs/Input.style';

type InputProps = {
  children: ReactNode;
  id: string;
  type: string;
  inputType: string;
  placeholder: string;
  onChange: any;
  onError: any;
  errorMsg: string;
  defaultValue?: string;
};

// 이메일 형식 확인하는 정규식
export const emailRegex = /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

// 비밀번호 형식 확인하는 정규식
export const nicknameRegex = /^.{1,10}$/;

// 비밀번호 형식 확인하는 정규식
export const passwordRegex = /^(?=.*[A-Za-z]).{8,}$/;

function Input({ children, id, type, inputType, placeholder, onChange, onError, errorMsg, defaultValue }: InputProps) {
  const handleFocusInput = () => {
    onError('');
  };

  const handleBlurInput = (e: any) => {
    const typeVale = e.target.value;
    const type = inputType === 'text';

    if (typeVale === '' && (type || !type)) return;
    if (!typeVale.match(emailRegex) && type) {
      onError('이메일 형식으로 작성해 주세요.');
      return;
    }
    if (!typeVale.match(passwordRegex) && !type) {
      onError('8자 이상 작성해 주세요.');
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
