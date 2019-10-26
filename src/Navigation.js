import React from "react";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography
} from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  menuButton: {
    marginRight: 16
  },
  title: {
    flexGrow: 1
  }
});

const Navigation = ({ reloadTasks }) => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" elevation={0} square={false}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          onClick={() => reloadTasks()}
        >
          <RefreshIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          DO-A-BULL
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
