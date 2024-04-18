import * as S from '@components/modals/modal-task/ModalTask.style';
import TaskChips from './TaskChips';
import TaskDeadline from './TaskDeadline';
import { ModalTaskProps } from './ModalTask';

type TaskContentInfoProps = Pick<ModalTaskProps, 'explanation' | 'tags' | 'dueDate' | 'assignee'>;
function TaskContentInfo({ explanation, tags, dueDate, assignee }: TaskContentInfoProps) {
  return (
    <S.TaskContentInfo>
      <TaskDeadline {...{ dueDate, assignee }} />
      <S.InfoLeft>
        <TaskChips {...{ tags }} />
        <S.TaskExplanation>{explanation}</S.TaskExplanation>
      </S.InfoLeft>
    </S.TaskContentInfo>
  );
}

export default TaskContentInfo;
