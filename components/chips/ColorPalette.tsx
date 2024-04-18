import React, { useState } from 'react';
import * as S from './Chip.style';
import { TChipSize, TColorCode } from './Chip.type';

function ColorPalette({ size, className }: { size: TChipSize; className?: string }) {
  const colorList: TColorCode[] = ['#760dde', '#e876ea', '#ffa500', '#76a5ea', '#7ac555'];
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <S.ColorPalette className={className}>
      {colorList.map((color, idx) => {
        return (
          <>
            <S.ColorTile $color={color} $size={size} onClick={() => setSelectedColor(idx)}>
              {selectedColor === idx ? <S.ColorCheckIcon>✓</S.ColorCheckIcon> : null}
            </S.ColorTile>
          </>
        );
      })}
    </S.ColorPalette>
  );
}

export default ColorPalette;
