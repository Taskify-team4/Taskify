import React, { ReactNode } from 'react';
import * as S from '@components/inputs/Input.style';

type InputProps = {
  children: ReactNode;
  id: string;
  type: string;
  placeholder: string;
  onChange: any;
};

function Input({ children, id, type, placeholder, onChange }: InputProps) {
  return (
    <S.InputContainer>
      <S.InputLabel htmlFor={id}>{children}</S.InputLabel>
      <S.Input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </S.InputContainer>
  );
}

export default Input;
