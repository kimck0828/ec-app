import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { UsersReducer } from '../users/reducers';

/** reducerをここに登録 */
const reducers = {
  users: UsersReducer,
};

const createStore = (history) => {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      ...reducers,
    }),
    applyMiddleware(routerMiddleware(history))
  );
};
export default createStore;
