//Material-ui
import {
AppBar,
Tollbar,
Typography,
Button,
IconButton,

  } from "@material-ui/core";
  import MenuIcon from '@material-ui/icons/Menu';
  import { makeStyles } from "@material-ui/core/styles";

  const useStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
      width: "100vw",
      backgroundColor: "green",
      background: "linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%)",
    },
    appBar: {
      
    }
  }));

const Dashboard = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
          <AppBar position='static'>

          </AppBar>
        </div>
    )
}

export default Dashboard