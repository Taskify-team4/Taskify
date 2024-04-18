import * as S from '@components/modals/modal-task/ModalTask.style';
import Image from 'next/image';
import { TColorKey } from '@components/chips/Chip.type';
import { ModalBaseProps } from '@components/modals/Modal.type';
import TaskChips from './TaskChips';
import TaskDeadline from './TaskDeadline';
import TaskComment from './TaskComment';
import closeImg from '@public/icons/close.svg';
import moreImg from '@public/icons/more.svg';
import CommentInput from '@components/inputs/modalInput/commentInput/CommentInput';

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
      <S.TaskContentTop>
        <TaskDeadline {...{ dueDate, assignee }} />
        <S.TaskContentTopLeft>
          <TaskChips {...{ tags }} />
          <S.TaskExplanation>{explanation}</S.TaskExplanation>
        </S.TaskContentTopLeft>
      </S.TaskContentTop>
      {imageUrl ? (
        <S.CardImage>
          <Image src={imageUrl} alt="Card Image" fill />
        </S.CardImage>
      ) : null}
      <CommentInput id="임시 아이디" placeholder="댓글 작성하기">
        댓글
      </CommentInput>
      <TaskComment />

      <S.MoreImage src={moreImg} alt="more button" />
      <S.CloseImage src={closeImg} alt="close button" onClick={trigger} />
    </S.ModalTaskContainer>
  );
}

export default ModalTask;
