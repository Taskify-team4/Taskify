import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  return <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} />;
};

export default DatePicker;
