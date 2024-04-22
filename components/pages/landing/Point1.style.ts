import styled from 'styled-components';
import Image from 'next/image';
import device from '@utils/breakpointsDevice';

export const Point1 = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 600px;
  display: grid;
  grid-template-columns: 60px 302px auto;
  grid-template-rows: 123px 126px auto;
  position: relative;
  background: var(--gray100);
  border-radius: 8px;
  flex-wrap: wrap;
  overflow: hidden;

  @media ${device.tablet} {
    max-width: 664px;
    height: 972px;
    grid-template-rows: 63px 126px auto;
  }

  @media ${device.mobile} {
    height: 686px;
    text-align: center;
    grid-template-columns: auto auto auto;
    grid-template-rows: 60px 83px auto;
  }
`;

export const Point1Title = styled.p`
  width: 100%;

  color: var(--black100);
  font-size: 22px;
  font-weight: 500;
  grid-column: 2;
  grid-row: 2;

  @media ${device.mobile} {
    font-size: 18px;

    grid-column: 1 / -1;
  }
`;

export const Point1Description = styled.p`
  width: 100%;
  color: var(--black400);
  font-size: 48px;
  font-weight: 700;
  line-height: 64px; /* 133.333% */
  grid-column: 2;
  grid-row: 3;
  word-break: keep-all;

  @media ${device.mobile} {
    font-size: 36px;

    grid-column: 1 / -1;
  }
`;

export const Point1Img = styled(Image)`
  width: 100%;
  max-width: 594px;
  height: auto;
  position: absolute;
  bottom: 0;
  right: 0;

  @media ${device.tablet} {
    max-width: 519.39px;
  }
  @media ${device.mobile} {
    max-width: 296.112px;
  }
`;
