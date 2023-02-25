import React from "react";
import "./Covid.css";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";

const Covid = () => {
  return (
    <div className="covid">
      <h2>COVID-19 Coronavirus Tracker</h2>
      <Container maxWidth="md" className="profile_post">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <iframe
              src="https://api.ncovtrack.com/covid?metric=cases&showTable=false&showMap=true"
              title="COVID & Vaccination Statistics"
              height="500"
              width="800"
            />
          </Grid>
          <Grid item xs={12}>
            <iframe
              src="https://api.ncovtrack.com/vaccine?metric=deaths&showTable=false&showMap=true"
              title="ncovtrack - COVID & Vaccination Statistics"
              height="500"
              width="800"
            ></iframe>
          </Grid>
          <Grid item xs={12}>
            <iframe
              src="https://api.ncovtrack.com/vaccine?metric=recovered&showTable=false&showMap=true"
              title="ncovtrack - COVID & Vaccination Statistics"
              height="500"
              width="800"
            ></iframe>
          </Grid>
          <Grid item xs={12}>
            <iframe
              src="https://api.ncovtrack.com/vaccine?metric=active&showTable=false&showMap=true"
              title="ncovtrack - COVID & Vaccination Statistics"
              height="500"
              width="800"
            ></iframe>
          </Grid>
          <Grid item xs={12}>
            <iframe
              src="https://api.ncovtrack.com/vaccine?metric=tests&showTable=false&showMap=true"
              title="ncovtrack - COVID & Vaccination Statistics"
              height="500"
              width="800"
            ></iframe>
          </Grid>
          <Grid item xs={12}>
            <iframe
              src="https://api.ncovtrack.com/vaccine?metric=vaccinated&showTable=false&showMap=true"
              title="ncovtrack - COVID & Vaccination Statistics"
              height="500"
              width="800"
            ></iframe>
          </Grid>
          <Grid item xs={12}>
            <iframe
              src="https://api.ncovtrack.com/vaccine?metric=second_dose&showTable=false&showMap=true"
              title="ncovtrack - COVID & Vaccination Statistics"
              height="500"
              width="800"
            ></iframe>
          </Grid>
          <Grid item xs={12}>
            <iframe
              src="https://api.ncovtrack.com/vaccine?metric=vaccinatedBooster&showTable=false&showMap=true"
              title="ncovtrack - COVID & Vaccination Statistics"
              height="500"
              width="800"
            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Covid;
