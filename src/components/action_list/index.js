import format from 'date-fns/format';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CheckBox from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import { DeleteForever } from '@material-ui/icons';

import useActions from '../../hooks/useActions';
import AddActionForm from '../add_action';

import style from './style.css';

const Action = (props) => {
  const { removeAction, getActionStatus, markDone } = useActions();
  const date = format(props.date || new Date, "yyyy-MM-dd");
  const remove = () => {
    removeAction(props.name);
  }
  const toggleDone = () => {
    markDone(props.name, date, !done);
  }
  const done = getActionStatus(props.name, date);
  const statusButton = () => {
    const icon = done? <CheckBox /> : <CheckBoxOutlineBlankIcon />
    return <IconButton onClick={ toggleDone }>{ icon }</IconButton>
  }

  return (
    <div class={style.action}>
      <Typography>{ props.name }</Typography>
      <span class={style.button_group}>
        { statusButton() }
        <IconButton onClick={remove} color="primary">
          <DeleteForever />
        </IconButton>
      </span>
    </div>
  )
}

const ActionList = (props) => {
  const { getActions } = useActions();
  const actions = getActions();
  return (
    <div class={style.action_list}>
      <p>Actions</p>
      <AddActionForm />
      { actions.map((item) => {
        return <Action name={item} date={props.date}/>
      })}
    </div>
  )
}

export default ActionList;
