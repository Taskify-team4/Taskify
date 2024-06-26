import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import Button from '@components/buttons/Button';
import device from '@utils/breakpointsDevice';

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 94px 0 0;
  padding: 0 40px;
  overflow: hidden;

  @media ${device.mobile} {
    margin: 42px 0 0;
  }
`;

export const MainImg = styled(Image)`
  width: 100%;
  max-width: 722px;
  height: auto;

  @media ${device.tablet} {
    max-width: 537px;
  }

  @media ${device.mobile} {
    max-width: 287px;
    padding: 0 4px;
  }
`;

export const Title = styled.div`
  margin-top: 66.28px;
  margin-bottom: 41px;
  text-align: center;
`;

export const MainTitle = styled.span`
  color: var(--black400);
  font-size: 76px;
  font-weight: 700;
  line-height: 160%;
  word-break: keep-all;

  @media ${device.tablet} {
    font-size: 56px;
  }

  @media ${device.mobile} {
    font-size: 40px;
  }
`;

const typing = keyframes`
  0% {
    width: 0%;
    border-color: black
  }
  100% {
    width: 100%;
    border-color: black
  }
`;

const blink = keyframes`
  from { border-color: transparent }
  to { border-color: black; }
`;

export const Violet = styled.span`
  margin-left: 28px;
  color: var(--violet);
  font-size: 90px;
  font-weight: 700;

  /* 애니메이션 */
  white-space: nowrap;
  color: transparent;
  position: relative;

  @media ${device.tablet} {
    font-size: 70px;
  }

  @media ${device.mobile} {
    font-size: 42px;
  }

  &:before {
    content: 'Taskify';
    padding-right: 10px;
    position: absolute;
    color: var(--violet);
    overflow: hidden;
    width: 100%;
    border-right: 10px solid transparent;
    animation: ${typing} 1s steps(18) 1;
  }
`;

export const MainSubTitle = styled.p`
  color: var(--black400);
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
`;

export const LoginButton = styled(Button.Login)`
  width: 280px;
  height: 50px;
  font-size: 18px;
  font-weight: 500;
  margin-top: 66px;

  @media ${device.tablet} {
    font-size: 16px;
  }

  @media ${device.mobile} {
    width: 235px;
    height: 42px;
  }
`;
