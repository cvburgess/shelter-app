import React, { useState } from "react";
import useAxios from "axios-hooks";
import {
  Button,
  TextField,
  Grid,
  InputAdornment,
  Paper
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    padding: 16
  }
});

const AddTask = ({ reloadTasks }) => {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [{ data }, addTask] = useAxios(
    `/.netlify/functions/addTask?title=${value}`,
    { manual: true }
  );

  return (
    <Grid item xs={12}>
      <Paper className={classes.container}>
        <TextField
          label="New Task"
          fullWidth
          value={value}
          onChange={event => setValue(event.target.value)}
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  color="primary"
                  onClick={() => {
                    addTask();
                    setValue("");
                    window.setTimeout(reloadTasks, 500);
                  }}
                  startIcon={<AddIcon />}
                  variant="contained"
                >Add</Button>
              </InputAdornment>
            )
          }}
        />
      </Paper>
    </Grid>
  );
};

export default AddTask;
