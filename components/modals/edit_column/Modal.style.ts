import styled from 'styled-components';
import device from '@utils/breakpointsDevice';

export const ModalContainer = styled.div`
  width: 540px;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 32px;

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

export const EditButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${device.mobile} {
    flex-direction: column;
    gap: 16px;
  }
`;

export const DeleteButtonWrapper = styled.div`
  display: flex;
  align-items: end;
`;
export const DeleteColumnButton = styled.button`
  width: fit-content;
  height: fit-content;
  font-size: 14px;
  font-weight: 400;
  text-decoration: underline;
  color: var(--gray400);
  cursor: pointer;
`;
