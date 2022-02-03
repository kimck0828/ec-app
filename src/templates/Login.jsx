import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

function Login(props) {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>ログイン</h2>
      <button onClick={() => dispatch(push('/login'))}>ログインする</button>
      <button onClick={() => dispatch(push('/'))}>Home</button>
    </div>
  );
}

export default Login;
