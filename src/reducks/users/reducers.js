// import * as userActions from "./actions";
import { SIGN_IN, SIGN_OUT } from './actions';
import initialState from '../store/initialState';

export const UsersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case SIGN_IN:
    case SIGN_OUT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
