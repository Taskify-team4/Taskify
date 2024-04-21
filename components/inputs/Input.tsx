import React, { ReactNode } from 'react';
import * as S from '@components/inputs/Input.style';

type InputProps = {
  children: ReactNode;
  id: string;
  type: string;
  placeholder: string;
  disabled?: boolean;
};

function Input({ children, id, type, placeholder, disabled }: InputProps) {
  return (
    <S.InputContainer>
      <S.InputLabel htmlFor={id}>{children}</S.InputLabel>
      <S.Input id={id} type={type} placeholder={placeholder} disabled={disabled} />
    </S.InputContainer>
  );
}

export default Input;
