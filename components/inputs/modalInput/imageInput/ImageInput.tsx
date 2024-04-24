import React, { ChangeEvent, ReactNode, useState } from 'react';
import Image from 'next/image';
import * as S from '@components/inputs/modalInput/imageInput/ImageInput.style';
import addIcon from '@public/icons/add_violet.svg';

type ImageInputProps = {
  children: ReactNode;
  onChange: (uploadImgUrl: string) => void;
};

function ImageInput({ children, onChange }: ImageInputProps) {
  const [uploadImgUrl, setUploadImgUrl] = useState('');

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files || files.length === 0) {
      return;
    }
    const uploadFile = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(uploadFile);
    reader.onloadend = () => {
      const imageUrl = reader.result as string;
      setUploadImgUrl(imageUrl);
      onChange(imageUrl);
    };
  };

  return (
    <S.ImageInputContainer>
      <S.ImageInputLabel>{children}</S.ImageInputLabel>
      <S.ImageInputContentContainer>
        <label htmlFor="file">
          <S.ImageWrapper>
            <S.ImageContent>
              <Image fill src={addIcon.src} alt="addIcon" />
            </S.ImageContent>
          </S.ImageWrapper>
        </label>
        {uploadImgUrl && (
          <S.UploagImageWrapper>
            <Image src={uploadImgUrl} fill alt="업로드 이미지 미리보기" style={{ objectFit: 'contain' }} />
          </S.UploagImageWrapper>
        )}
        <input type="file" id="file" style={{ display: 'none' }} onChange={handleImageUpload} />
      </S.ImageInputContentContainer>
    </S.ImageInputContainer>
  );
}

export default ImageInput;
