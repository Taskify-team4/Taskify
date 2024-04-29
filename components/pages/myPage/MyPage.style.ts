import styled from 'styled-components';
import device from '@utils/breakpointsDevice';

export const MyPageContainer = styled.div`
  display: flex;
`;

export const MyPageMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MyPageMainContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px 12px 20px;
  background-color: var(--gray100);

  @media ${device.tablet} {
    padding: 0 12px 12px;
  }
`;

export const MyPageMainHead = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0 25px;
  gap: 6px;

  @media ${device.tablet} {
    padding: 17px 0 20px;
  }
`;

export const ImgWrap = styled.div`
  width: 20px;
  height: 20px;
  position: relative;

  @media ${device.tablet} {
    width: 18px;
    height: 18px;
  }
`;

export const HeadTitle = styled.span`
  color: var(--black200);
  font-size: 16px;
  font-weight: 500;
  line-height: normal;

  @media ${device.tablet} {
    font-size: 14px;
  }
`;
