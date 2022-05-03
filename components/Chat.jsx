import React from "react";
import Options from "./Options";
import Notifications from "./Notifications";
import NewVideoPlayer from "./NewVideoPlayer";

const Chat = () => {
  return (
    <div>
      <NewVideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
};

export default Chat;
