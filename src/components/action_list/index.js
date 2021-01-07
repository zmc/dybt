import format from 'date-fns/format';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CheckBox from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import { DeleteForever } from '@material-ui/icons';
import EditIcon from '@material-ui/icons/Edit';

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
  const deleteButton = () => {
    if ( props.editing ) {
      return (
        <IconButton onClick={remove} color="primary">
          <DeleteForever />
        </IconButton>
      )
    }
  }

  return (
    <div class={style.action}>
      <Typography>{ props.name }</Typography>
      <span class={style.button_group}>
        { statusButton() }
        { deleteButton() }
      </span>
    </div>
  )
}

const ActionList = (props) => {
  const { getActions } = useActions();
  const actions = getActions();
  const toggleEditing = () => {
    props.setEditing(! props.editing);
  }

  return (
    <div class={style.action_list}>
      <div class={style.action_list_header}>
        <Typography>Actions</Typography>
        <span class={style.button_group}>
          <IconButton onClick={toggleEditing}>
            <EditIcon/>
          </IconButton>
        </span>
      </div>
      <AddActionForm editing={props.editing}/>
      { actions.map((item) => {
        return <Action name={item} date={props.date} editing={props.editing}/>
      })}
    </div>
  )
}

export default ActionList;
