import device from '@utils/breakpointsDevice';
import styled from 'styled-components';

export const ColumnContainer = styled.div`

border: 1px solid var(--gray200);
  padding: 22px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${device.mobile} {
    padding: 12px 9px;
  }
`;

export const ColumnHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 9px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ColumnSettingButtonWrapper = styled.div`
  cursor: pointer;
`;

export const ColumnTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
  padding: 0 12px 0 8px;
`;

export const CardsCount = styled.div`
  background-color: var(--gray200);
  color: var(--gray500);
  width: 20px;
  height: 20px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  padding-top: 4px;
  font-size: 12px;
`;
