import * as S from '@components/modals/modal-task/ModalTask.style';
import Image from 'next/image';
import { TColorKey } from '@components/chips/Chip.type';
import { ModalBaseProps } from '@components/modals/Modal.type';
import TaskComments from './TaskComments';
import closeImg from '@public/icons/close.svg';
import moreImg from '@public/icons/more.svg';
import TaskContentInfo from './TaskContentInfo';
import { useState } from 'react';

type TagProps = {
  text: string;
  color: TColorKey;
};
export type ModalTaskProps = ModalBaseProps & {
  imageUrl: string | null;
  title: string;
  description: string;
  tags: TagProps[];
  dueDate: string;
  assignee: { nickname: string };
};

function ModalTask({ close, imageUrl, title, description, tags, dueDate, assignee }: ModalTaskProps) {
  const [more, setMore] = useState(false);

  const trigger = () => {
    setMore(false);
    return close && close();
  };

  return (
    <S.ModalTaskContainer>
      <S.TaskTitle>{title}</S.TaskTitle>
      <TaskContentInfo {...{ description, tags, dueDate, assignee }} />
      {imageUrl ? (
        <S.CardImage>
          <Image src={imageUrl} alt="Card Image" width={0} height={0} layout="responsive" />
        </S.CardImage>
      ) : null}
      <TaskComments />

      <S.CloseImage src={closeImg} alt="close button" onClick={trigger} />
      <S.MoreImage src={moreImg} alt="more button" onClick={() => setMore(!more)} />
      {more ? (
        <S.MoreList>
          <S.MoreItem>수정하기</S.MoreItem>
          <S.MoreItem>삭제하기</S.MoreItem>
        </S.MoreList>
      ) : null}
    </S.ModalTaskContainer>
  );
}

export default ModalTask;
