import React from "react";
import styles from "../styles/Chat.module.css";

import VideoPlayer from "./VideoPlayer";
import Options from "./Options";
import Notifications from "./Notifications";
import NewVideoPlayer from "../pages/session/NewVideoPlayer";

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
