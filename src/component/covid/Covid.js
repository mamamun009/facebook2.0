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
          <Grid item xs={4}>
            <h4>hello</h4>
          </Grid>
          <Grid item xs={3}>
            <h4>hello</h4>
          </Grid>
          <Grid item xs={5}>
            <h4>hello</h4>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Covid;
