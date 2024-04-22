import React, { ChangeEvent, ReactNode } from 'react';
import * as S from '@components/inputs/modalInput/ModalInput.style';

type ModalInputProps = {
  children: ReactNode;
  id: string;
  type: string;
  placeholder: string;
  onRequired?: boolean;
  onChange?: (title: string) => void;
};

function ModalInput({ children, id, type, placeholder, onRequired, onChange }: ModalInputProps) {
  const handleInputChange = (e: { target: { value: string } }) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <S.ModalInputContainer>
      <S.ModalInputTitleContainer>
        <S.ModalInputLabel htmlFor={id}>{children}</S.ModalInputLabel>
        {onRequired && <S.ModalInputRequired>*</S.ModalInputRequired>}
      </S.ModalInputTitleContainer>
      <S.ModalInput id={id} type={type} placeholder={placeholder} onChange={handleInputChange} />
    </S.ModalInputContainer>
  );
}

export default ModalInput;
