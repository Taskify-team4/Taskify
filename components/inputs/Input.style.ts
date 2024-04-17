import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputLabel = styled.label`
  color: var(--black200);
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
`;

export const Input = styled.input`
  width: 520px;
  height: 50px;
  padding: 15px 16px;
  border: 1px solid var(--gray300);
  border-radius: 8px;
  background-color: var(--white);

  color: var(--gray400);
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;

  &:focus {
    border: 1px solid var(--violet);
  }
`;
