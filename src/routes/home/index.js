import { h } from 'preact';
import style from './style.css';

import ActionList from '../../components/action_list';


const Home = () => {
  console.log("Home");
  return (
    <div class={style.home}>
      <h1>Home</h1>
      <ActionList />
    </div>
  )
};

export default Home;
