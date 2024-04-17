import styled from 'styled-components';
import device from '@utils/breakpointsDevice';

export const ModalContainer = styled.div`
  max-width: 540px;
  height: 334px;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 30px;

  background-color: white;
  border: 1px solid gray; // 확인 용도로 추가한 코드입니다.
  border-radius: 8px;

  @media ${device.mobile} {
    width: 327px;
    height: 293px;

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

  position: absolute;
  bottom: 0;
  right: 0;

  @media ${device.mobile} {
    position: static;
    justify-content: space-between;
  }
`;
