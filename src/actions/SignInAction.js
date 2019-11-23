export const signIn = credential => {
    return (dispatch, getState, { getFirebase }) => {
      const firebase = getFirebase();
      dispatch({ type: "LOGIN_STARTED" });
  
      firebase
        .auth()
        .signInWithEmailAndPassword(credential.email, credential.password)
        .then(() => {
          return dispatch({ type: "LOGIN_SUCCESS" });
        })
        .catch(err => {
          dispatch({ type: "LOGIN_ERROR", err });
        });
    };
  };