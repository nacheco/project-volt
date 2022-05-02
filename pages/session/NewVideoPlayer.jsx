import React from "react";
import styles from "../../styles/NewVideoPlayer.module.css";
import Image from "next/image";

const NewVideoPlayer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sideMenu}>
        <div className={styles.accountInfo}>
          <label className={styles.aLabel}>
            Account Info:
            <input
              className={styles.aText}
              type="text"
              name="name"
              placeholder="Name..."
            />
          </label>
          <button className={styles.aBtn} type="submit">
            Generate & Copy ID
          </button>

          <ol className={styles.list}>
            <h1>Instructions:</h1>
            <li>Enter a name</li>
            <li>Click "Generate & Copy ID"</li>
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
              className={styles.cText}
              type="text"
              name="name"
              placeholder="Enter Recipients ID..."
            />
          </label>
          <button className={styles.cBtn} type="submit">
            Call Recipient
          </button>
        </div>
      </div>
      <div className={styles.screens}>
        <div className={styles.myScreen}>
          <div className={styles.essentials}>
            <span className={styles.name}>You</span>
            <button className={styles.hangBtn}>
              <Image src="/images/phone.svg" alt="" width={40} height={40} />
            </button>
          </div>
        </div>
        <div className={styles.userScreen}>
          <div className={styles.essentials}>
            <span className={styles.name}>Recipient</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewVideoPlayer;
