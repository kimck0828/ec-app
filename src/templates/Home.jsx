import React from 'react';
import { push } from 'connected-react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getUserId } from '../reducks/users/selectors';
import { signOutAction } from '../reducks/users/actions';

function Home(props) {
  const dispatch = useDispatch();

  const selector = useSelector((state) => state);
  const uid = getUserId(selector);

  const signout = (uid) => {
    if (!uid) {
      return '';
    }
    return (
      <div>
        <h3>{uid}</h3>
        <button
          onClick={() => {
            dispatch(signOutAction());
            dispatch(push('/'));
          }}
        >
          ログアウト
        </button>
      </div>
    );
  };

  return (
    <div>
      <h2>Home</h2>
      <button onClick={() => dispatch(push('/login'))}>ログインする</button>
      {signout(uid)}
    </div>
  );
}

export default Home;
