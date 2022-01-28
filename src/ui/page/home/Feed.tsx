import React from "react";
import { auth } from "../../../config/firebase";
import { Header, Footer, Card, Grid } from "../../../design/atoms/index";
import Button from "@mui/material/Button";

const Feed: React.FC = () => {
  return (
    <>
      <Button onClick={() => auth.signOut()}>Logout</Button>
      <Grid>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
      <Footer />
    </>
  );
};

export default Feed;
