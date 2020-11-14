import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {Switch, Route, useHistory, Redirect } from 'react-router-dom'
import { getToken } from './localStorage/localStorage'

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
  const [isLoading, setIsLoading] = useState(true)
  const localToken = getToken('token')

  useEffect(() => {    
    if (!user.login) {
      if (localToken) {
        
      }
      if (!localToken) {
        history.push('/login')
      }
      
    }
    if (user.login) history.push('/dashboard')
  }, [user, localToken])



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
