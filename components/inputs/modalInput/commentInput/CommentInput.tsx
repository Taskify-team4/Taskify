import React, { ReactNode, useState } from 'react';
import * as S from '@components/inputs/modalInput/commentInput/CommentInput.style';
import { useDashContext } from '@contexts/dashContext';
import { postNewComment } from '@pages/dashboard/api';

type CommentInputProps = {
  children: ReactNode;
  placeholder: string;
  onRequired?: boolean;
  onModal?: boolean;
  onChange?: (description: string) => void;
};

function CommentInput({ children, placeholder, onRequired, onModal, onChange, onClick }: CommentInputProps) {
  const handleInputChange = (e: { target: { value: string } }) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <S.CommentInputContainer>
      <S.CommentInputTitleContainer>
        <S.CommentInputLabel onModal={onModal}>{children}</S.CommentInputLabel>
        {onRequired && <S.CommentInputRequired>*</S.CommentInputRequired>}
      </S.CommentInputTitleContainer>
      <S.CommentInput placeholder={placeholder} onModal={onModal} onChange={handleInputChange} />
      {!onModal && <S.CommentBtn onClick={onClick}>입력</S.CommentBtn>}
    </S.CommentInputContainer>
  );
}

export default CommentInput;
