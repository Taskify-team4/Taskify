import { forwardRef, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as S from '@components/inputs/modalInput/dateInput/DatePicker.style';

const DatePicker = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const CustomInput = forwardRef((props, ref: React.ForwardedRef<HTMLInputElement>) => {
    return (
      <S.CalendarInputWrap>
        <S.CalendarInput {...props} ref={ref} type="text" placeholder="날짜를 입력해 주세요." />
      </S.CalendarInputWrap>
    );
  });

  return (
    <S.DatePickerWrapper>
      <ReactDatePicker
        customInput={<CustomInput />}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={30}
        timeCaption="time"
        dateFormat="yyyy.MM.dd HH:mm"
      />
    </S.DatePickerWrapper>
  );
};

export default DatePicker;
