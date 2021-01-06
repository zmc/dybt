import format from 'date-fns/format';

import useActions from '../../hooks/useActions';
import AddActionForm from '../add_action';

import style from './style.css';

const Action = (props) => {
  const { removeAction, getActionStatus, markDone } = useActions();
  const date = format(new Date, "yyyy-MM-dd");
  const remove = () => {
    removeAction(props.name);
  }
  const toggleDone = () => {
    markDone(props.name, date, !done);
  }
  const done = getActionStatus(props.name, date);
  const statusButton = () => {
    const text = done? 'undo' : 'do';
    return <button onClick={ toggleDone }>{ text }</button>
  }

  return (
    <div class={style.action}>
      <span>{ props.name }</span>
      <span class={style.button_group}>
        { statusButton() }
        <button onClick={remove}>x</button>
      </span>
    </div>
  )
}

const ActionList = () => {
  console.log("ActionList");
  const { getActions } = useActions();
  const actions = getActions();
  return (
    <div class={style.action_list}>
      <p>Actions</p>
      <AddActionForm />
      { actions.map((item) => {
        return <Action name={item} />
      })}
    </div>
  )
}

export default ActionList;
