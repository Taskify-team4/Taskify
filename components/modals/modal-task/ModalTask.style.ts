import styled from 'styled-components';

export const ModalTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TaskTitle = styled.span`
  color: var(--black200);
  font-size: 24px;
  font-weight: 700;
`;
export const Chips = styled.span`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const ChipStroke = styled.span`
  width: 0px;
  height: 20px;
  border: 1px solid var(--gray300);
`;
export const ColorChips = styled.span`
  display: flex;
  gap: 6px;
`;
export const TaskExplanation = styled.span`
  width: 420px;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
`;
export const DeadlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid var(--gray300);
  width: 180px;
`;
export const DeadlineText = styled.div`
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
`;
