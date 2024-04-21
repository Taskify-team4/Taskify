import React, { ReactNode, useState } from 'react';
import Input from '@components/inputs/Input';
import * as S from '@components/inputs/textInput/TextInput.style';

type TextInputProps = {
  children: ReactNode;
  id: string;
  placeholder: string;
  disabled?: boolean;
};

function TextInput({ children, id, placeholder, disabled }: TextInputProps) {
  const [error, setError] = useState(false);
  return (
    <S.TextInputContainer>
      <S.TextInputWrapper>
        <Input id={id} type="text" placeholder={placeholder} disabled={disabled}>
          {children}
        </Input>
      </S.TextInputWrapper>
      {error && <S.ErrorMessage>ErrorMessage</S.ErrorMessage>}
    </S.TextInputContainer>
  );
}

export default TextInput;
