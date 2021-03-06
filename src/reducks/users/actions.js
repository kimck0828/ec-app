/** サインイン**/
export const SIGN_IN = 'SIGN_IN';
export const signInAction = ({ uid, username }) => {
  return {
    type: 'SIGN_IN',
    payload: {
      isSignedIn: true,
      uid,
      username,
    },
  };
};

/** サインアウト**/
export const SIGN_OUT = 'SIGN_OUT';
export const signOutAction = () => {
  return {
    type: 'SIGN_OUT',
    payload: {
      isSignedIn: false,
      uid: '',
      username: '',
    },
  };
};
