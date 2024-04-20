import styled from 'styled-components';
import { TChipSize, TColorCode, TColorKey } from '@components/chips/Chip.type';

const chipColorList = {
  green: { background: '#E7F7DB', color: '#86D549' },
  purple: { background: 'var(--violetlight)', color: 'var(--violet)' },
  pink: { background: '#F7DBF0', color: '#D549B6' },
  orange: { background: ' #F9EEE3', color: '#D58D49' },
  blue: { background: '#DBE6F7', color: '#4981D5' },
  gray: { background: 'var(--gray200)', color: 'var(--gray500)' },
};

type ChipStyleProps = {
  $size: TChipSize;
  $color: TColorKey | TColorCode;
};

export const BasicChip = styled.span<ChipStyleProps>`
  display: inline-flex;
  align-items: center;

  padding: 2px 6px;
  height: ${({ $size }) => ($size === 'large' ? 22 : 20)}px;

  font-size: ${({ $size }) => ($size === 'large' ? 12 : 10)}px;
  /* background-color: ${({ $color }) => $color || chipColorList[$color]['background']};
  color: ${({ $color }) => '#ffffff' || chipColorList[$color]['color']}; */
`;

export const RoundChip = styled(BasicChip)`
  border-radius: 11px;
`;

export const SquareChip = styled(BasicChip)`
  border-radius: 4px;
`;

const colorTileSizeList = {
  large: 30,
  small: 28,
  tiny: 6,
};

export const ColorPalette = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

export const ColorTile = styled.div<ChipStyleProps>`
  display: inline-block;
  position: relative;

  width: ${({ $size }) => colorTileSizeList[$size]}px;
  height: ${({ $size }) => colorTileSizeList[$size]}px;

  border-radius: 50%;
  background-color: ${({ $color }) => colorPaletteList[$color] || $color};
`;

export const ColorCheckIcon = styled.span`
  color: white;

  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;
