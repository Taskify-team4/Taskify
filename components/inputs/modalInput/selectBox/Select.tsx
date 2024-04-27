import React, { useState } from 'react';
import Image from 'next/image';
import Chip from '@components/chips/Chip';
import * as S from '@components/inputs/modalInput/selectBox/Select.style';
import dropDownIcon from '@public/icons/drop_down.svg';
import checkIcon from '@public/icons/check.svg';
import { TColumn } from '@pages/dashboard/Dashboard.type';

export type TMember = {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: null;
  createdAt: string;
  updatedAt: string;
  isOwner: boolean;
  userId: number;
};

type SelectProps = {
  currentColumn: TColumn;
  currentAssignee: string;
  columns: TColumn[];
  members: TMember[];
  onType: boolean;
  onChangeColumn: (id: number) => void;
  onChangeAssignee: (id: number) => void;
  selectedColumn: TColumn;
  setSelectedColumn: (selectedColumn: TColumn) => {};
};

function Select({
  currentColumn,
  currentAssignee,
  columns,
  members,
  onType,
  onChangeColumn,
  onChangeAssignee,
  selectedColumn,
  setSelectedColumn,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [assignee, setAssignee] = useState('');

  const handleClickMember = (member: TMember) => {
    onChangeAssignee(member.userId);
    setAssignee(member.nickname);
    handleOpen();
  };

  const handleClickColumn = (selectedColumn: TColumn) => {
    onChangeColumn(selectedColumn.id);
    setSelectedColumn(selectedColumn);
    handleOpen();
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.SelectContainer>
      <S.SelectTitle onClick={handleOpen}>
        {onType ? (
          <>
            <S.SelectTitleName str={assignee ? assignee : currentAssignee} />
            <S.SelectTitleInput value={assignee ? assignee : currentAssignee} />
          </>
        ) : (
          <Chip.Round size={'large'} color={'purple'}>
            <S.SelectTile $size={'tiny'} $color={'purple'} />
            {selectedColumn ? selectedColumn.title : currentColumn.title}
          </Chip.Round>
        )}
        <Image src={dropDownIcon.src} width={26} height={26} alt="dropDownIcon" />
      </S.SelectTitle>
      {isOpen && (
        <S.SelectOption>
          {onType
            ? members.map((member) => (
                <S.Select key={member.id} onClick={() => handleClickMember(member)}>
                  <S.SelectTitleName str={member.nickname} />
                  <S.SelectTileItem>{member.nickname}</S.SelectTileItem>
                </S.Select>
              ))
            : columns.map((column) => (
                <S.Select key={column.id} onClick={() => handleClickColumn(column)}>
                  {!selectedColumn && currentColumn === column && (
                    <Image src={checkIcon.src} width={22} height={22} alt="checkIcon" />
                  )}
                  {selectedColumn === column && <Image src={checkIcon.src} width={22} height={22} alt="checkIcon" />}
                  <Chip.Round size={'large'} color={'purple'}>
                    <S.SelectTile $size={'tiny'} $color={'purple'} />
                    <S.SelectTileItem>{column.title}</S.SelectTileItem>
                  </Chip.Round>
                </S.Select>
              ))}
        </S.SelectOption>
      )}
    </S.SelectContainer>
  );
}

export default Select;
