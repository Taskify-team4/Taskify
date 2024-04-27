import device from '@utils/breakpointsDevice';
import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  height: 100%;
`;
export const DashboardContentContainer = styled.div`
  width: calc(100% - 250px);
  @media ${device.tablet} {
    width: calc(100% - 140px);
  }
  @media ${device.mobile} {
    width: calc(100% - 50px);
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  width: fit-content;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export const AddColumnButtonWrapper = styled.div`
  padding: 72px 0 0 20px;

  @media ${device.tablet} {
    flex-direction: column;
    padding: 20px;
  }

  @media ${device.mobile} {
    padding: 12px 9px;
  }
`;
