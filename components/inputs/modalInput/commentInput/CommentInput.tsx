import React, { ReactNode } from 'react';
import * as S from '@components/inputs/modalInput/commentInput/CommentInput.style';

type CommentInputProps = {
  children: ReactNode;
  placeholder: string;
  onRequired?: boolean;
  onModal?: boolean;
  onChange?: (description: string) => void;
};

function CommentInput({ children, placeholder, onRequired, onModal, onChange }: CommentInputProps) {
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
      {!onModal && <S.CommentBtn>입력</S.CommentBtn>}
    </S.CommentInputContainer>
  );
}

export default CommentInput;
