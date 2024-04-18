import device from '@utils/breakpointsDevice';
import styled from 'styled-components';

export const Header = styled.div`
  height: 70px;
  margin: 0 auto;
  padding: 0 80px 0 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--white);

  @media ${device.tablet} {
    padding-right: 40px;
  }

  @media ${device.mobile} {
    height: 60px;
    padding: 0 24px;
  }
`;
