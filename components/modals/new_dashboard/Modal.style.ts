import styled from 'styled-components';
import device from '@utils/breakpointsDevice';

export const ModalContainer = styled.div`
  width: 540px;
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
    height: 220px;
  }
`;

export const ModalTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

export const ModalButtons = styled.div`
  display: flex;
  gap: 12px;

  padding: 10px;
  position: absolute;
  bottom: 20px;
  right: 40px;

  box-sizing: border-box;
`;
