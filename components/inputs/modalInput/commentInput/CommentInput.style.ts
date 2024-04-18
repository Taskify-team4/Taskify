import styled from 'styled-components';
import { ModalCommentButton } from '@components/buttons/Button.style';

export const CommentInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 10px;
`;

export const CommentInputTitleContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const CommentInputLabel = styled.label<{ onModal?: boolean }>`
  color: var(--black200);
  font-size: ${({ onModal }) => (onModal ? '18px' : '16px')};
  font-weight: 500;
  line-height: normal;
`;

export const CommentInputRequired = styled.span`
  color: var(--violet);
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
`;

export const CommentInput = styled.textarea<{ onModal?: boolean }>`
  width: 100%;
  height: ${({ onModal }) => (onModal ? '96px' : '110px')};
  padding: 16px;
  border-radius: 6px;
  border: 1px solid var(--gray300);
  background-color: var(--white);
  resize: none;

  color: var(--gray400);
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;

  &:focus {
    border: 1px solid var(--violet);
    outline: none;
  }
`;

export const CommentBtn = styled(ModalCommentButton)`
  border-radius: 4px;
  position: absolute;
  right: 12px;
  bottom: 12px;
`;
