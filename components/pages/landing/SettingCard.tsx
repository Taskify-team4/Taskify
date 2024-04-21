import React from 'react';
import * as S from './SettingCard.style';
import { SettingProps } from './Landing.type';

function SettingCard({ img, title, description, className }: SettingProps) {
  return (
    <S.SettingCard className={className}>
      <S.SettingImgWrap>
        <S.SettingImg src={img} alt="${img} 이미지" />
      </S.SettingImgWrap>
      <S.SettingTextWrap>
        <S.SettingTitle>{title}</S.SettingTitle>
        <S.SettingDescription>{description}</S.SettingDescription>
      </S.SettingTextWrap>
    </S.SettingCard>
  );
}

export default SettingCard;
