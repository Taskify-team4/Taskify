import device from '@utils/breakpointsDevice';
import styled from 'styled-components';

export const ImageInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ImageInputLabel = styled.label`
  color: var(--black200);
  font-size: 18px;
  font-weight: 500;
  line-height: normal;

  @media ${device.tablet} {
    font-size: 16px;
  }
`;

export const ImageWrapper = styled.div`
  width: 76px;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: #f5f5f5;
  cursor: pointer;

  @media ${device.tablet} {
    width: 58px;
    height: 58px;
  }
`;

export const ImageContent = styled.div`
  width: 28px;
  height: 28px;
  position: relative;

  img {
    object-fit: cover;
  }

  @media ${device.tablet} {
    width: 21.368px;
    height: 21.368px;
  }
`;

export const ImageInputContentContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const UploagImageWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100px;
  height: 76px;
  @media ${device.tablet} {
    width: 100px;
    height: 58px;
  }
`;
