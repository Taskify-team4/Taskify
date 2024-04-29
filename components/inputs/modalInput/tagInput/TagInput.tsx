import React, { ChangeEvent, KeyboardEvent, ReactNode, useRef, useState } from 'react';
import * as S from '@components/inputs/modalInput/tagInput/TagInput.style';
import Chip from '@components/chips/Chip';
import { makeRandomChipColor } from '@utils/randomChipColor';
import { TagInputProps } from '@components/inputs/Input.type';

function TagInput({ children, id, type, placeholder, onRequired, onChange, defaultValue }: TagInputProps) {
  const [tags, setTags] = useState<string[]>(defaultValue || []);
  const [inputValue, setInputValue] = useState('');
  const inputValueRef = useRef<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
    inputValueRef.current = value;
  };

  const handleInputKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      const valueToAdd = inputValueRef.current.trim();
      if (valueToAdd !== '') {
        const randColor = makeRandomChipColor();
        const tagArr = [...tags, `${inputValue}:${randColor}`];
        setTags(tagArr);
        onChange(tagArr);
        setInputValue('');
      }
    } else if (e.key === 'Backspace' && inputValue === '' && tags.length > 0) {
      const newTags = tags.slice(0, -1);
      setTags(newTags);
      onChange(newTags);
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
          <Chip.Square key={index} size={'large'} color={tag.split(':')[1]}>
            {tag.split(':')[0]}
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
