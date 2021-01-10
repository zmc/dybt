import { useState } from 'preact/hooks';

import format from 'date-fns/format';

import ActionList from '../../components/action_list';
import DatePicker from '../../components/date_picker';
import style from './style.css';


const Home = () => {
  const [date, setDate] = useState(new Date());
  const [editing, setEditing] = useState(false);
  const formatted_date = format(date, "yyyy-MM-dd");
  return (
    <div class={style.home}>
      <h1 class={style.big_date}>{ formatted_date }</h1>
      <DatePicker date={ date } setDate={ setDate } />
      <ActionList date={date} editing={editing} setEditing={setEditing} />
    </div>
  )
};

export default Home;
