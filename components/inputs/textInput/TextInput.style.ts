import device from '@utils/breakpointsDevice';
import styled from 'styled-components';

export const TextInputContainer = styled.div`
  max-width: 520px;
  width: 100%;

  @media ${device.mobile} {
    width: 100%;
  }
`;

export const TextInputWrapper = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 8px;
`;

export const ErrorMessage = styled.span`
  color: var(--red);
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
`;
