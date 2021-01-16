import { useState } from 'preact/hooks';
import parse from 'date-fns/parse';
import TextField from '@material-ui/core/TextField';

import style from './style.css';

function DatePicker(props) {
  const [value, _onChange] = useState(props.date || new Date());
  const onChange = (evt) => {
    const date = parse(evt.target.value, 'yyyy-MM-dd', new Date());
    _onChange(date);
    props.setDate(date);
  }
  return (
    <form noValidate>
      <TextField
        id="date"
        type="date"
        defaultValue={value}
        onChange={onChange}
      />
    </form>
  )
}

export default DatePicker;
