import Image from 'next/image';
import device from '@utils/breakpointsDevice';
import styled from 'styled-components';

export const ModalTaskContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scrollbar-width: none;
  max-height: 90vh;
  gap: 24px;
`;
export const TaskContentInfo = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  @media ${device.tablet} {
    flex-direction: column;
    gap: 12px;
  }
`;
export const InfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 450px;
  padding-right: 24px;
  @media ${device.tablet} {
    padding-right: 0;
  }
`;

export const TaskTitle = styled.span`
  color: var(--black200);
  font-size: 24px;
  font-weight: 700;
  @media ${device.tablet} {
    margin-top: 36px;
  }
`;
export const TaskExplanation = styled.div`
  max-width: 100%;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
`;
export const CardImage = styled.div`
  max-width: 450px;
`;
// TaskChips Style
export const Chips = styled.span`
  display: flex;
  align-items: center;
  width: 450px;
  gap: 20px;
  @media ${device.tablet} {
    width: 100%;
  }
`;
export const ChipStroke = styled.span`
  width: 0px;
  height: 20px;
  border: 1px solid var(--gray300);
`;
export const ColorChips = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;
// TaskDeadline style
export const DeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid var(--gray300);
  width: 200px;
  height: fit-content;
  @media ${device.tablet} {
    flex-direction: row;
    width: 100%;
  }
`;
export const DeadlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media ${device.tablet} {
    margin-right: auto;
  }
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
  @media ${device.mobile} {
    font-size: 12px;
  }
`;
export const DeadlineDate = styled.span`
  color: var(--black200);
  font-size: 14px;
  font-weight: 400;
  padding-top: 6px;
  @media ${device.mobile} {
    font-size: 12px;
  }
`;
export const CloseImage = styled(Image)`
  position: absolute;
  right: 0;
  width: 32px;
  height: 32px;
`;
export const MoreImage = styled(Image)`
  position: absolute;
  top: 2px;
  right: 56px;
  width: 28px;
  height: 28px;
`;
export const MoreList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 32px;
  right: 56px;
  width: 86px;
  height: 74px;
  border-radius: 6px;
  border: 1px solid var(--gray300);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
  background-color: var(--white);
`;
export const MoreItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 74px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 4px;
  color: var(--violet);
  font-size: 12px;
  font-weight: 400;
  &:hover {
    background-color: var(--violetlight);
  }
`;
// TaskComment style
export const CommentContainer = styled.div``;
export const CommentList = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CommentItem = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
`;
export const AuthorProfile = styled.span`
  width: 32px;
  height: 32px;
  color: var(--white);
  background-color: var(--green);
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CommentInfo = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px 0;
`;
export const AuthorName = styled.span`
  color: var(--black200);
  font-size: 14px;
  font-weight: 600;
`;
export const CreatedTime = styled.span`
  color: var(--gray400);
  font-size: 12px;
  font-weight: 400;
`;
export const CommentContent = styled.span`
  color: var(--black200);
  font-size: 14px;
  font-weight: 400;
  padding-bottom: 12px;
`;
export const Buttons = styled.span`
  display: flex;
  gap: 12px;
`;
export const CommentButton = styled.button`
  color: var(--gray400);
  font-size: 12px;
  font-weight: 400;
  text-decoration-line: underline;
`;