import React, { useState } from "react";
import axios from 'axios';

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

const LoginPage = () => {
  const classes = useStyles();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = async (event) => {
    switch (event.target.id) {
      case "login":
        await setLogin(event.target.value);
        break;
      case "password":
        await setPassword(event.target.value);
        break;
    }
    console.log('login is ', login)
    console.log('password is ', password)
  };

  const tryLogin = async (login, password) => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/`)
    console.log(response)
  }

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
            <Button variant="contained" color="primary" fullWidth size="medium" onClick={tryLogin}>
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
              <Link>Admin</Link>
            </Grid>
            <Grid item>
              <Link>User1</Link>
            </Grid>
            <Grid item>
              <Link>User2</Link>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default LoginPage;
