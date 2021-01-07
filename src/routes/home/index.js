import { useState } from 'preact/hooks';

import format from 'date-fns/format';

import ActionList from '../../components/action_list';
import DatePicker from '../../components/date_picker';
import style from './style.css';


const Home = () => {
  const [date, setDate] = useState(new Date());
  const [editing, setEditing] = useState(false);
  return (
    <div class={style.home}>
      <h1 class={style.big_date}>{ format(date, "yyyy-MM-dd") }</h1>
      <DatePicker date={ date } setDate={ setDate } />
      <ActionList date={date} editing={editing} setEditing={setEditing} />
    </div>
  )
};

export default Home;
