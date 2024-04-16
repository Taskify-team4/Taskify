import device from '@utils/breakpointsDevice';
import styled from 'styled-components';

export const TableHeaderContainer = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--black200);
  padding: 0 28px;
  @media ${device.mobile} {
    padding: 0 20px;
  }
`;

export const HeaderTitle = styled.span`
  font-size: 24px;
  font-weight: 700;
  @media ${device.mobile} {
    font-size: 20px;
  }
`;

export const Pagenation = styled.div`
  align-items: center;
  display: flex;
`;

export const CurrentPage = styled.span`
  font-size: 14px;
  margin-right: 16px;
  @media ${device.mobile} {
    font-size: 12px;
    margin-right: 12px;
  }
`;

export const HeaderButtons = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const InviteButtonWrapper = styled.div`
  @media ${device.mobile} {
    position: absolute;
    right: 0;
    top: 47px;
  }
`;
