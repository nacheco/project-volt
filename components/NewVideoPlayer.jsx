import React, { useContext, useState } from "react";
import styles from "../styles/NewVideoPlayer.module.css";
import Image from "next/image";
import CopyToClipboard from "react-copy-to-clipboard";

import { SocketContext } from "../SocketContext";

const NewVideoPlayer = ({ children }) => {
  const {
    me,
    name,
    setName,
    leaveCall,
    callUser,
    callAccepted,
    callRejected,
    callCancelled,
    callEnded,
    stream,
    call,
    myVideo,
    userVideo,
  } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.sideMenu}>
        <div className={styles.accountInfo}>
          <span className={styles.warning}>
            WARNING: Server is Currently Offline.
          </span>
          <label className={styles.aLabel}>
            Account Info:
            <input
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.aText}
              type="text"
              name="name"
              placeholder="Enter Your Name..."
            />
          </label>

          <CopyToClipboard text={me}>
            <button className={styles.aBtn} type="submit" disabled>
              Generate & Copy ID
            </button>
          </CopyToClipboard>
          <ol className={styles.list}>
            <h1>Instructions:</h1>
            <li>Enter a name</li>
            <li>Click Generate & Copy ID</li>
            <li>
              Paste code below & click the button to call <span>yourself</span>
            </li>
          </ol>
          <ul className={styles.list}>
            <h2>or</h2>
            <li>Enter a friends code to call them</li>
            <li>Give your code to a friend and have them call you.</li>
          </ul>
        </div>

        <div className={styles.makeACall}>
          <label className={styles.cLabel}>
            Make A Call:
            <input
              label="ID to call"
              value={idToCall}
              onChange={(e) => setIdToCall(e.target.value)}
              className={styles.cText}
              type="text"
              name="name"
              placeholder="Enter Recipients ID..."
            />
          </label>
          <button className={styles.cBtn} type="submit" disabled>
            Call Recipient
          </button>
        </div>
      </div>
      {/* Screens */}
      <div className={styles.screens}>
        {/* My Screen */}
        <div className={styles.myScreen}>
          <video
            playsInline
            ref={myVideo}
            autoPlay
            muted
            className={styles.video}
          />
          <div className={styles.essentials}>
            <span className={styles.name}>{name || "You"}</span>
            <button className={styles.hangBtn} onClick={leaveCall}>
              <Image src="/images/phone.svg" alt="" width={22} height={22} />
            </button>
          </div>
        </div>

        {/* User's Screen */}

        <div className={styles.userScreen}>
          <video
            playsInline
            ref={userVideo}
            autoPlay
            className={styles.video}
          />
          <div className={styles.essentials}>
            <span className={styles.name}>{call.name || "Recipient"}</span>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default NewVideoPlayer;
