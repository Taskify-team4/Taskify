import styled, { css } from 'styled-components';
import device from '@utils/breakpointsDevice';
import Image from 'next/image';

export const SidemenuContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: 100vh;
  padding: 0 12px;
  border-right: 1px solid var(--gray300);
  background-color: var(--white);
  @media ${device.mobile} {
    align-items: center;
  }
`;
export const LogoWrapper = styled.div`
  display: flex;
  align-items: baseline;
  padding: 20px 8px 60px 8px;
  @media ${device.mobile} {
    padding-bottom: 40px;
  }
`;
export const LogoImg = styled(Image)`
  width: 28px;
  height: 32px;
  @media ${device.mobile} {
    width: 24px;
    height: 28px;
  }
`;
export const LogoImgTaskify = styled(Image)`
  width: 80px;
  height: 22px;
  @media ${device.mobile} {
    display: none;
  }
`;
export const DashBoardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px 16px 12px;
  justify-content: space-between;
  cursor: pointer;
`;
export const DashBoardsText = styled.div`
  color: var(--gray500);
  font-size: 12px;
  font-weight: 700;
  @media ${device.mobile} {
    display: none;
  }
`;
export const AddBoxImg = styled(Image)`
  width: 20px;
  height: 20px;
`;
export const DashBoardsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow-y: scroll;
  scrollbar-width: thin;
  @media ${device.mobile} {
    scrollbar-width: none;
  }
`;

export const DashBoardsItem = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: var(--violetlight);
  }
  ${({ selected }) =>
    selected &&
    css`
      background-color: var(--violetlight);
    `}
`;
export const DashBoardTitle = styled.span`
  color: var(--gray500);
  font-size: 18px;
  font-weight: 500;
  width: inherit;
  max-width: 196px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media ${device.tablet} {
    max-width: 68px;
  }
  @media ${device.mobile} {
    display: none;
  }
`;
export const DashBoardCrown = styled(Image)`
  width: 15px;
  height: 12px;
  @media ${device.mobile} {
    display: none;
  }
`;
