import styled from 'styled-components';
import device from '@utils/breakpointsDevice';

export const ModalContainer = styled.div`
  width: 540px;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 40px;

  @media ${device.tablet} {
    width: 100%;
  }

  @media ${device.mobile} {
    justify-content: center;
  }
`;

export const ModalTitle = styled.div`
  font-size: 24px;
  font-weight: 700;

  @media ${device.mobile} {
    font-size: 20px;
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: right;

  @media ${device.mobile} {
    justify-content: space-between;
  }
`;
