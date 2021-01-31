import { useState } from 'preact/hooks';

import ActionList from '../../components/action_list';
import DateAdjuster from '../../components/date_adjuster';
import style from './style.css';


const Home = () => {
  const [date, setDate] = useState(new Date());
  const [editing, setEditing] = useState(false);
  return (
    <div class={style.home}>
      <DateAdjuster date={ date } setDate={ setDate } />
      <ActionList date={date} editing={editing} setEditing={setEditing} />
    </div>
  )
};

export default Home;
