import { useState } from 'preact/hooks';
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
      <input type="text" value={actionName} onInput={onInput}/>
      <button onClick={onClick}>+</button>
    </div>
  )
}

export default AddActionForm;
