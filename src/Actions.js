import { createContext } from 'preact';
import { useState } from 'preact/hooks';

const defaultValue = {
  'floss': {}
};

function getInitialState() {
  if (typeof window === "undefined") {
    return {}
  }
  return JSON.parse(
    localStorage.getItem('actions') ||
    JSON.stringify(defaultValue)
  )
}

const ActionsContext = createContext([{}, () => {}]);

const ActionsProvider = (props) => {
  const [state, setState] = useState(getInitialState());
  return (
    <ActionsContext.Provider value={[state, setState]}>
      {props.children}
    </ActionsContext.Provider>
  )
}

export { ActionsContext, ActionsProvider };
