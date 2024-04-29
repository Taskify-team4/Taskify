import React, { ReactNode, useState } from 'react';
import * as S from '@components/inputs/modalInput/commentInput/CommentInput.style';
import { CommentInputProps } from '@components/inputs/Input.type';

function CommentInput({
  children,
  placeholder,
  onRequired,
  onModal,
  onChange,
  onClick,
  defaultValue,
  className,
}: CommentInputProps) {
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
    <S.CommentInputContainer className={className}>
      <S.CommentInputTitleContainer>
        <S.CommentInputLabel>{children}</S.CommentInputLabel>
        {onRequired && <S.CommentInputRequired>*</S.CommentInputRequired>}
      </S.CommentInputTitleContainer>
      <S.CommentInput placeholder={placeholder} onChange={handleInputChange} defaultValue={defaultValue} />
      {!onModal && <S.CommentBtn onClick={onClick}>입력</S.CommentBtn>}
      <p style={{ color: 'var(--red)', fontSize: '13px' }}>{error}</p>
    </S.CommentInputContainer>
  );
}

export default CommentInput;
