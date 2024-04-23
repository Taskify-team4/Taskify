import React, { ReactNode, useState } from 'react';
import Image from 'next/image';
import Input from '@components/inputs/Input';
import * as S from '@components/inputs/passwordInput/PaswwrodInput.style';

type PasswordInputProps = {
  children: ReactNode;
  id: string;
  type: string;
  placeholder: string;
  onChange?: any;
};

function PasswordInput({ children, id, placeholder, onChange }: PasswordInputProps) {
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
          onChange={onChange}
          onError={setErrorMsg}
          errorMsg={errorMsg}
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
