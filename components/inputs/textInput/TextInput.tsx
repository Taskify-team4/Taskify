import React, { ReactNode, useState } from 'react';
import Input from '@components/inputs/Input';
import * as S from '@components/inputs/textInput/TextInput.style';

type TextInputProps = {
  children: ReactNode;
  id: string;
  type: string;
  placeholder: string;
};

function TextInput({ children, id, placeholder }: TextInputProps) {
  return (
    <S.TextInputContainer>
      <S.TextInputWrapper>
        <Input id={id} type="text" placeholder={placeholder}>
          {children}
        </Input>
      </S.TextInputWrapper>
      <S.ErrorMessage>ErrorMessage</S.ErrorMessage>
    </S.TextInputContainer>
  );
}

export default TextInput;
