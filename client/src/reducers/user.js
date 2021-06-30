import {
  SET_USER,
} from '../actions';

import isEmpty from 'lodash/isEmpty';

const initialState = {
  verified: false,
  info: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        verified: !isEmpty(action.user),
        info: action.user,
      }
    default:
      return state;
  }
}

export default userReducer;