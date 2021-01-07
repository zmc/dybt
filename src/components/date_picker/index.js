import { useState } from 'preact/hooks';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import style from './style.css';

function DatePicker(props) {
  const [value, _onChange] = useState(props.date || new Date());
  const onChange = (date) => {
    _onChange(date);
    props.setDate(date);
  }

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        className={style.datepicker}
      />
    </div>
  );
}

export default DatePicker;
