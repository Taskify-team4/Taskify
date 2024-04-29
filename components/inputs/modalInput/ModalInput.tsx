import React, { ReactNode, useState } from 'react';
import * as S from '@components/inputs/modalInput/ModalInput.style';
import { ModalInputProps } from '../Input.type';

function ModalInput({ children, id, type, placeholder, onRequired, onChange, defaultValue }: ModalInputProps) {
  const [error, setError] = useState('');
  const handleInputChange = (e: { target: { value: string } }) => {
    if (onChange) {
      onChange(e.target.value);
    }
    if (e.target.value.trim() === '') {
      setError(`${children}을 작성해 주세요.`);
    } else {
      setError('');
    }
  };

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
        onChange={handleInputChange}
        defaultValue={defaultValue}
      />
      <p style={{ color: 'var(--red)', fontSize: '13px' }}>{error}</p>
    </S.ModalInputContainer>
  );
}

export default ModalInput;
