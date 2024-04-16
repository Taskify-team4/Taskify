import styled from 'styled-components';

export const TableListContainer = styled.ul`
  color: var(--black200);
  margin-top: 26px;
`;

export const ListTitle = styled.div`
  font-size: 16px;
  color: var(--gray400);
  margin-bottom: 8px;
`;

export const TableList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid var(--gray200);

  &:last-child {
    border-bottom: 0;
  }
`;

export const ListData = styled.span`
  font-size: 16px;
  color: var(--black200);
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
`;
