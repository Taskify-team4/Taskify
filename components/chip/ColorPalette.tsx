import React, { useState } from 'react';
import * as S from './Chip.style';
import { TChipSize, TColorKey } from './Chip.type';

const ColorPalette = ({ size }: { size: TChipSize }) => {
  const colorList: TColorKey[] = ['green', 'purple', 'pink', 'orange', 'blue'];
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <S.ColorPalette>
      {colorList.map((color, idx) => {
        return (
          <>
            <S.ColorTile
              $color={color}
              $size={size}
              onClick={() => setSelectedColor(idx)}
            >
              {selectedColor === idx ? (
                <S.ColorCheckIcon>✓</S.ColorCheckIcon>
              ) : null}
            </S.ColorTile>
          </>
        );
      })}
    </S.ColorPalette>
  );
};

export default ColorPalette;
