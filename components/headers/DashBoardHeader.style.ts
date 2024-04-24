import device from '@utils/breakpointsDevice';
import styled from 'styled-components';
import { Header } from './Header.style';
import Image from 'next/image';

export const DashBoardHeader = styled(Header)`
  width: 100%;
  border-bottom: 1px solid var(--gray300);

  @media ${device.tablet} {
    justify-content: flex-end;
  }

  @media ${device.mobile} {
    padding-right: 12px;
  }
`;

export const DashBoardTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Title = styled.div`
  margin-left: 40px;
  color: var(--black200);
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  white-space: nowrap;

  @media ${device.tablet} {
    display: none;
  }
`;

export const CrownIcon = styled(Image)`
  width: 20.103px;
  height: 16px;
`;

export const ManagementContainer = styled.div`
  display: flex;
  gap: 32px;
`;

export const Buttons = styled.div`
  display: flex;

  @media ${device.mobile} {
    gap: 6px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  margin: 0 8px;
  gap: 8px;
  flex-wrap: nowrap;
  white-space: nowrap;
  border-radius: 8px;
  border: 1px solid var(--gray300);
  background: var(--white);

  color: var(--gray500);
  font-size: 16px;
  font-weight: 500;
  line-height: normal;

  @media ${device.mobile} {
    padding: 6px 12px;
    font-size: 14px;
  }
`;

export const Icon = styled(Image)`
  width: 20px;
  height: 20px;

  @media ${device.mobile} {
    display: none;
  }
`;

export const Line = styled.div`
  height: 38px;
  border-left: 1px solid var(--gray300);

  @media ${device.mobile} {
    height: 34px;
    margin: 0 12px 0 16px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const MyProfileName = styled.div`
  color: var(--black200);
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  white-space: nowrap;

  @media ${device.mobile} {
    display: none;
  }
`;
