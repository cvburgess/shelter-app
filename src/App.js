import React from "react";
import useAxios from "axios-hooks";
import { Grid } from "@material-ui/core";

import Navigation from "./Navigation";
import Shelter from "./Shelter";

const App = () => {
  const [{ data }, refetch] = useAxios("/.netlify/functions/getShelters");
  // const shelters = (data && data.shelter) || [];
  const shelters = [{
    'id': 4,
    'name': 'Arthenia L. Joyner University Area Community Library',
    'address': '3619 N. 22nd St. Tampa, FL 33613-5872',
    "phone": '  PHONE: 813-273-3652'
  }]

  return (
    <div>
      <Navigation reloadShelters={refetch} />

      <Grid container spacing={1}>
        {shelters.map(shelter => (
          <Shelter
            name={shelter.name}
            address={shelter.address}
            phone={shelter.phone}
            key={shelter.id}
          />
        ))}

      </Grid>
    </div>
  );
};

export default App;
