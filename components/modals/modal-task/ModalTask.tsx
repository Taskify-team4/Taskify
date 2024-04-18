import * as S from '@components/modals/modal-task/ModalTask.style';
import Image from 'next/image';
import { TColorKey } from '@components/chips/Chip.type';
import { ModalBaseProps } from '@components/modals/Modal.type';
import TaskComments from './TaskComments';
import closeImg from '@public/icons/close.svg';
import moreImg from '@public/icons/more.svg';
import TaskContentInfo from './TaskContentInfo';

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
      <TaskContentInfo {...{ explanation, tags, dueDate, assignee }} />
      {imageUrl ? (
        <S.CardImage>
          <Image src={imageUrl} alt="Card Image" width={0} height={0} layout="responsive" />
        </S.CardImage>
      ) : null}
      <TaskComments />

      <S.MoreImage src={moreImg} alt="more button" />
      <S.CloseImage src={closeImg} alt="close button" onClick={trigger} />
    </S.ModalTaskContainer>
  );
}

export default ModalTask;
