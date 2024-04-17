import * as S from '@components/modals/modal-task/ModalTask.style';
import Image from 'next/image';
import { CardImage } from '@components/cards/Card.style';
import { TColorKey } from '@components/chips/Chip.type';
import { ModalBaseProps } from '@components/modals/Modal.type';
import TaskChips from './TaskChips';
import TaskDeadline from './TaskDeadline';

type TagProps = {
  text: string;
  color: TColorKey;
};
export type ModalTaskProps = ModalBaseProps & {
  imageUrl: string | null;
  title: string;
  explanation: string;
  tags: TagProps[];
  dueDate: string;
  assignee: { nickname: string };
};

function ModalTask({ close, imageUrl, title, explanation, tags, dueDate, assignee }: ModalTaskProps) {
  const trigger = () => {
    return close && close();
  };
  return (
    <S.ModalTaskContainer>
      <S.TaskTitle>{title}</S.TaskTitle>
      <TaskChips {...{ tags }} />
      <S.TaskExplanation>{explanation}</S.TaskExplanation>
      {imageUrl ? (
        <CardImage>
          <Image src={imageUrl} alt="Card Image" fill />
        </CardImage>
      ) : null}
      <TaskDeadline />
    </S.ModalTaskContainer>
  );
}

export default ModalTask;
