import React from "react";
import { auth } from "../../../config/firebase";
import Button from "@mui/material/Button";

const Feed: React.FC = () => {
  return (
    <>
      <Button onClick={() => auth.signOut()}>Logout</Button>
    </>
  );
};

export default Feed;
