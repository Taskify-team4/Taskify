import Button from '@components/buttons/Button';
import Card, { CardProps } from '@components/cards/Card';
import React, { useEffect, useState } from 'react';
import * as S from '@components/pages/dashboard/Column.style';
import { ColorTile } from '@components/chips/Chip.style';
import Image from 'next/image';
import settingIcon from '@public/icons/setting.svg';
import Modal from '@components/modals/Modal';
import ModalBase from '@components/modals/ModalBase';
import ModalTask from '@components/modals/modal-task/ModalTask';
import EditColumnModal from '@components/modals/edit_column/Modal';
import { TCards, TColumn } from '@pages/dashboard/Dashboard.type';
import { getCards } from '@pages/dashboard/api';
import CreateToDoModal from '@components/modals/createtodo/Modal';
import { useDashContext } from '@contexts/dashContext';

type TColumnProps = {
  column: TColumn;
};

function Column({ column }: TColumnProps) {
  // const { cards, setCards } = useDashContext();
  // console.log(cards);
  const [cards, setCards] = useState<TCards>([]);

  const fetchCards = async () => {
    const res = await getCards(column.id);
    const result = res.cards;
    setCards(result);
  };

  useEffect(() => {
    fetchCards();
  }, [column.id]);

  return (
    <S.ColumnContainer>
      <S.ColumnHeader>
        <S.TitleWrapper>
          <ColorTile $size={'tiny'} $color="purple" />
          <S.ColumnTitle>{column.title}</S.ColumnTitle>
          <S.CardsCount>{cards.length}</S.CardsCount>
        </S.TitleWrapper>
        <Modal
          content={
            <ModalBase>
              <EditColumnModal columnid={column.id} />
            </ModalBase>
          }
        >
          <S.ColumnSettingButtonWrapper>
            <Image src={settingIcon} width={24} height={24} alt="설정 아이콘" />
          </S.ColumnSettingButtonWrapper>
        </Modal>
      </S.ColumnHeader>

      {/* 할일 생성 모달 */}
      <Modal
        content={
          <ModalBase>
            <CreateToDoModal columnid={column.id} fetchCards={fetchCards}>
              할 일 생성
            </CreateToDoModal>
          </ModalBase>
        }
      >
        <Button.AddTodo />
      </Modal>

      {cards?.map((card, idx) => (
        <Modal
          content={
            <ModalBase>
              <ModalTask {...card} columnid={column.id} fetchCards={fetchCards} />
            </ModalBase>
          }
          key={idx}
        >
          <Card {...card} />
        </Modal>
      ))}
    </S.ColumnContainer>
  );
}

export default Column;
