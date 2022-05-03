import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navContainer}>
        <div className={styles.imgContainer}>
          <Link href="/" passHref>
            <Image
              className={styles.logo}
              src="/images/LOGO.svg"
              alt="logo"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.list_item}>
            <Link href="https://www.natepacheco.dev/">Portfolio</Link>
          </li>
          <li className={styles.list_item}>
            <Link href="https://www.natepacheco.dev/#contact">Contact</Link>
          </li>
        </ul>
        <Link href="/session/video" passHref>
          <button className={styles.tryBtn}>Try Now</button>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
