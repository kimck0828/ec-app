import { createSelector } from 'reselect';

const usersSelector = (state) => {
  return state.users;
};

export const getUserId = createSelector([usersSelector], (state) => state.uid);
export const getUserName = createSelector(
  [usersSelector],
  (state) => state.username
);
