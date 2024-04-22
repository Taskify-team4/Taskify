import device from '@utils/breakpointsDevice';
import Image from 'next/image';
import styled from 'styled-components';

export const LandingFooter = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 140px;
  @media ${device.tablet} {
    padding: 0 40px;
  }

  @media ${device.mobile} {
    height: 300px;
    flex-direction: column;
    justify-content: center;
  }
`;

export const CodeIT = styled.div`
  color: var(--gray400);
  font-size: 16px;
  font-weight: 400;

  @media ${device.mobile} {
    font-size: 12px;
  }
`;

export const Terms = styled.div`
  display: flex;
  flex-wrap: nowrap;

  gap: 32px;

  @media ${device.mobile} {
    margin: 12px 0 68px;
    gap: 20px;
  }
`;

export const Policy = styled.div`
  color: var(--gray400);
  font-size: 16px;
  font-weight: 400;

  @media ${device.mobile} {
    font-size: 12px;
  }
`;

export const FAQ = styled.div`
  color: var(--gray400);
  font-size: 16px;
  font-weight: 400;

  @media ${device.mobile} {
    font-size: 12px;
  }
`;

export const FooterIcons = styled.div`
  display: flex;
  gap: 14px;
  @media ${device.mobile} {
    gap: 20px;
  }
`;

export const Icon = styled(Image)`
  width: 20px;
  height: 20px;

  @media ${device.mobile} {
    width: 16.364px;
    height: 16.364px;
  }
`;
