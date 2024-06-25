import React from "react";
import { Container, Typography, Grid, IconButton } from "@material-ui/core";

import { Email, Phone } from "@material-ui/icons";

const Contact = () => {
  return (
    <Container maxWidth="md" style={{ padding: "4rem" }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Get in Touch
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            Feel free to reach out if you have any questions or need assistance.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={1}>
            <Grid item>
              <IconButton color="primary">
                <Email />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="body2">waleedbarozai@gmail.com</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item>
              <IconButton color="primary">
                <Phone />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="body2">+923168296885</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
