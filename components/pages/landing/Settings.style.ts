import styled from 'styled-components';
import SettingCard from './SettingCard';
import device from '@utils/breakpointsDevice';

export const Settings = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  gap: 36px 33px;
  grid-template-columns: 378px 378px 378px;
  justify-content: center;
  overflow: hidden;

  @media ${device.tablet} {
    grid-template-columns: auto 0 0;
    gap: 48px 0;
  }
`;

export const SettingTitle = styled.p`
  color: var(--black400);
  font-size: 28px;
  font-weight: 700;
  line-height: normal;
  word-break: keep-all;
  grid-column: 1;

  @media ${device.mobile} {
    font-size: 22px;
    text-align: center;
  }
`;

export const Card1 = styled(SettingCard)`
  width: 100%;
  grid-column: 1;
  grid-row: 2;

  @media ${device.tablet} {
    grid-column: 1;
    grid-row: 2;
  }
`;

export const Card2 = styled(SettingCard)`
  grid-column: 2;
  grid-row: 2;
  @media ${device.tablet} {
    grid-column: 1;
    grid-row: 3;
  }
`;

export const Card3 = styled(SettingCard)`
  grid-column: 3;
  grid-row: 2;
  @media ${device.tablet} {
    grid-column: 1;
    grid-row: 4;
  }
`;
