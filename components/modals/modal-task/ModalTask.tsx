import * as S from '@components/modals/modal-task/ModalTask.style';
import Image from 'next/image';
import { ModalBaseProps } from '@components/modals/Modal.type';
import TaskComments from './TaskComments';
import closeImg from '@public/icons/close.svg';
import moreImg from '@public/icons/more.svg';
import TaskContentInfo from './TaskContentInfo';
import { useState } from 'react';
import { deleteCard } from '@pages/dashboard/api';
import { TCard, TColumn } from '@pages/dashboard/Dashboard.type';

export type ModalTaskProps = ModalBaseProps & {
  fetchCards: (columnid: number) => {};
  card: TCard;
  column: TColumn;
};

function ModalTask({ close, fetchCards, card, column }: ModalTaskProps) {
  const [more, setMore] = useState(false);

  const trigger = () => {
    setMore(false);
    return close && close();
  };

  const handleDeleteButtonClick = async () => {
    try {
      await deleteCard(card.id);
      trigger();
      fetchCards(column.id);
    } catch (error) {
      console.error('카드 삭제 실패', error);
    }
  };

  return (
    <S.ModalTaskContainer>
      <S.TaskTitle>{card.title}</S.TaskTitle>
      <TaskContentInfo {...card} columntitle={column.title} />
      <TaskComments cardid={card.id} columnid={column.id} />
      <S.CloseImage src={closeImg} alt="close button" onClick={trigger} />
      <S.MoreImage src={moreImg} alt="more button" onClick={() => setMore(!more)} />
      {more ? (
        <S.MoreList>
          <S.MoreItem>수정하기</S.MoreItem>
          <button onClick={handleDeleteButtonClick}>
            <S.MoreItem>삭제하기</S.MoreItem>
          </button>
        </S.MoreList>
      ) : null}
    </S.ModalTaskContainer>
  );
}

export default ModalTask;
