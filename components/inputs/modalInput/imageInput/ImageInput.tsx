import React, { ReactNode } from 'react';
import Image from 'next/image';
import * as S from '@components/inputs/modalInput/imageInput/ImageInput.style';
import addIcon from '@public/icons/add_violet.svg';

type ImageInputProps = {
  children: ReactNode;
};

function ImageInput({ children }: ImageInputProps) {
  return (
    <S.ImageInputContainer>
      <S.ImageInputLabel>{children}</S.ImageInputLabel>
      <S.ImageWrapper>
        <S.ImageContent>
          <Image fill src={addIcon.src} alt="addIcon" />
        </S.ImageContent>
      </S.ImageWrapper>
    </S.ImageInputContainer>
  );
}

export default ImageInput;
