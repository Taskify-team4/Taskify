import React, { ChangeEvent, KeyboardEvent, ReactNode, useState } from 'react';
import * as S from '@components/inputs/modalInput/tagInput/TagInput.style';
import Chip from '@components/chips/Chip';

type TagInputProps = {
  children: ReactNode;
  id: string;
  type: string;
  placeholder: string;
  onRequired?: boolean;
  onChange: (tagArr: string[]) => void;
};

function TagInput({ children, id, type, placeholder, onRequired, onChange }: TagInputProps) {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const tagArr = [...tags, inputValue];
      setTags(tagArr);
      onChange(tagArr);
      setInputValue('');
    }
  };

  return (
    <S.TagInputContainer>
      <S.TagInputTitleContainer>
        <S.TagInputLabel htmlFor={id}>{children}</S.TagInputLabel>
        {onRequired && <S.TagInputRequired>*</S.TagInputRequired>}
      </S.TagInputTitleContainer>
      <S.TagInputContent>
        {tags.map((tag, index) => (
          <Chip.Square key={index} size={'large'} color={'orange'}>
            {tag}
          </Chip.Square>
        ))}

        <S.TagInput
          id={id}
          type={type}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyPress}
        />
      </S.TagInputContent>
    </S.TagInputContainer>
  );
}

export default TagInput;
