import { createStore } from 'redux';

import { Modif, Supr } from '/actions.js';




function UserReducer(state, action) {
  switch (action.type) {
    case 'Modif':
      return {};
    case 'Supr':
      return { };
    default:
      return state;
  }
}


export default UserReducer;