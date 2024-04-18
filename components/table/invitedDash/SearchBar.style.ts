import styled from 'styled-components';
import device from '@utils/breakpointsDevice';

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--gray300);
  border-radius: 6px;
  margin: 15px 28px -5px;
  height: 40px;
  @media ${device.mobile} {
    margin: 15px 20px -20px;
    height: 36px;
  }
`;

export const SearchIconWrapper = styled.div`
  margin: 0px 8px 0 14px;
  width: 24px;
  height: 24px;
  @media ${device.mobile} {
    width: 22px;
    height: 22px;
  }
`;

export const SearchInput = styled.input`
  font-size: 16px;
  width: 100%;
  @media ${device.mobile} {
    font-size: 14px;
  }
`;
