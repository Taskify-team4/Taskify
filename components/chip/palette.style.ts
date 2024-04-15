import styled from 'styled-components';

const colorList = {
  green: 'var(--green)',
  purple: 'var(--purple)',
  pink: 'var(--pink)',
  orange: 'var(--orange)',
  blue: 'var(--blue)',
};

export type TColorKey = 'green' | 'purple' | 'pink' | 'orange' | 'blue';

type ColorTileProps = {
  $color: TColorKey;
  $size: string;
};

export const ColorPalette = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

export const ColorTile = styled.span<ColorTileProps>`
  width: ${({ $size }) => ($size === 'large' ? 30 : 28)}px;
  height: ${({ $size }) => ($size === 'large' ? 30 : 28)}px;
  border-radius: 50%;
  background-color: ${({ $color }) => colorList[$color]};
`;
