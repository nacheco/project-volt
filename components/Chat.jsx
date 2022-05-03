import React from "react";
import styles from "../styles/Chat.module.css";
import Options from "./Options";
import Notifications from "./Notifications";
import NewVideoPlayer from "./NewVideoPlayer";

const Chat = () => {
  return (
    <div>
      <NewVideoPlayer></NewVideoPlayer>
    </div>
  );
};

export default Chat;
