import device from '@utils/breakpointsDevice';
import styled from 'styled-components';
import { ProfileProps } from '../headers/Header.type';

export const Icon = styled.div`
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px white solid;
  border-radius: 20px;
  background-color: #a3c4a2;
  color: var(--white);
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
`;

export const ProfileIcon = styled(Icon)<ProfileProps>`
  background: ${({ $imageUrl, color }) => ($imageUrl ? `url(${$imageUrl})` : `#${color}`)};
  background-size: cover;
  background-position: center;

  &:nth-child(n + 2) {
    margin-left: -10px;
  }

  &:nth-child(n + 1) {
    background-color: #${({ color }) => color};
  }

  @media ${device.mobile} {
    width: 34px;
    height: 34px;
    font-size: 14px;
  }
`;
