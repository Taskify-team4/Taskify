import styled from 'styled-components';
import device from '@utils/breakpointsDevice';

export const MyDashboardContainer = styled.div`
  display: flex;
  height: 100%;
`;
export const MyDashBoardLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 250px);
  @media ${device.tablet} {
    width: calc(100% - 140px);
  }
  @media ${device.mobile} {
    width: calc(100% - 50px);
  }
`;
export const MyDashboardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  height: 100%;
  padding: 40px;
  border-top: 1px solid var(--gray300);
  background-color: var(--gray100);
`;
