import styled from 'styled-components';
import css from 'styled-jsx/css';

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
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddButtonStyle = `
  color: var(--black400);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const LoginButton = styled.button`
  ${BaseButtonStyles}
  background-color: var(--violet);
  width: 520px;
  height: 50px;
`;

export const ConfirmButton = styled.button`
  ${BaseButtonStyles}
  background-color: var(--violet);
  border-radius: 4px;
  font-size: 14px;
  width: 84px;
  height: 32px;
`;

export const RejectButton = styled(ConfirmButton)`
  ${OutlineButtonStyles}
  color: var(--violet);
`;

export const DeleteButton = styled(RejectButton)``;

export const AddColumnButton = styled.button`
  ${OutlineButtonStyles}
  ${AddButtonStyle}
  font-size: 18px;
  width: 354px;
  height: 70px;
  font-weight: 700;
`;

export const AddTodoButton = styled.button`
  ${OutlineButtonStyles}
  ${AddButtonStyle}
  width: 314px;
  height: 40px;
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
  width: 332px;
  height: 70px;
  font-size: 16px;
  font-weight: 600;
`;

export const DashboardButton = styled.button`
  ${OutlineButtonStyles}
  ${AddButtonStyle}
  width: 332px;
  height: 70px;
  font-size: 16px;
  font-weight: 600;
  padding: 20px;
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
`;

export const ColorChip = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 100px;
  background-color: ${({ color }) => color};
  display: flex;
  align-items: center;
`;

export const DashboardTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin: 0 8px 0 16px;
`;
