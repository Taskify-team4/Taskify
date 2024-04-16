import styled from 'styled-components';
import { TChipSize, TColorKey } from '@components/chip/Chip.type';

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
  $color: TColorKey;
};

export const BasicChip = styled.span<ChipStyleProps>`
  display: flex;
  align-items: center;

  padding: 1px 7px;
  height: ${({ $size }) => ($size === 'large' ? 22 : 20)}px;

  font-size: ${({ $size }) => ($size === 'large' ? 12 : 10)}px;
  background-color: ${({ $color }) => chipColorList[$color]['background']};
  color: ${({ $color }) => chipColorList[$color]['color']};
`;

export const RoundChip = styled(BasicChip)`
  border-radius: 11px;
`;

export const SquareChip = styled(BasicChip)`
  border-radius: 4px;
`;

// 컬러 팔레트 관련 스타일
const colorPaletteList = {
  green: 'var(--green)',
  purple: 'var(--purple)',
  pink: 'var(--pink)',
  orange: 'var(--orange)',
  blue: 'var(--blue)',
  gray: 'none',
};

const colorTileSizeList = {
  large: 30,
  small: 28,
  tiny: 8,
};

export const ColorPalette = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

export const ColorTile = styled.div<ChipStyleProps>`
  position: relative;

  width: ${({ $size }) => colorTileSizeList[$size]}px;
  height: ${({ $size }) => colorTileSizeList[$size]}px;

  border-radius: 50%;
  background-color: ${({ $color }) => colorPaletteList[$color]};
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
