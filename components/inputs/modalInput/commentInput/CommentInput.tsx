import React, { ReactNode } from 'react';
import * as S from '@components/inputs/modalInput/commentInput/CommentInput.style';

type CommentInputProps = {
  children: ReactNode;
  placeholder?: string;
  onRequired?: boolean;
  onModal?: boolean;
  onChange?: (description: string) => void;
  onClick?: () => void;
  defaultValue?: string;
  className?: string;
};

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
        <S.CommentInputLabel onModal={onModal}>{children}</S.CommentInputLabel>
        {onRequired && <S.CommentInputRequired>*</S.CommentInputRequired>}
      </S.CommentInputTitleContainer>
      <S.CommentInput
        placeholder={placeholder}
        onModal={onModal}
        onChange={handleInputChange}
        defaultValue={defaultValue}
      />
      {!onModal && <S.CommentBtn onClick={onClick}>입력</S.CommentBtn>}
    </S.CommentInputContainer>
  );
}

export default CommentInput;
