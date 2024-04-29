import React, { ReactNode, useState } from 'react';
import Input from '@components/inputs/Input';
import * as S from '@components/inputs/textInput/TextInput.style';
import { TextInputProps } from '../Input.type';

function TextInput({ children, id, placeholder, email, nickname, disabled, onChange, defaultValue }: TextInputProps) {
  const [errorMsg, setErrorMsg] = useState('');

  return (
    <S.TextInputContainer>
      <S.TextInputWrapper>
        <Input
          id={id}
          type="text"
          inputType="text"
          placeholder={placeholder}
          disabled={disabled}
          email={email}
          nickname={nickname}
          onChange={onChange}
          onError={setErrorMsg}
          errorMsg={errorMsg}
          defaultValue={defaultValue}
        >
          {children}
        </Input>
      </S.TextInputWrapper>
      {errorMsg && <S.ErrorMessage>{errorMsg}</S.ErrorMessage>}
    </S.TextInputContainer>
  );
}

export default TextInput;
