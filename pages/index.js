import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>VOLT - A minimalist take on video conferencing</title>
        <meta
          name="description"
          content="A minimalist take on video conferencing"
        />
      </Head>
      <Hero />
    </div>
  );
}
