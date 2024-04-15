import React from 'react';
import * as S from './chip.style';
import { TChipSize, TColorKey } from './chip.type';

const ColorPalette = ({ size }: { size: TChipSize }) => {
  const colorList: TColorKey[] = ['green', 'purple', 'pink', 'orange', 'blue'];

  return (
    <S.ColorPalette>
      {colorList.map((color) => {
        return <S.ColorTile $color={color} $size={size} />;
      })}
    </S.ColorPalette>
  );
};

export default ColorPalette;
