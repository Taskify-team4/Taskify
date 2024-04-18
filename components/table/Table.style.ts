import device from '@utils/breakpointsDevice';
import styled from 'styled-components';

interface ContainerProps {
  $isInvitedDash?: boolean;
}

export const TableContainer = styled.section<ContainerProps>`
  border: 1px solid black;
  border-radius: 8px;
  background-color: var(--white);
  max-width: ${({ $isInvitedDash }) => ($isInvitedDash ? 1022 : 620)}px;
  padding: 26px 0 4px;

  @media ${device.mobile} {
    width: ${({ $isInvitedDash }) => ($isInvitedDash ? '260px' : '100%')};
    padding: 22px 0 4px;
  }
`;

export const ListsContainer = styled.div`
  display: flex;
`;
