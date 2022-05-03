import React, { useContext } from "react";
import { Button } from "@material-ui/core";

import { SocketContext } from "../SocketContext";
import { Height } from "@material-ui/icons";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          height: "30vh",
        }}
      >
        <h1>{call.name} is calling:</h1>
        <Button variant="contained" color="primary" onClick={answerCall}>
          Answer
        </Button>
      </div>
    </>
  );
};

export default Notifications;
