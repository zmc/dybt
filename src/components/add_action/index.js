import { useState } from 'preact/hooks';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

import useActions from '../../hooks/useActions';

import style from './style.css';

const AddActionForm = (props) => {
  const [actionName, setActionName] = useState();
  const { addAction } = useActions();
  const onInput = (e) => {
    setActionName(e.target.value);
  }
  const onClick = () => {
    addAction(actionName);
  }

  if ( props.editing ) {
    return (
      <div class={style.add_action_form}>
        <TextField 
          value={actionName}
          onInput={onInput}
          placeholder="do a thing"
        />
        <IconButton className={style.right_align} onClick={onClick}>
          <AddIcon />
        </IconButton>
      </div>
    )
  }
}

export default AddActionForm;
