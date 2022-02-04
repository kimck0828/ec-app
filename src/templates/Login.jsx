import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { signInAction } from '../reducks/users/actions';
function Login(props) {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>ログイン</h2>
      <button
        onClick={() => {
          dispatch(signInAction({ uid: '00002', username: 'kimck' }));
          dispatch(push('/'));
        }}
      >
        ログインする
      </button>
      <button onClick={() => dispatch(push('/'))}>Home</button>
    </div>
  );
}

export default Login;
