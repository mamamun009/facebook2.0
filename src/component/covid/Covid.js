import React from "react";
import "./Covid.css";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";

const Covid = () => {
  return (
    <div className="covid">
      <div className="covid_title">
        <h2>COVID-19 Coronavirus Current Information</h2>
      </div>

      <Container maxWidth="md" className="profile_post">
        <Grid container spacing={3} className="covid_item">
          <li
            style={{ fontSize: "18px", paddingTop: "10px", fontWeight: "bold" }}
          >
            Covid-19 Cornavirus Total Cases in The World
          </li>
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={12}
          >
            <iframe
              src="https://api.ncovtrack.com/covid?metric=cases&showTable=false&showMap=true"
              title="COVID & Vaccination Statistics"
              height="500"
              width="600"
            />
          </Grid>
          <li
            style={{ fontSize: "18px", paddingTop: "10px", fontWeight: "bold" }}
          >
            Covid-19 Cornavirus Total Deaths in The World
          </li>
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={12}
          >
            <iframe
              src="https://api.ncovtrack.com/vaccine?metric=deaths&showTable=false&showMap=true"
              title="ncovtrack - COVID & Vaccination Statistics"
              height="500"
              width="600"
            ></iframe>
          </Grid>
          <li
            style={{ fontSize: "18px", paddingTop: "10px", fontWeight: "bold" }}
          >
            Covid-19 Cornavirus Total Recoveries in The World
          </li>
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={12}
          >
            <iframe
              src="https://api.ncovtrack.com/vaccine?metric=recovered&showTable=false&showMap=true"
              title="ncovtrack - COVID & Vaccination Statistics"
              height="500"
              width="600"
            ></iframe>
          </Grid>
          <li
            style={{ fontSize: "18px", paddingTop: "10px", fontWeight: "bold" }}
          >
            Covid-19 Cornavirus Total Active in The World
          </li>
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={12}
          >
            <iframe
              src="https://api.ncovtrack.com/vaccine?metric=active&showTable=false&showMap=true"
              title="ncovtrack - COVID & Vaccination Statistics"
              height="500"
              width="600"
            ></iframe>
          </Grid>
          <li
            style={{ fontSize: "18px", paddingTop: "10px", fontWeight: "bold" }}
          >
            Covid-19 Cornavirus Tests in The World
          </li>
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={12}
          >
            <iframe
              src="https://api.ncovtrack.com/vaccine?metric=tests&showTable=false&showMap=true"
              title="ncovtrack - COVID & Vaccination Statistics"
              height="500"
              width="600"
            ></iframe>
          </Grid>

          <li
            style={{ fontSize: "18px", paddingTop: "10px", fontWeight: "bold" }}
          >
            Covid-19 Cornavirus Second Doses in The World
          </li>
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={12}
          >
            <iframe
              src="https://api.ncovtrack.com/vaccine?metric=second_dose&showTable=false&showMap=true"
              title="ncovtrack - COVID & Vaccination Statistics"
              height="500"
              width="600"
            ></iframe>
          </Grid>
          <li
            style={{ fontSize: "18px", paddingTop: "10px", fontWeight: "bold" }}
          >
            Covid-19 Cornavirus Boosters Doses in The World
          </li>
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={12}
          >
            <iframe
              src="https://api.ncovtrack.com/vaccine?metric=vaccinatedBooster&showTable=false&showMap=true"
              title="ncovtrack - COVID & Vaccination Statistics"
              height="500"
              width="600"
            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Covid;
