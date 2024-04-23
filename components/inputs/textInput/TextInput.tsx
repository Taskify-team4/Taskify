import React, { ReactNode, useState } from 'react';
import Input from '@components/inputs/Input';
import * as S from '@components/inputs/textInput/TextInput.style';

type TextInputProps = {
  children: ReactNode;
  id: string;
  placeholder: string;
  onChange?: any;
  defaultValue?: string;
};

function TextInput({ children, id, placeholder, onChange, defaultValue }: TextInputProps) {
  const [errorMsg, setErrorMsg] = useState('');

  return (
    <S.TextInputContainer>
      <S.TextInputWrapper>
        <Input
          id={id}
          type="text"
          inputType="text"
          placeholder={placeholder}
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
