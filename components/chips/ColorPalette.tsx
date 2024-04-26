import React, { useEffect } from 'react';
import * as S from './Chip.style';
import { TChipSize, TColorCode } from './Chip.type';

function ColorPalette({
  size,
  className,
  initialColor,
  selectedColor,
  setSelectedColor,
}: {
  size: TChipSize;
  className?: string;
  initialColor: TColorCode;
  selectedColor: string;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>> | React.Dispatch<React.SetStateAction<TColorCode>>;
}) {
  const colorList: TColorCode[] = ['#760dde', '#e876ea', '#ffa500', '#76a5ea', '#7ac555'];

  const handleClickTile = (color: TColorCode) => {
    setSelectedColor(color);
  };

  useEffect(() => {
    setSelectedColor(initialColor);
  }, [initialColor]);

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
