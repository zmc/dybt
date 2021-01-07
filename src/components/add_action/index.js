import { useState } from 'preact/hooks';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

import useActions from '../../hooks/useActions';

const AddActionForm = () => {
  const [actionName, setActionName] = useState();
  const { addAction } = useActions();
  const onInput = (e) => {
    setActionName(e.target.value);
  }
  const onClick = () => {
    addAction(actionName);
  }

  return (
    <div>
      <TextField type="text" value={actionName} onInput={onInput}/>
      <IconButton onClick={onClick}><AddIcon /></IconButton>
    </div>
  )
}

export default AddActionForm;
