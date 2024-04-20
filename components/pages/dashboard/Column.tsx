import Button from '@components/buttons/Button';
import Card, { CardProps } from '@components/cards/Card';
import { CARD } from '@utils/testData';
import React, { useEffect, useState } from 'react';
import * as S from '@components/pages/dashboard/Column.style';
import { ColorTile } from '@components/chips/Chip.style';
import Image from 'next/image';
import settingIcon from '@public/icons/setting.svg';
import Modal from '@components/modals/Modal';
import ModalBase from '@components/modals/ModalBase';
import EditColumnModal from '@components/modals/edit_column/Modal';
import { TColumn } from '@pages/dashboard/Dashboard.type';
import { getCards } from '@pages/dashboard/api';
import ModalTask from '@components/modals/modal-task/ModalTask';

type TColumnProps = {
  column: TColumn;
  fetchColumns: () => void;
};

function Column({ column, fetchColumns }: TColumnProps) {
  const [cards, setCards] = useState<CardProps[]>([]);

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
              <EditColumnModal columnid={column.id} fetchColumns={fetchColumns} />
            </ModalBase>
          }
        >
          <S.ColumnSettingButtonWrapper>
            <Image src={settingIcon} width={24} height={24} alt="설정 아이콘" />
          </S.ColumnSettingButtonWrapper>
        </Modal>
      </S.ColumnHeader>

      {/* 할일 생성 모달 */}
      <Modal content={<ModalBase></ModalBase>}>
        <Button.AddTodo />
      </Modal>

      {cards.map((card, idx) => (
        <Modal
          content={
            <ModalBase>
              <ModalTask {...card} />
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
