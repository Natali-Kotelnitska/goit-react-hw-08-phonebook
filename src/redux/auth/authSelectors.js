const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;
const getToken = state => state.auth.token;

const isFetchingCurrent = state => state.auth.isFetchingCurrent;
const getLoadingUser = state => state.auth.loadingUser;

export {
  getUserName,
  getUserEmail,
  getToken,
  // getError,
  isFetchingCurrent,
  // getLoading,
  getLoadingUser,
};
// authSelectors (index.js)
