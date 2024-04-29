import device from '@utils/breakpointsDevice';
import styled from 'styled-components';
import { Header } from './Header.style';
import Image from 'next/image';
import Link from 'next/link';

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
export const TitleMydash = styled.div`
  margin-left: 40px;
  color: var(--black200);
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  white-space: nowrap;
`;

export const CrownIcon = styled(Image)`
  width: 20.103px;
  height: 16px;
`;

export const ManagementContainer = styled.div`
  display: flex;
  gap: 32px;
  @media ${device.tablet} {
    gap: 20px;
  }

  @media ${device.tablet} {
    gap: 10px;
  }
`;

export const Buttons = styled.div`
  display: flex;

  @media ${device.mobile} {
    /* gap: 6px; */
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
    padding: 8px 10px;
    margin: 0 5px;
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
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  position: relative;
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

export const DropdownMenu = styled.ul`
  width: 100px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: absolute;
  top: 40px;
  background-color: var(--gray100);
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  @media ${device.mobile} {
    right: -10px;
  }
`;

export const DropdownMenuLi = styled.li`
  width: 100%;
  cursor: pointer;
  text-align: center;
  border-radius: 6px;
  font-size: 16px;
  line-height: 250%;

  &:hover {
    background-color: #f1effd;
    color: blue;
  }
`;

// export const Li = styled(Link)`
//   font-size: 16px;
//   line-height: 250%;
//   text-decoration: none;
//   color: black;

//   &:hover {
//     color: blue;
//   }
// `;
