import { ColorTile } from '@components/chips/Chip.style';
import styled from 'styled-components';

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
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
  border: 1px solid var(--gray300);
  background-color: var(--white);

  &:hover {
    border: 1px solid var(--violet);
  }
`;

export const SelectTitleInput = styled.input`
  color: var(--black200);
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
`;

export const SelectOption = styled.div`
  width: 217px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 50px;
  border-radius: 6px;
  border: 1px solid var(--gray300);
  background: var(--white);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
`;

export const Select = styled.div`
  height: 39px;
  display: flex;
  align-items: center;
  padding: 13px 87px 13px 8px;
  gap: 6px;
  cursor: pointer;

  &:hover {
    background-color: var(--violetlight);
  }
`;

export const SelectTile = styled(ColorTile)`
  margin-right: 6px;
`;

export const SelectTileItem = styled.span`
  color: var(--black200);
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
`;
