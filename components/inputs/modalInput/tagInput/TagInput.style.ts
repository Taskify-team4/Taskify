import styled from 'styled-components';

export const TagInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TagInputTitleContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const TagInputLabel = styled.label`
  color: var(--black200);
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
`;

export const TagInputRequired = styled.span`
  color: var(--violet);
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
`;

export const TagInputContent = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 14px 16px;
  gap: 8px;
  border: 1px solid var(--gray300);
  border-radius: 6px;
  background-color: var(--white);
`;

export const TagInput = styled.input`
  flex: 1;
  color: var(--gray400);
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
`;
