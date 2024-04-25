import * as S from '@components/modals/modal-task/ModalTask.style';
import Image from 'next/image';
import { ModalBaseProps } from '@components/modals/Modal.type';
import TaskComments from './TaskComments';
import closeImg from '@public/icons/close.svg';
import moreImg from '@public/icons/more.svg';
import TaskContentInfo from './TaskContentInfo';
import React, { useState } from 'react';
import { deleteCard } from '@pages/dashboard/api';
import { TCard, TColumn } from '@pages/dashboard/Dashboard.type';

export type ModalTaskProps = ModalBaseProps & {
  fetchCards: (columnid: number) => {};
  card: TCard;
  column: TColumn;
  onUpdateClick?: any;
};

function ModalTask({ close, fetchCards, card, column, onUpdateClick }: ModalTaskProps) {
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

  const handleUpdateButtonClick = async () => {
    onUpdateClick(card.id);
    close && close();
  };

  return (
    <S.ModalTaskContainer>
      <S.TaskTitle>{card.title}</S.TaskTitle>
      <TaskContentInfo {...card} columntitle={column.title} />
      {card.imageUrl ? (
        <S.CardImage>
          <Image src={card.imageUrl} alt="Card Image" width={0} height={0} layout="responsive" />
        </S.CardImage>
      ) : null}
      <TaskComments cardid={card.id} columnid={column.id} />

      <S.CloseImage src={closeImg} alt="close button" onClick={trigger} />
      <S.MoreImage src={moreImg} alt="more button" onClick={() => setMore(!more)} />
      {more ? (
        <S.MoreList>
          <S.MoreItem onClick={handleUpdateButtonClick}>수정하기</S.MoreItem>
          <S.MoreItem onClick={handleDeleteButtonClick}>삭제하기</S.MoreItem>
        </S.MoreList>
      ) : null}
    </S.ModalTaskContainer>
  );
}

export default ModalTask;
