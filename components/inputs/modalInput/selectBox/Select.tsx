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
  currentColumn?: TColumn;
  currentAssignee?: string;
  columns?: TColumn[];
  members?: TMember[];
  onType: boolean;
  onChangeColumn?: (id: number) => void;
  onChangeAssignee?: (id: number) => void;
  selectedColumn?: TColumn;
  setSelectedColumn?: (selectedColumn: TColumn) => void;
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
  const [selectedAssignee, setSelectedAssignee] = useState('');
  const handleClickMember = (member: TMember) => {
    onChangeAssignee(member.userId);
    setSelectedAssignee(member.nickname);
    handleOpen();
  };

  const handleClickColumn = (selectedColumn: TColumn) => {
    onChangeColumn(selectedColumn.id);
    setSelectedColumn(selectedColumn);
    handleOpen();
  };

  console.log(selectedColumn);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <S.SelectContainer>
      <S.SelectTitle onClick={handleOpen}>
        {onType ? (
          <S.AssigneeContainer>
            {currentAssignee ? (
              <S.SelectTitleName str={selectedAssignee ? selectedAssignee : currentAssignee} />
            ) : (
              selectedAssignee && <S.SelectTitleName str={selectedAssignee} />
            )}
            <S.SelectTitleInput
              disabled
              placeholder="담당자를 선택해 주세요"
              value={selectedAssignee ? selectedAssignee : currentAssignee}
            />
          </S.AssigneeContainer>
        ) : (
          <Chip.Round size={'large'} color={'purple'}>
            <S.SelectTile $size={'tiny'} $color={'purple'} />
            {selectedColumn && selectedColumn.length !== 0
              ? selectedColumn.title
              : currentColumn && currentColumn.title}
          </Chip.Round>
        )}
        <Image src={dropDownIcon.src} width={26} height={26} alt="dropDownIcon" />
      </S.SelectTitle>
      {isOpen && (
        <S.SelectOption>
          {onType
            ? members &&
              members.map((member) => (
                <S.Select key={member.id} onClick={() => handleClickMember(member)}>
                  <S.SelectTitleName str={member.nickname} />
                  <S.SelectTileItem>{member.nickname}</S.SelectTileItem>
                </S.Select>
              ))
            : columns &&
              columns.map((column) => (
                <S.Select key={column.id} onClick={() => handleClickColumn(column)}>
                  {selectedColumn && selectedColumn.length === 0 && currentColumn === column && (
                    <Image src={checkIcon.src} width={22} height={22} alt="checkIcon" />
                  )}
                  {selectedColumn === column && <Image src={checkIcon.src} width={22} height={22} alt="checkIcon" />}
                  <Chip.Round size={'large'} color={'purple'}>
                    <S.SelectTile $size={'tiny'} $color={'purple'} />
                    <S.SelectTileColumn>{column.title}</S.SelectTileColumn>
                  </Chip.Round>
                </S.Select>
              ))}
        </S.SelectOption>
      )}
    </S.SelectContainer>
  );
}

export default Select;
