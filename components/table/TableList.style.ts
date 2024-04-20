import device from '@utils/breakpointsDevice';
import styled from 'styled-components';

interface ListDataProps {
  $isInvitedDash?: boolean;
}

export const TableListContainer = styled.ul`
  color: var(--black200);
  margin-top: 26px;
  width: 100%;
  @media ${device.mobile} {
    margin-top: 16px;
  }
`;

export const ListTitle = styled.div`
  font-size: 16px;
  color: var(--gray400);
  margin: 0 28px 8px;
  @media ${device.mobile} {
    font-size: 14px;
    margin: 0 20px 15px;
  }
`;

export const TableList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 28px;
  border-bottom: 1px solid var(--gray200);
  &:last-child {
    border-bottom: 0;
  }
  @media ${device.mobile} {
    padding: 12px 20px;
  }
`;

export const ListData = styled.span<ListDataProps>`
  font-size: 16px;
  color: var(--black200);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ $isInvitedDash }) => $isInvitedDash && '100%'};
  span {
    font-size: 16px;
    color: var(--black200);
    width: 100%;
    &:last-child {
      min-width: 154px;
    }
    @media ${device.mobile} {
      font-size: 14px;
    }
  }
  @media ${device.tablet} {
    gap: 20px;
  }
  @media ${device.mobile} {
    font-size: 14px;
    gap: 15px;
    flex-direction: column;
  }
`;

// Member list style
export const MemberDataContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const MemberProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--green);
  width: 37px;
  height: 37px;
  color: var(--white);
  border-radius: 50%;
  font-size: 16px;
  @media ${device.mobile} {
    width: 32px;
    height: 32px;
    font-size: 14px;
  }
`;

// Invited Dash list style
export const InvitedDashButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  @media ${device.mobile} {
    margin-top: 4px;
  }
`;

export const DashTitle = styled.span`
  @media ${device.mobile} {
    &:before {
      content: '이름';
      margin-right: 28px;
      color: var(--gray400);
      font-size: 14px;
    }
  }
`;
export const InviterName = styled.span`
  @media ${device.mobile} {
    &:before {
      content: '초대자';
      margin-right: 16px;
      color: var(--gray400);
      font-size: 14px;
    }
  }
`;

export const InvitedDashListTitleContainer = styled.div`
  margin-bottom: 8px;
  padding: 0 28px;
  span {
    color: var(--gray400);
  }
  @media ${device.mobile} {
    display: none;
  }
`;
export const TableListScrollBox = styled.div`
  max-height: 320px;
  overflow-y: scroll;
`;
