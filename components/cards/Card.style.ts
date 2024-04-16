import styled from 'styled-components';
import device from '@utils/breakpointsDevice';

export const CardContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 12px;

  padding: 20px;

  border: var(--gray300) 1px solid;
  border-radius: 6px;
`;

export const CardImage = styled.div`
  position: relative;

  width: 270px;
  height: 160px;
  
  @media ${device.tablet} {
    width: 91px;
    height: 53px;
  }
  @media ${device.mobile} {
    width: 260px;
    height: 152px;
  }
`;

export const CardTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  @media ${device.tablet} {
    font-size: 14px;
  }
`;

export const CardChips = styled.div`
  display: flex;
  gap: 6px;
`;

export const CardDate = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;

  font-weight: 500;
  font-size: 12px;
  color: var(--gray500);

  @media ${device.mobile} {
    font-size: 10px;
  }
`;
