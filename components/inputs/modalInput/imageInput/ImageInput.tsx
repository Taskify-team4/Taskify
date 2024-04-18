import React from 'react';
import Image from 'next/image';
import * as S from '@components/inputs/modalInput/imageInput/ImageInput.style';
import addIcon from '@public/icons/add_violet.svg';

function ImageInput({ children }: any) {
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
