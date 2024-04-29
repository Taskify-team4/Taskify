import device from '@utils/breakpointsDevice';
import styled from 'styled-components';

export const ModalInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ModalInputTitleContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const ModalInputLabel = styled.label`
  color: var(--black200);
  font-size: 18px;
  font-weight: 500;
  line-height: normal;

  @media ${device.mobile} {
    font-size: 16px;
  }
`;

export const ModalInputRequired = styled.span`
  color: var(--violet);
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;

  @media ${device.mobile} {
    font-size: 16px;
  }
`;

export const ModalInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 14px 16px;
  border: 1px solid var(--gray300);
  border-radius: 6px;
  background-color: var(--white);

  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  &::placeholder {
    color: var(--gray400);
  }
  &:focus {
    border: 1px solid var(--violet);
  }

  @media ${device.mobile} {
    height: 42px;
  }
`;
