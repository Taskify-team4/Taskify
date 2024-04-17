import React, { ReactNode } from 'react';
import * as S from '@components/inputs/modalInput/commentInput/CommentInput.style';

type CommentInputProps = {
  children: ReactNode;
  id: string;
  placeholder: string;
};

function CommentInput({ children, id, placeholder }: CommentInputProps) {
  return (
    <S.CommentInputContainer>
      <S.CommentInputLabel htmlFor={id}>{children}</S.CommentInputLabel>
      <S.CommentInput id={id} placeholder={placeholder} />
      <S.CommentBtn>입력</S.CommentBtn>
    </S.CommentInputContainer>
  );
}

export default CommentInput;
