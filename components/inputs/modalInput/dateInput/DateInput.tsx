import React from 'react';
import Image from 'next/image';
import * as S from '@components/inputs/modalInput/dateInput/DateInput.style';
import calendarIcon from '@public/icons/calendar.svg';
import DatePicker from './DatePicker';
import { DateInputProps } from '@components/inputs/Input.type';

function DateInput({ children, onRequired, onChange, defaultValue }: DateInputProps) {
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
