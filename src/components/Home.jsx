import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
const Home = () => {
  return (
    <Container
      maxWidth="md"
      style={{ marginTop: "2rem", marginBottom: "2rem" }}
    >
      <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h1" component="h1" gutterBottom>
            Welcome to <span style={{ color: "#3f51b5" }}>PakFuel</span>
          </Typography>
          <Typography variant="body1" paragraph>
            We provide Loyalty Programs for Fuel Stations and easy payment
            solutions using e-wallet payments.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* You can add an image or any additional visual elements here */}
          <img
            src="station.jpg"
            alt="Fuel Station"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
