import React, { useState } from 'react';
import * as S from './Chip.style';
import { TChipSize, TColorCode } from './Chip.type';

function ColorPalette({
  size,
  className,
  onClick,
  initialColor,
  selectedColor,
  setSelectedColor,
}: {
  size: TChipSize;
  className?: string;
  onClick?: (color: TColorCode) => void;
  initialColor: string;
  selectedColor: string;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
}) {
  const colorList: TColorCode[] = ['#760dde', '#e876ea', '#ffa500', '#76a5ea', '#7ac555'];
  // const [selectedColor, setSelectedColor] = useState(initialColor);

  const handleClickTile = (color: TColorCode) => {
    setSelectedColor(color);
    if (onClick) onClick(color);
  };

  return (
    <S.ColorPalette className={className}>
      {colorList.map((color, idx) => {
        return (
          <>
            <S.ColorTile key={idx} $color={color} $size={size} onClick={() => handleClickTile(color)}>
              {selectedColor === color ? <S.ColorCheckIcon>✓</S.ColorCheckIcon> : null}
            </S.ColorTile>
          </>
        );
      })}
    </S.ColorPalette>
  );
}

export default ColorPalette;
