import React from "react";
import styles from "../styles/Hero.module.css";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.heroHeading}>
          Minimalist, Fast,
          <br />
          Reliable, and <span>Secured👁‍🗨</span>
          <br />
          Video Conferencing
        </h1>
        <p className={styles.heroDescription}>
          Encrypted video calls without the extra junk
          <br />
          Just you and the person on the other side
        </p>
        <div className={styles.heroButtons}>
          <Link href="/session/video" passHref>
            <button className={styles.createBtn}>
              <Image src="/images/camera.svg" alt="" width={30} height={30} />
              <span>Create Call</span>
            </button>
          </Link>
          <Link href="https://github.com/Zeviks/project-volt" passHref>
            <button className={styles.gitBtn}>
              <Image src="/images/Github.svg" alt="" width={35} height={35} />
            </button>
          </Link>
          <span>Visit Repository</span>
        </div>
        <div className={styles.trustedBy}>
          <span>Trusted by</span>
          <ul>
            <li>
              <Image
                src="/images/Google.svg"
                alt="Google"
                width={30}
                height={30}
              />
            </li>
            <li>
              <Image
                src="/images/Microsoft.svg"
                alt="Microsoft"
                width={30}
                height={30}
              />
            </li>
            <li>
              <Image
                src="/images/AirBnB.svg"
                alt="AirBnb"
                width={30}
                height={30}
              />
            </li>
            <li>
              <Image
                src="/images/Apple.svg"
                alt="Apple"
                width={30}
                height={30}
              />
            </li>
            <li>
              <p className={styles.more}>and many more...</p>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.heroImage}>
          <Image
            src="/images/hero-img.webp"
            alt="hero"
            width={1105}
            height={804}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
