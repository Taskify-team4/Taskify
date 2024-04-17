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
export const DeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid var(--gray300);
  width: 180px;
`;
export const DeadlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const DeadlineText = styled.div`
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
`;
export const OwnerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const OwnerProfile = styled.span`
  width: 24px;
  height: 24px;
  color: var(--white);
  background-color: var(--green);
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
export const OwnerName = styled.span`
  color: var(--black200);
  font-size: 14px;
  font-weight: 400;
`;
export const DeadlineDate = styled.span`
  color: var(--black200);
  font-size: 14px;
  font-weight: 400;
`;
