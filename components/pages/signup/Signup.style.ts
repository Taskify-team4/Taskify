import Button from '@components/buttons/Button';
import device from '@utils/breakpointsDevice';
import Link from 'next/link';
import styled from 'styled-components';

export const SignupContainner = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
  background-color: var(--gray100);

  @media ${device.tablet} {
    padding: 60px 12px;
  }
`;

export const SignupLogoContainner = styled(Link)`
  width: 200px;
  height: 279px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-bottom: 10px;
  gap: 34px;
  cursor: pointer;

  @media ${device.mobile} {
    width: 120px;
    height: 167.4px;
    padding-bottom: 8.6px;
    gap: 20.4px;
  }
`;

export const LogoImageWrap = styled.div`
  width: 164.6px;
  height: 189.8px;
  position: relative;

  img {
    object-fit: cover;
  }

  @media ${device.mobile} {
    width: 98.7px;
    height: 113.9px;
  }
`;

export const SignupMarkWrap = styled.div`
  width: 198.5px;
  height: 55.2px;
  position: relative;

  img {
    object-fit: cover;
  }

  @media ${device.mobile} {
    width: 119px;
    height: 33.1px;
  }
`;

export const SignupTitleMsg = styled.span`
  color: var(--black200);
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
`;

export const SignupInputContainer = styled.form`
  max-width: 520px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 38px;
  gap: 16px;

  @media ${device.mobile} {
    padding-top: 50px;
  }
`;

export const SignupRuleWrap = styled.div`
  display: flex;
  padding: 8px 0 5px;
  gap: 8px;
`;

export const SignupCheckBox = styled.input`
  width: 20px;
  height: 20px;
`;

export const SignupCheckBoxComment = styled.span`
  color: var(--black200);
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
`;

export const CheckUserWrap = styled.p`
  padding-top: 26px;
  color: var(--black200);
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
`;

export const LoginPath = styled(Link)`
  color: var(--violet);
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
`;

export const SignupBtn = styled(Button.Login)`
  max-width: 520px;
  width: 100%;
`;
