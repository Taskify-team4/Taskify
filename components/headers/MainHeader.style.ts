import device from '@utils/breakpointsDevice';
import styled from 'styled-components';
import Image from 'next/image';

export const LogoContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
`;

export const LogoImg = styled(Image)`
  width: 28.797px;
  height: 33.069px;
`;

export const LogoText = styled(Image)`
  width: 80px;
  height: 22px;

  @media ${device.mobile} {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 36px;

  @media ${device.mobile} {
    gap: 20px;
  }
`;

export const Button = styled.button`
  color: var(--black200);
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  white-space: nowrap;
`;
