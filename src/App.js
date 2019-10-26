import React from "react";
import useAxios from "axios-hooks";
import { Grid } from "@material-ui/core";

import Navigation from "./Navigation";
import Task from "./Task";

const App = () => {
  const [{ data }, refetch] = useAxios("/.netlify/functions/getTasks");
  const tasks = (data && data.tasks) || [];

  return (
    <div>
      <Navigation reloadTasks={refetch} />

      <Grid container spacing={1}>
        {tasks.map(task => (
          <Task
            description={task.description}
            isUrgent={task.is_urgent}
            key={task.id}
            title={task.title}
          />
        ))}

      </Grid>
    </div>
  );
};

export default App;
