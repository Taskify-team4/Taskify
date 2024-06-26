import * as S from '@components/modals/modal-task/ModalTask.style';
import { ModalTaskProps } from './ModalTask';

type TaskDeadlineProps = {
  dueDate: string;
  assignee: { nickname: string; profileImageUrl: string };
};
function TaskDeadline({ dueDate, assignee }: TaskDeadlineProps) {
  return (
    <S.DeadlineContainer>
      <S.DeadlineWrapper>
        <S.DeadlineText>담당자</S.DeadlineText>
        <S.OwnerWrapper>
          <S.OwnerProfile str={assignee.nickname[0]} profileImageUrl={assignee.profileImageUrl} />
          <S.OwnerName>{assignee.nickname}</S.OwnerName>
        </S.OwnerWrapper>
      </S.DeadlineWrapper>
      <S.DeadlineWrapper>
        <S.DeadlineText>마감일</S.DeadlineText>
        <S.DeadlineDate>{dueDate}</S.DeadlineDate>
      </S.DeadlineWrapper>
    </S.DeadlineContainer>
  );
}

export default TaskDeadline;
