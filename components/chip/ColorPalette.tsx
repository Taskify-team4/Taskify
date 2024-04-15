import React from 'react';
import * as S from './palette.style';
import { TColorKey } from './palette.style';

const ColorPalette = () => {
  const colorList: TColorKey[] = ['green', 'purple', 'pink', 'orange', 'blue'];

  return (
    <S.ColorPalette>
      {colorList.map((color) => {
        return <S.ColorTile $color={color} $size="small" />;
      })}
    </S.ColorPalette>
  );
};

export default ColorPalette;
