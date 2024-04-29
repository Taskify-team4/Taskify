import * as S from '@components/modals/modal-task/ModalTask.style';
import TaskChips from './TaskChips';
import TaskDeadline from './TaskDeadline';
import Image from 'next/image';

type TaskContentInfoProps = {
  imageUrl: string;
  description: string;
  tags: string[];
  dueDate: string;
  assignee: { profileImageUrl: string; nickname: string; id: number };
  columntitle: string;
};

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
