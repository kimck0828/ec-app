import { push } from 'connected-react-router';
import React from 'react';
import { useDispatch } from 'react-redux';

function Home(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Home</h2>
      <button onClick={() => dispatch(push('/login'))}>ログインする</button>
    </div>
  );
}

export default Home;
