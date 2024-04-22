import device from '@utils/breakpointsDevice';
import styled from 'styled-components';

export const PasswordInputContainer = styled.div`
  max-width: 520px;
  width: 100%;

  @media ${device.mobile} {
    width: 100%;
  }
`;

export const PasswordInputContent = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 8px;
`;

export const ImageWrapper = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 47.5%;
  right: 3%;
  cursor: pointer;

  img {
    object-fit: cover;
  }
`;

export const ErrorMessage = styled.span`
  color: var(--red);
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
`;
