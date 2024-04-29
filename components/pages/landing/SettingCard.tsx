import React from 'react';
import * as S from './SettingCard.style';
import { SettingProps } from './Landing.type';

function SettingCard({ img, title, description, className }: SettingProps) {
  return (
    <S.SettingCard className={className} data-aos="zoom-in" data-aos-offset="400">
      <S.SettingImgWrap>
        <S.SettingImg src={img} alt="셋팅 카드 이미지" priority />
      </S.SettingImgWrap>
      <S.SettingTextWrap>
        <S.SettingTitle>{title}</S.SettingTitle>
        <S.SettingDescription>{description}</S.SettingDescription>
      </S.SettingTextWrap>
    </S.SettingCard>
  );
}

export default SettingCard;
