import React, { ReactNode } from 'react';
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
  const handleInputChange = (e: { target: { value: string } }) => {
    if (onChange) {
      onChange(e.target.value);
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
    </S.CommentInputContainer>
  );
}

export default CommentInput;
