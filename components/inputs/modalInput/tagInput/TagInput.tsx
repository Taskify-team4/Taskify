import React, { ReactNode } from 'react';
import * as S from '@components/inputs/modalInput/tagInput/TagInput.style';
import Chip from '@components/chips/Chip';

type TagInputProps = {
  children: ReactNode;
  id: string;
  type: string;
  placeholder: string;
  onRequired?: boolean;
};

function TagInput({ children, id, type, placeholder, onRequired }: TagInputProps) {
  return (
    <S.TagInputContainer>
      <S.TagInputTitleContainer>
        <S.TagInputLabel htmlFor={id}>{children}</S.TagInputLabel>
        {onRequired && <S.TagInputRequired>*</S.TagInputRequired>}
      </S.TagInputTitleContainer>
      <S.TagInputContent>
        <Chip.Square size={'large'} color={'orange'}>
          Type
        </Chip.Square>
        <Chip.Square size={'large'} color={'blue'}>
          Neat.js
        </Chip.Square>
        <S.TagInput id={id} type={type} placeholder={placeholder} />
      </S.TagInputContent>
    </S.TagInputContainer>
  );
}

export default TagInput;
