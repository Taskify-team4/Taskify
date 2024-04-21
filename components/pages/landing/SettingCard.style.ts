import styled from 'styled-components';
import Image from 'next/image';
import device from '@utils/breakpointsDevice';

export const SettingCard = styled.div`
  width: 100%;
  max-width: 378px;
  height: 384px;
`;

export const SettingImgWrap = styled.div`
  width: 100%;

  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px 8px 0px 0px;
  background: var(--black100);
`;

export const SettingImg = styled(Image)`
  width: 100%;
  max-width: 300px;
  height: auto;
`;

export const SettingTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 33px 32px;
  background: var(--black-black_171717, #171717);
  border-radius: 0px 0px 8px 8px;

  @media ${device.mobile} {
    padding: 27px 32px;
  }
`;

export const SettingTitle = styled.p`
  color: var(--white);
  font-size: 18px;
  font-weight: 700;
  word-break: keep-all;
`;

export const SettingDescription = styled.p`
  color: var(--white);
  font-size: 16px;
  font-weight: 500;
  word-break: keep-all;
`;
