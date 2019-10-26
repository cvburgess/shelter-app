import React from "react";
import { Checkbox, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  checkbox: {
    marginRight: 16
  },
  container: {
    height: 58,
    padding: 16,
    backgroundColor: ({ isUrgent }) => (isUrgent ? "#f1c40f" : "white")
  },
  flex: {
    display: "flex",
    alignItems: "center"
  }
});

const Task = ({ description, isUrgent, title }) => {
  const classes = useStyles({ isUrgent });

  return (
    <Grid item xs={12}>
      <Paper className={classes.container}>
        <div className={classes.flex}>
          <Checkbox onChange={() => {}} className={classes.checkbox} />

          <div>
            <Typography variant="h6">{title}</Typography>
            <Typography>{description}</Typography>
          </div>
        </div>
      </Paper>
    </Grid>
  );
};

export default Task;
