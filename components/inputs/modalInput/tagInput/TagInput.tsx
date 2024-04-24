import React, { ReactNode, useState } from 'react';
import * as S from '@components/inputs/modalInput/tagInput/TagInput.style';
import Chip from '@components/chips/Chip';

type TagInputProps = {
  children: ReactNode;
  id: string;
  type: string;
  placeholder: string;
  onRequired?: boolean;
  tags: string[];
  setTags: () => {};
  setCardData: () => {};
};

function TagInput({ children, id, type, placeholder, onRequired, handleChangeTags }: TagInputProps) {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      setTags([...tags, inputValue]);
      handleChangeTags(tags);
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
          onKeyPress={handleInputKeyPress}
        />
      </S.TagInputContent>
    </S.TagInputContainer>
  );
}

export default TagInput;
