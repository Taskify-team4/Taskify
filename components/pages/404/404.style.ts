import Link from 'next/link';
import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const NotFoundTitle = styled.h1`
  color: var(--black200);
  font-size: 200px;
  line-height: normal;
`;

export const NotFoundDesc = styled.p`
  color: var(--black100);
  font-size: 50px;
  line-height: normal;
`;

export const NotFoundDesc2 = styled(NotFoundDesc)`
  color: var(--gray500);
  font-size: 25px;
  font-weight: 400;
  line-height: normal;
`;

export const NotFoundBtn = styled(Link)`
  height: 48px;
  display: flex;
  padding: 14px 46px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  cursor: pointer;

  border-radius: 8px;
  background: var(--violet);
  color: var(--white);
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
`;
