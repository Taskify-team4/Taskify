import { ColorTile } from '@components/chips/Chip.style';
import styled from 'styled-components';

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const SelectTitle = styled.button`
  width: 217px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border-radius: 6px;
  border: 1px solid var(--violet);
  background-color: var(--white);
`;

export const SelectOption = styled.div`
  width: 217px;
  height: 118px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid var(--gray300);
  background: var(--white);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
`;

export const Select = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
  padding: 13px 87px 13px 6px;
  gap: 6px;
  cursor: pointer;

  &:hover {
    background-color: var(--violetlight);
  }
`;

export const SelectTile = styled(ColorTile)`
  margin-right: 6px;
`;
