import styled from 'styled-components';
import Image from 'next/image';
import { Point1, Point1Title, Point1Description } from './Point1.style';
import device from '@utils/breakpointsDevice';

export const Point2 = styled(Point1)`
  grid-template-columns: 644px 230px auto;

  @media screen and (max-width: 1300px) {
    grid-template-columns: 63px 230px auto;
  }

  @media ${device.mobile} {
    grid-template-columns: auto auto auto;
    grid-template-rows: 60px 83px auto;
  }
`;

export const Point2Title = styled(Point1Title)``;

export const Point2Description = styled(Point1Description)``;

export const Point2Img = styled(Image)`
  width: 100%;
  max-width: 436px;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 108px;

  @media ${device.tablet} {
    max-width: 360.438px;
    left: 50%;
    transform: translateX(-50%);
  }
  @media ${device.mobile} {
    max-width: 217.131px;
  }
`;
