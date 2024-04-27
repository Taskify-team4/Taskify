import { ColorTile } from '@components/chips/Chip.style';
import ProfileIcon from '@components/profileIcon/ProfileIcon';
import device from '@utils/breakpointsDevice';
import styled from 'styled-components';

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 2px;
`;

export const SelectTitle = styled.button`
  width: 100%;
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

  @media ${device.tablet} {
    padding: 0 8px;
  }

  @media ${device.mobile} {
    height: 42px;
  }
`;

export const AssigneeContainer = styled.div`
  display: flex;
  gap: 5px;
`;
export const SelectTitleInput = styled.input`
  width: 70%;
  color: var(--black300);
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  &::placeholder {
    color: var(--gray400);
  }
`;

export const SelectOption = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 50px;
  border-radius: 6px;
  border: 1px solid var(--gray300);
  background: var(--white);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
  z-index: 20;

  @media ${device.mobile} {
    top: 44px;
  }
`;

export const Select = styled.div`
  height: 39px;
  display: flex;
  align-items: center;
  padding: 13px 8px 13px 8px;
  gap: 6px;
  cursor: pointer;

  &:hover {
    background-color: var(--violetlight);
  }

  @media ${device.mobile} {
    height: 35px;
  }
`;

export const SelectTile = styled(ColorTile)`
  margin-right: 6px;
`;

export const SelectTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const SelectTitleName = styled(ProfileIcon)`
  width: 26px;
  height: 26px;
  font-size: 12px;
  border-radius: 50%;
`;

export const SelectTileItem = styled.span`
  color: var(--black);
  font-size: 12px;
  line-height: normal;

  @media ${device.tablet} {
    font-size: 14px;
  }
`;
export const SelectTileColumn = styled.span`
  color: var(--violet);
  font-size: 12px;
  line-height: normal;

  @media ${device.tablet} {
    font-size: 14px;
  }
`;
