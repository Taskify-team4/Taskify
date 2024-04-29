import styled from 'styled-components';
import device from '@utils/breakpointsDevice';
import Button from '@components/buttons/Button';

export const ModalContainer = styled.div`
  height: 250px;
  width: 484px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 18px;
  font-weight: 500;

  @media ${device.tablet} {
    width: 100%;
  }

  @media ${device.mobile} {
    height: 220px;
    font-size: 16px;
    padding-bottom: 40px;
  }
`;

export const ModalConfirmButton = styled(Button.ModalConfirm)`
  position: absolute;
  bottom: 0;
  right: 0;

  @media ${device.mobile} {
    right: 0;
    left: 0;
    margin: auto;
  }
`;
