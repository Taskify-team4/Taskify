import styled from 'styled-components';

export const Container = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--black200);
`;

export const HeaderTitle = styled.span`
  font-size: 24px;
  font-weight: 700;
`;

export const Pagenation = styled.div`
  align-items: center;
  display: flex;
`;

export const CurrentPage = styled.span`
  font-size: 14px;
  margin-right: 16px;
`;

export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
