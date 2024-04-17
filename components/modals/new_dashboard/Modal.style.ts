import styled from 'styled-components';
import device from '@utils/breakpointsDevice';

export const ModalContainer = styled.div`
  height: 334px;

  position: relative;
  padding: 30px;

  display: flex;
  flex-direction: column;
  gap: 40px;

  border-radius: 8px;

  @media ${device.mobile} {
    height: 293px;
    padding: 0;

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
