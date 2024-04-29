import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Chip from '@components/chips/Chip';
import * as S from '@components/inputs/modalInput/selectBox/Select.style';
import dropDownIcon from '@public/icons/drop_down.svg';
import checkIcon from '@public/icons/check.svg';
import { TColumn } from '@pages/dashboard/Dashboard.type';
import { useDashContext } from '@contexts/dashContext';
import { SelectProps, TMember } from '@components/inputs/Input.type';

function Select({
  currentColumn,
  currentAssignee,
  columns,
  members,
  onType,
  onChangeColumn,
  onChangeAssignee,
}: SelectProps) {
  const { selectedColumn, setSelectedColumn } = useDashContext();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAssignee, setSelectedAssignee] = useState('');
  const [selectedAssigneeImg, setSelectedAssigneeImg] = useState('');
  const handleClickMember = (member: TMember) => {
    onChangeAssignee?.(member.userId);
    setSelectedAssignee(member.nickname);
    setSelectedAssigneeImg(member.profileImageUrl);
    handleOpen();
  };

  const handleClickColumn = (selectedColumn: TColumn) => {
    onChangeColumn?.(selectedColumn.id);
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
          <S.AssigneeContainer>
            {currentAssignee ? (
              <S.SelectTitleName
                str={selectedAssignee ? selectedAssignee : currentAssignee}
                profileImageUrl={selectedAssigneeImg}
              />
            ) : (
              selectedAssignee && <S.SelectTitleName str={selectedAssignee} profileImageUrl={selectedAssigneeImg} />
            )}
            <S.SelectTitleInput
              disabled
              placeholder="담당자를 선택해 주세요"
              value={currentAssignee ?? selectedAssignee ?? ''}
              onChange={(e) => setSelectedAssignee(e.target.value)}
            />
          </S.AssigneeContainer>
        ) : (
          <Chip.Round size={'large'} color={'purple'}>
            <S.SelectTile $size={'tiny'} $color={'purple'} />
            {selectedColumn.title !== '' ? selectedColumn.title : currentColumn?.title}
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
                  <S.SelectTitleName str={member.nickname} profileImageUrl={member.profileImageUrl} />
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
