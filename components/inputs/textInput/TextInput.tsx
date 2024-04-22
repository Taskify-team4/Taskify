import React, { ReactNode } from 'react';
import Input from '@components/inputs/Input';
import * as S from '@components/inputs/textInput/TextInput.style';

type TextInputProps = {
  children: ReactNode;
  id: string;
  placeholder: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  defaultValue?: string;
};

function TextInput({ children, id, placeholder, disabled, onChange, defaultValue }: TextInputProps) {
  return (
    <S.TextInputContainer>
      <S.TextInputWrapper>
        <Input id={id} type="text" placeholder={placeholder} disabled={disabled} onChange={onChange} defaultValue={defaultValue}>
          {children}
        </Input>
      </S.TextInputWrapper>
      {error && <S.ErrorMessage>ErrorMessage</S.ErrorMessage>}
    </S.TextInputContainer>
  );
}

export default TextInput;
