import styled from 'styled-components';
import { MyPageProfileContainer, MyPageProfileInfoContainer, MyPageProfileTitle } from '../profile/Profile.style';
import device from '@utils/breakpointsDevice';
import Button from '@components/buttons/Button';

export const MyPagePasswordContainer = styled(MyPageProfileContainer)`
  max-width: 620px;
  width: 100%;
  height: 460px;
  margin-top: 12px;

  @media ${device.tablet} {
    height: 407px;
  }
`;

export const MyPagePasswordTitle = styled(MyPageProfileTitle)``;

export const MyPagePasswordInputContainer = styled(MyPageProfileInfoContainer)`
  flex-direction: column;
  padding: 32px 0 24px;
  gap: 20px;

  @media ${device.tablet} {
    padding: 24px 0 16px;
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
