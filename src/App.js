import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Switch, Route, useHistory, Redirect } from 'react-router-dom'
import { getToken, setToken } from './localStorage/localStorage'

//redux actions
import { updateUser, updateToken } from "./redux/Actions";

//API
import api_getUserWithToken from './api/api_getUserWithToken'

import logo from "./logo.svg";
// import "./App.css";

//Material ui Font
import "fontsource-roboto";

//Components
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";


function App(props) {
  const user = useSelector((state) => state.user);
  const history = useHistory()
  const dispatch = useDispatch()


  //Check token in localStorage
  //if no token -> redirect to LoginPage
  //if there is token -> try authorize
  const loadToken = async () => {
    let localToken = await getToken()
    if (!localToken) history.push('/login')
    if (localToken) {
      authorizeWithToken(localToken)
    }
  }

  //try authorize
  //if success - push to dashboard, update redux user, update redux token
  //if failed - remove bad token from LS and push to login page
  const authorizeWithToken = async (token) => {
    try {
      const response = await api_getUserWithToken(token, 0);
      history.push('/dashboard')
      dispatch(updateUser(response.data))
      dispatch(updateToken(token))
    }catch(e) {
      setToken('')
      history.push('/login')
    }    
  }
  
  //check token
  useEffect(() => {
    loadToken()
  }, [])

  return (
    <>    
    <Switch>
      <Route path='/login' component={LoginPage}/>
      <Route path='/dashboard' component={Dashboard} />
      <Route path='*' render={(props) => <Redirect to='/login' {...props}/>} />
    </Switch>
    </>
  );
}

export default App;
