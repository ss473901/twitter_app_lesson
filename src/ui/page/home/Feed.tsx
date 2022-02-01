import React from "react";
import { auth } from "../../../config/firebase";
import Button from "@mui/material/Button";
import TweetInput from "../../../components/TweetInput";

const Feed: React.FC = () => {
  return (
    <>
      <TweetInput />
      <Button onClick={() => auth.signOut()}>Logout</Button>
    </>
  );
};

export default Feed;
