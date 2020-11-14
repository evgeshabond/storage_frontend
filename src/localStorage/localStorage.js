const myStorage = window.localStorage;
const setToken = (token) => {
  myStorage.setItem("token", token);
};
const getToken = async (token) => {
  const response = await myStorage.getItem("token");
  return response;
};

export {setToken, getToken}