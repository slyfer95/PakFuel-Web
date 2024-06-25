import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const Features = () => {
  return (
    <Container
      maxWidth="md"
      style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        Our Powerful Features
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Loyalty Programs for Fuel Stations" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Easy E-wallet Payments" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Track Transaction History" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Manage Your Account" />
        </ListItem>
      </List>
    </Container>
  );
};

export default Features;
