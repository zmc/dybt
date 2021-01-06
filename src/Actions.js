import { createContext } from 'preact';
import { useState } from 'preact/hooks';

const defaultValue = {
  'floss': {}
};

const initialState = JSON.parse(
  localStorage.getItem('actions') ||
  JSON.stringify(defaultValue)
);

const ActionsContext = createContext([{}, () => {}]);

const ActionsProvider = (props) => {
  console.log("ActionsProvider");
  const [state, setState] = useState(initialState);
  return (
    <ActionsContext.Provider value={[state, setState]}>
      {props.children}
    </ActionsContext.Provider>
  )
}

export { ActionsContext, ActionsProvider };
