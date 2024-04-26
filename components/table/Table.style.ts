import device from '@utils/breakpointsDevice';
import styled from 'styled-components';

interface ContainerProps {
  $isInvitedDash?: boolean;
}

export const TableContainer = styled.section<ContainerProps>`
  border-radius: 8px;
  background-color: var(--white);
  max-width: ${({ $isInvitedDash }) => ($isInvitedDash ? 1022 : 620)}px;
  padding: 26px 0 4px;

  @media ${device.mobile} {
    /* width: ${({ $isInvitedDash }) => ($isInvitedDash ? '260px' : '100%')}; */
    width: 100%;
    padding: 22px 0 4px;
  }
`;

export const ListsContainer = styled.div`
  display: flex;
`;

export const EmptyInvitation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 128px;
`;
export const EmptyText = styled.span`
  color: var(--gray400);
  text-align: center;
  font-size: 18px;
  font-weight: 400;
`;
