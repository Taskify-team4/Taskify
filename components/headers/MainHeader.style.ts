import device from '@utils/breakpointsDevice';
import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  width: 28.797px;
  height: 33.069px;
`;

export const LogoText = styled.img`
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
  color: var(--black-black_333236, #333236);
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  white-space: nowrap;
`;
