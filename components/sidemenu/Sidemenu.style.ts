import styled from 'styled-components';
import device from '@utils/breakpointsDevice';
import Image from 'next/image';

// 임시로 만듦.
export const TempChip = styled.span`
  width: 8px;
  height: 8px;
  background-color: #7ac555;
  border-radius: 4px;
`;

export const SidemenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: 100vh;
  padding: 0 12px;
  border-right: 1px solid var(--gray300);
  @media ${device.mobile} {
    align-items: center;
  }
`;
export const logoWrapper = styled.div`
  display: flex;
  align-items: baseline;
  padding: 20px 8px 60px 8px;
  @media ${device.mobile} {
    padding-bottom: 40px;
  }
`;
export const logoImg = styled(Image)`
  width: 28px;
  height: 32px;
  @media ${device.mobile} {
    width: 24px;
    height: 28px;
  }
`;
export const logoImgTaskify = styled(Image)`
  width: 80px;
  height: 22px;
  @media ${device.mobile} {
    display: none;
  }
`;
export const dashBoardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px 16px 12px;
  gap: 160px;
  cursor: pointer;
  @media ${device.tablet} {
    gap: 0px;
  }
`;
export const dashBoardsText = styled.div`
  color: var(--gray500);
  font-size: 12px;
  font-weight: 700;
  @media ${device.mobile} {
    display: none;
  }
`;
export const addBoxImg = styled(Image)`
  width: 20px;
  height: 20px;
`;
export const dashBoardsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow-y: scroll;
  scrollbar-width: thin;
  @media ${device.mobile} {
    scrollbar-width: none;
  }
`;
export const dashBoardsItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
  #title {
    color: var(--gray500);
    font-size: 18px;
    font-weight: 500;
    max-width: 196px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &:hover {
    background-color: var(--violetlight);
  }
  @media ${device.tablet} {
    #title {
      max-width: 68px;
    }
  }
  @media ${device.mobile} {
    #title {
      display: none;
    }
  }
`;
export const dashBoardCrown = styled(Image)`
  width: 15px;
  height: 12px;
  @media ${device.mobile} {
    display: none;
  }
`;
