import styled from 'styled-components';
import Image from 'next/image';

export const SidemenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding: 20px 20px 0 20px;
`;
export const logoWrapper = styled.div`
  display: flex;
  align-items: baseline;
  padding-bottom: 40px;
  @media (min-width: 768px) {
    padding-bottom: 60px;
  }
`;
export const logoImg = styled(Image)`
  width: 24px;
  height: 28px;
  @media (min-width: 768px) {
    width: 28px;
    height: 32px;
  }
`;
export const logoImgTaskify = styled(Image)`
  width: 80px;
  height: 22px;
  display: none;
  @media (min-width: 768px) {
    display: inline;
  }
`;
export const dashBoardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1280px) {
    gap: 160px;
  }
`;
export const dashBoardsText = styled.div`
  display: none;
  color: var(--gray500);
  font-size: 12px;
  font-weight: 700;
  @media (min-width: 768px) {
    display: inline;
  }
`;
export const addBoxImg = styled(Image)`
  width: 20px;
  height: 20px;
`;
