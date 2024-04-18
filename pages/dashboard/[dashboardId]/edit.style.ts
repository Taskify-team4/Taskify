import styled from 'styled-components';
import Button from '@components/buttons/Button';
import device from '@utils/breakpointsDevice';

export const PageContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const RightSection = styled.div`
  width: 100%;
  @media ${device.pc} {
    width: auto;
  }
`;

export const PageContents = styled.div`
  padding: 30px;

  background-color: var(--gray100);
  border-top: 1px solid var(--gray300); // 임시코드

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const GoBackButton = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--black200);

  display: flex;
  align-items: center;
`;

export const DeleteDashboardButton = styled(Button.DeleteDashboard)`
  margin-top: 40px;
`;
