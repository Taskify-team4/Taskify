import React, { ReactNode, useState } from 'react';
import Image from 'next/image';
import Input from '@components/inputs/Input';
import * as S from '@components/inputs/passwordInput/PaswwrodInput.style';
import { PasswordInputProps } from '../Input.type';

function PasswordInput({
  children,
  id,
  placeholder,
  password,
  passwordCheck,
  passwordCompare,
  onChange,
  inputValue,
}: PasswordInputProps) {
  const [isValue, setIsValue] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleValueChange = () => {
    setIsValue(!isValue);
  };

  return (
    <S.PasswordInputContainer>
      <S.PasswordInputContent>
        <Input
          id={id}
          type={isValue ? 'text' : 'password'}
          inputType="password"
          placeholder={placeholder}
          password={password}
          passwordCheck={passwordCheck}
          passwordCompare={passwordCompare}
          onChange={onChange}
          onError={setErrorMsg}
          errorMsg={errorMsg}
          inputValue={inputValue}
        >
          {children}
        </Input>
        <S.ImageWrapper>
          <Image
            fill
            src={isValue ? '/icons/eye_on.svg' : '/icons/eye_off.svg'}
            alt={isValue ? 'eyeOnIcon' : 'eyeOffIcon'}
            onClick={handleValueChange}
          />
        </S.ImageWrapper>
      </S.PasswordInputContent>
      {errorMsg && <S.ErrorMessage>{errorMsg}</S.ErrorMessage>}
    </S.PasswordInputContainer>
  );
}

export default PasswordInput;
