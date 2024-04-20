import device from '@utils/breakpointsDevice';
import styled from 'styled-components';

export const MyDashBoardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const MyDashBoardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  max-width: 1022px;
  /* height: 150px; */
  gap: 10px;
  @media ${device.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media ${device.mobile} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
export const MyDashBoardPagenation = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
`;
export const PagenationText = styled.span`
  color: var(--black200);
  font-size: 14px;
  font-weight: 400;
`;
export const PagenationButton = styled.span`
  display: flex;
`;
