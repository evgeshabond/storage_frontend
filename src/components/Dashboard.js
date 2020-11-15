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

const Dashboard = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>This is dashboard page</div>
    )
}

export default Dashboard