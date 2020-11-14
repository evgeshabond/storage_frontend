const myStorage = window.localStorage;
const setToken = (token) => {
  myStorage.setItem("token", JSON.stringify(token));
};
const getToken = async (token) => {
  const response = await myStorage.getItem("token");
  return JSON.parse(response);
};

export {setToken, getToken}