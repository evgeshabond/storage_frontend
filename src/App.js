import { Provider } from "react-redux";

import logo from "./logo.svg";
// import "./App.css";

//Material ui Font
import "fontsource-roboto";

//store
import store from './redux/store'

//Components
import LoginPage from "./LoginPage";

function App() {
  const myStorage = window.localStorage;

  const setToken = (token) => {
    myStorage.setItem("token", JSON.stringify(token));
  };
  const getToken = async (token) => {
    const response = await myStorage.getItem("token");
    return JSON.parse(response);
  };

  return (
    <>
      <Provider store={store}>
        <LoginPage setToken={setToken} />
      </Provider>
    </>
  );
}

export default App;
