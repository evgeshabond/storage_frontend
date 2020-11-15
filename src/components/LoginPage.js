import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {setToken} from '../localStorage/localStorage'

//Material-ui
import {
  Paper,
  Grid,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//redux actions
import { updateUser, updateToken } from "../redux/Actions";

//API
import api_login from "../api/api_login";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "green",
    background: "linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%)",
  },
  paper: {
    padding: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
    position: "absolute",
    minWidth: "300px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  demoField: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    heigth: "100%",
    backgroundColor: "#ffffff",
  },
}));

const LoginPage = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory()
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (login, password) => {
    try {
      //get {user, token}
      const response = await api_login(login, password);
      //update redux user state with user info and token
      dispatch(updateUser(response.data));
      dispatch(updateToken(response.data));      
      setToken(response.data.token);
      setError("");
      history.push('/dashboard')
    } catch (e) {
      setError("Failed to log in. Check login/password");
      setLogin("");
      setPassword("");
    }
  };

  const handleChange = async (event) => {
    switch (event.target.id) {
      case "login":
        await setLogin(event.target.value);
        break;
      case "password":
        await setPassword(event.target.value);
        break;
    }
  };  

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} direction="column" justify="center">
          <Grid item>
            <TextField
              id="login"
              label="Login"
              variant="outlined"
              fullWidth
              size="small"
              onChange={handleChange}
              value={login}
            />
          </Grid>
          <Grid item>
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              fullWidth
              size="small"
              onChange={handleChange}
              value={password}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="medium"
              onClick={() => handleLogin(login, password)}
            >
              Login
            </Button>
          </Grid>
          <Grid
            item
            container
            spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item>
              <Typography>Or login as </Typography>
            </Grid>
            <Grid item>
              <Button
                color="primary"
                onClick={() => handleLogin("admin", "admin")}
              >
                Admin
              </Button>
            </Grid>
            <Grid item>
              <Button
                color="primary"
                onClick={() => handleLogin("user1", "user1")}
              >
                User1
              </Button>
            </Grid>
            <Grid item>
              <Button
                color="primary"
                onClick={() => handleLogin("user2", "user2")}
              >
                User2
              </Button>
            
          </Grid>
          </Grid>
            {!!error && <Grid item>
              <Typography color='secondary'>{error}</Typography>
            </Grid>}
        </Grid>
      </Paper>
    </div>
  );
};

export default LoginPage;
