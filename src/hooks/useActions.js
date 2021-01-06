import { useContext } from 'preact/hooks';

import { ActionsContext } from '../Actions';

function useActions() {
  const [actions, _setActions] = useContext(ActionsContext);

  function getActions() {
    const action_names = Object.keys(actions);
    console.log(action_names);
    if (action_names === undefined) {
      return ['example']
    } else {
      return action_names
    }
  }

  function setActions(new_actions) {
    console.log("setActions");
    if ( actions == new_actions ) { return }
    localStorage.setItem('actions', JSON.stringify(new_actions));
    _setActions(new_actions);
  }

  function addAction(action) {
    console.log(`adding ${action}`);
    if ( actions[action] === undefined ) {
      const new_actions = {...actions};
      new_actions[action] = {};
      setActions(new_actions);
    }
  }

  function removeAction(action) {
    console.log(`removing ${action}`);
    if ( actions[action] === undefined ) { return }
    const new_actions = {...actions};
    delete new_actions[action];
    setActions(new_actions);
  }

  function getHistory(action) {
    return actions[action];
  }

  function getActionStatus(action, date) {
    const status = actions[action][date];
    //console.log(`${action} done: ${status}`);
    if ( status === undefined ) { return false }
    else if ( status === false ) { return false }
    else if ( status === 0 ) { return false }
    else if ( status >= 1 ) { return true }
    else if ( status === true ) { return true }
    else { return "ERROR" }
  }

  function markDone(action, date, done) {
    console.log(`markDone ${action} ${date} ${done}`);
    if ( done === undefined ) { done = true }
    const new_actions = {...actions};
    if ( done === true ) {
      new_actions[action][date] = done;
    } else {
      delete new_actions[action][date];
    }
    setActions(new_actions);
  }

  return {
    actions,
    getActions,
    addAction,
    removeAction,
    getActionStatus,
    markDone
  }
};

export default useActions;
