import * as S from '@components/modals/modal-task/ModalTask.style';
import TaskChips from './TaskChips';
import TaskDeadline from './TaskDeadline';
import { ModalTaskProps } from './ModalTask';
import Image from 'next/image';

type TaskContentInfoProps = Pick<ModalTaskProps, 'description' | 'tags' | 'dueDate' | 'assignee'>;

function TaskContentInfo({ imageUrl, description, tags, dueDate, assignee, columntitle }: TaskContentInfoProps) {
  return (
    <S.TaskContentInfo>
      <TaskDeadline {...{ dueDate, assignee }} />
      <S.InfoLeft>
        <TaskChips {...{ tags }} columntitle={columntitle} />
        <S.TaskExplanation>{description}</S.TaskExplanation>
        {imageUrl ? (
          <S.CardImage>
            <Image src={imageUrl} alt="Card Image" width={0} height={0} layout="responsive" />
          </S.CardImage>
        ) : null}
      </S.InfoLeft>
    </S.TaskContentInfo>
  );
}

export default TaskContentInfo;
