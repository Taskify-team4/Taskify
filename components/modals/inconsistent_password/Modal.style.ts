import styled from 'styled-components';
import device from '@utils/breakpointsDevice';
import Button from '@components/buttons/Button';

export const ModalContainer = styled.div`
  width: 540px;
  height: 250px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  font-size: 18px;
  font-weight: 500;

  background-color: white;
  border: 1px solid gray; // 확인 용도로 추가한 코드입니다.
  border-radius: 8px;

  @media ${device.mobile} {
    width: 327px;
    height: 220px;

    font-size: 16px;
    padding-bottom: 40px;
  }
`;

export const ModalConfirmButton = styled(Button.ModalConfirm)`
  position: absolute;
  bottom: 20px;
  right: 20px;

  @media ${device.mobile} {
    bottom: 20px;
    right: 0;
    left: 0;
    margin: auto;
  }
`;
