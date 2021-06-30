import {
  SET_FILTER,
} from '../actions';

const filterReducer = (state = 'ALL', action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default filterReducer;
