import React, { ReactNode } from 'react';
import * as S from '@components/inputs/modalInput/ModalInput.style';

type ModalInputProps = {
  children: ReactNode;
  id: string;
  type: string;
  placeholder: string;
  onRequired?: boolean;
  onChange?: any;
};

function ModalInput({ children, id, type, placeholder, onRequired, onChange }: ModalInputProps) {
  return (
    <S.ModalInputContainer>
      <S.ModalInputTitleContainer>
        <S.ModalInputLabel htmlFor={id}>{children}</S.ModalInputLabel>
        {onRequired && <S.ModalInputRequired>*</S.ModalInputRequired>}
      </S.ModalInputTitleContainer>
      <S.ModalInput
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </S.ModalInputContainer>
  );
}

export default ModalInput;
