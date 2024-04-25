import * as S from '@components/modals/modal-task/ModalTask.style';
import TaskChips from './TaskChips';
import TaskDeadline from './TaskDeadline';
import { ModalTaskProps } from './ModalTask';

type TaskContentInfoProps = Pick<ModalTaskProps, 'description' | 'tags' | 'dueDate' | 'assignee'>;

function TaskContentInfo({ description, tags, dueDate, assignee, columntitle }: TaskContentInfoProps) {
  return (
    <S.TaskContentInfo>
      <TaskDeadline {...{ dueDate, assignee }} />
      <S.InfoLeft>
        <TaskChips {...{ tags }} columntitle={columntitle} />
        <S.TaskExplanation>{description}</S.TaskExplanation>
      </S.InfoLeft>
    </S.TaskContentInfo>
  );
}

export default TaskContentInfo;
