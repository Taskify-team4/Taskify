import device from '@utils/breakpointsDevice';
import styled from 'styled-components';

const OutlineButtonStyles = `
  border: 1px solid var(--gray300);
  background-color: var(--white);
`;

const BaseButtonStyles = `
  color: var(--white);
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  &:disabled {
    background: var(--gray400);
    cursor: not-allowed;
  }
`;

const PagenationButtonStyle = `
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.mobile} {
    width: 36px;
    height: 36px;
  }
`;

const AddButtonStyle = `
  color: var(--black400);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const ModalButtonStyle = `
  border-radius: 8px;
  font-size: 16px;
  width: 120px;
  height: 48px;
  @media ${device.mobile} {
    font-size: 14px;
    width: 138px;
    height: 42px;
  }
`;

export const LoginButton = styled.button`
  ${BaseButtonStyles}
  background-color: var(--violet);
  width: 520px;
  height: 50px;
  @media ${device.mobile} {
    width: 351px;
  }
`;

export const ConfirmButton = styled.button`
  ${BaseButtonStyles}
  background-color: var(--violet);
  border-radius: 4px;
  font-size: 14px;
  width: 84px;
  height: 32px;
  @media ${device.tablet} {
    width: 72px;
    height: 30px;
  }
  @media ${device.mobile} {
    width: 109px;
    height: 28px;
  }
`;

export const RejectButton = styled(ConfirmButton)`
  ${OutlineButtonStyles}
  color: var(--violet);
`;

export const ModalCommentButton = styled.button`
  ${OutlineButtonStyles}
  width: 83px;
  height: 32px;
  color: var(--violet);
  font-size: 12px;
  @media ${device.mobile} {
    width: 84px;
  }
`;

export const ModalConfirmButton = styled.button`
  ${OutlineButtonStyles}
  ${ModalButtonStyle}
  color: var(--white);
  background-color: ${({ disabled }) => (disabled ? 'var(--gray300)' : 'var(--violet)')};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`;

export const ModalRejectButton = styled.button`
  ${OutlineButtonStyles}
  ${ModalButtonStyle}
  color: var(--gray500);
  background-color: var(--white);
`;

export const DeleteButton = styled.button`
  ${OutlineButtonStyles}
  border-radius: 4px;
  font-size: 14px;
  width: 84px;
  height: 32px;
  color: var(--violet);
  @media ${device.mobile} {
    width: 52px;
    height: 28px;
  }
`;

export const AddColumnButton = styled.button`
  ${OutlineButtonStyles}
  ${AddButtonStyle}
  font-size: 18px;
  width: 354px;
  height: 70px;
  font-weight: 700;
  @media ${device.tablet} {
    width: 544px;
  }
  @media ${device.mobile} {
    width: 284px;
    height: 60px;
    font-size: 16px;
  }
`;

export const AddTodoButton = styled.button`
  ${OutlineButtonStyles}
  ${AddButtonStyle}
  width: 314px;
  height: 40px;
  @media ${device.tablet} {
    width: 544px;
  }
  @media ${device.mobile} {
    width: 284px;
    height: 32px;
  }
`;

export const DeleteDashboardButton = styled.button`
  ${OutlineButtonStyles}
  background-color: var(--gray100);
  color: var(--black400);
  border-radius: 8px;
  width: 320px;
  height: 62px;
  font-size: 18px;
  font-weight: 500;
  @media ${device.mobile} {
    width: 284px;
    font-size: 16px;
  }
`;

export const PagenationLeftButton = styled.button`
  ${OutlineButtonStyles}
  ${PagenationButtonStyle}
  border-radius: 4px 0 0 4px;
`;

export const PagenationRightButton = styled.button`
  ${OutlineButtonStyles}
  ${PagenationButtonStyle}
  border-radius: 0 4px 4px 0;
`;

export const AddDashboardButton = styled.button`
  ${OutlineButtonStyles}
  ${AddButtonStyle}
  font-size: 16px;
  font-weight: 600;
  min-height: 60px;
  width: -webkit-fill-available;
  @media ${device.mobile} {
    height: 58px;
    font-size: 14px;
  }
`;

export const AddInviteButton = styled.button`
  ${AddButtonStyle}
  background-color: var(--violet);
  color: var(--white);
  width: 105px;
  height: 32px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  gap: 9px;
  @media ${device.mobile} {
    width: 86px;
    height: 28px;
    font-size: 12px;
  }
`;

export const DashboardButton = styled.button`
  ${OutlineButtonStyles}
  ${AddButtonStyle}
  width:100%;
  font-size: 16px;
  font-weight: 600;
  padding: 20px;
  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export const Dashboard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserData = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ColorChip = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 100px;
  background-color: ${({ color }) => color};
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const DashboardTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin: 0 8px 0 16px;
  //
  max-width: 164px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 10;
  @media (max-width: 1250px) {
    max-width: 90px;
  }
  @media ${device.tablet} {
    max-width: 60px;
  }
  @media ${device.mobile} {
    font-size: 14px;
    max-width: 120px;
  }
`;
