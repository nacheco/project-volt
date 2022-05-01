import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>VOLT. - A minimalist take on video conferencing</title>
        <meta name="description" content="A minimalist take on video conferencing" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
    <Hero />
    </div>
  )
}
