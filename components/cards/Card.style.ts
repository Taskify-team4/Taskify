import styled from 'styled-components';
import device from '@utils/breakpointsDevice';

export const CardContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 12px;

  padding: 20px;

  border: var(--gray300) 1px solid;
  border-radius: 6px;

  @media ${device.tablet} {
    flex-direction: row;
  }

  @media ${device.mobile} {
    flex-direction: column;
    padding: 10px;
  }
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

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 12px;
`;

export const CardTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  @media ${device.tablet} {
    font-size: 14px;
  }
`;

export const CardMeta = styled.div`
  @media ${device.tablet} {
    display: flex;
  }
  @media ${device.mobile} {
    display: block;
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
  margin-top: 12px;

  font-weight: 500;
  font-size: 12px;
  color: var(--gray500);

  @media ${device.tablet} {
    margin-left: 10px;
    margin-top: 0;
  }

  @media ${device.mobile} {
    font-size: 10px;
    margin-left: 0;
    margin-top: 12px;
  }
`;
