import React, { ReactNode } from 'react';
import Image from 'next/image';
import * as S from '@components/inputs/modalInput/dateInput/DateInput.style';
import calendarIcon from '@public/icons/calendar.svg';
import DatePicker from './DatePicker';

type TagInputProps = {
  children: ReactNode;
  onRequired?: boolean;
  onChange: (selectedDate: string) => void;
  defaultValue?: string;
};

function DateInput({ children, onRequired, onChange, defaultValue }: TagInputProps) {
  return (
    <S.DateInputContainer>
      <S.DateInputTitleContainer>
        <S.DateInputLabel>{children}</S.DateInputLabel>
        {onRequired && <S.DateInputRequired>*</S.DateInputRequired>}
      </S.DateInputTitleContainer>
      <S.DateInputContent>
        <Image src={calendarIcon} width={20} height={20} alt="calendarIcon" />
        <DatePicker onChange={onChange} defaultValue={defaultValue} />
      </S.DateInputContent>
    </S.DateInputContainer>
  );
}

export default DateInput;
