import Button from '@components/buttons/Button';
import { ImageContent, ImageWrapper } from '@components/inputs/modalInput/imageInput/ImageInput.style';
import device from '@utils/breakpointsDevice';
import styled from 'styled-components';

export const MyPageProfileContainer = styled.div`
  max-width: 620px;
  width: 100%;
  height: 355px;
  display: flex;
  flex-direction: column;
  padding: 26px 28px 22px;
  border-radius: 8px;
  background-color: var(--white);

  @media ${device.tablet} {
    height: 422px;
    padding: 14px 20px 14px;
  }
`;

export const MyPageProfileTitle = styled.span`
  color: var(--black200);
  font-size: 24px;
  font-weight: 700;
  line-height: normal;

  @media ${device.tablet} {
    font-size: 20px;
  }
`;

export const MyPageProfileInfoContainer = styled.div`
  display: flex;
  gap: 16px;

  @media ${device.tablet} {
    flex-direction: column;
    gap: 0;
  }
`;

export const MyPageProfileInfo = styled.div`
  max-width: 182px;
  width: 100%;
  display: flex;
  padding: 32px 0 24px;

  @media ${device.tablet} {
    padding: 24px 0 16px;
  }
`;

export const MyPageProfileWrap = styled(ImageWrapper)`
  width: 182px;
  height: 182px;

  @media ${device.tablet} {
    width: 100px;
    height: 100px;
  }
`;

export const ImgUpLoad = styled.input`
  display: none;
`;

export const PreviewImg = styled.img`
  width: 182px;
  height: 182px;

  @media ${device.tablet} {
    width: 100px;
    height: 100px;
  }
`;

export const MyPageProfileImgContent = styled(ImageContent)`
  width: 30px;
  height: 30px;

  @media ${device.tablet} {
    width: 20px;
    height: 20px;
  }
`;

export const MyPageProfileInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px 0 24px;
  gap: 20px;

  @media ${device.tablet} {
    padding: 0 0 16px;
    gap: 16px;
  }
`;

export const MyPageBtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const MyPageBtn = styled(Button.Confirm)`
  @media ${device.tablet} {
    width: 84px;
    height: 28px;
  }
`;
