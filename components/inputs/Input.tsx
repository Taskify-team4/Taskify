import React, { ReactNode, useState } from 'react';
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
export const passwordRegex = /^(?=.*[0-9a-zA-Z]).{8,}$/;

function Input({ children, id, type, inputType, placeholder, onChange, onError, errorMsg, defaultValue }: InputProps) {
  const [value, setValue] = useState('');
  const [valueCheck, setValueCheck] = useState('');

  const handleFocusInput = () => {
    onError('');
  };

  const handleChangeInput = (e: any) => {
    const newValue = e.target.value;

    if (id === 'passwordCheck') {
      setValueCheck(newValue);
    } else {
      setValue(newValue);
      onChange(newValue);
    }
  };
  console.log('value', value);
  console.log('valueCheck', valueCheck);
  console.log('비교', value === valueCheck);

  const handleBlurInput = (e: any) => {
    const typeValue = e.target.value;
    const type = inputType === 'text';
    const emailId = id === 'email';
    const nicknameId = id === 'nickname';
    const passwordId = id === 'password';
    const passwordCheckId = id === 'passwordCheck';

    if (typeValue === '' && (type || !type)) return;
    if (!typeValue.match(emailRegex) && emailId) {
      onError('이메일 형식으로 작성해 주세요.');
      return;
    }
    if (!typeValue.match(nicknameRegex) && nicknameId) {
      onError('열 자 이하로 작성해 주세요.');
      return;
    }
    if (!typeValue.match(passwordRegex) && passwordId) {
      onError('8자 이상 작성해 주세요.');
      return;
    }
    if (value !== valueCheck && passwordCheckId) {
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
        // onChange={(e) => {
        //   onChange(e.target.value);
        // }}
        onChange={handleChangeInput}
        onFocus={handleFocusInput}
        onBlur={handleBlurInput}
        $errorMsg={errorMsg}
      />
    </S.InputContainer>
  );
}

export default Input;
