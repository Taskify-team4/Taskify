import styled from 'styled-components';

type ChipStyleProps = {
  $size: string;
};

export const BasicChip = styled.span<ChipStyleProps>`
  padding: 4px 8px;
  height: ${({ $size }) => ($size === 'large' ? 22 : 20)} px;
  font-size: ${({ $size }) => ($size === 'large' ? 12 : 10)} px;
`;

export const RoundChip = styled(BasicChip)`
  border-radius: 11px;
`;

export const SquareChip = styled(BasicChip)`
  border-radius: 4px;
`;
