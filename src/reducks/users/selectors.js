import { createSelector } from 'reselect';

const usersSelector = (state) => {
  return state.users;
};

export const getUserId = createSelector([usersSelector], (state) => state.uid);
