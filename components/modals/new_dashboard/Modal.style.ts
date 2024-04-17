import styled from 'styled-components';
import device from '@utils/breakpointsDevice';

export const ModalContainer = styled.div`
  max-width: 540px;
  height: 334px;

  padding: 40px;
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 30px;
  box-sizing: border-box;

  background-color: white;
  border: 1px solid gray; // 확인 용도로 추가한 코드입니다.
  border-radius: 8px;

  @media ${device.mobile} {
    width: 327px;
    height: 293px;
    padding: 20px;
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

  padding: 10px;
  position: absolute;
  bottom: 10px;
  right: 40px;

  box-sizing: border-box;

  @media ${device.mobile} {
    position: static;
    justify-content: space-between;
    padding: 0;
    gap: 0;
  }
`;
