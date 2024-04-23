import device from '@utils/breakpointsDevice';
import styled from 'styled-components';

export const LandingBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 90px;
  margin: 184px 0 160px;
  padding: 0 40px;

  @media ${device.mobile} {
    margin: 80px 0 30px;
    padding: 0 16px;
  }
`;
