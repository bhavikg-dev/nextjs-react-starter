import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.scss'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <p>Welcome to Home Page</p>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about-us">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/privacy-policy">
              <a>Privacy Policy</a>
            </Link>
          </li>
        </ul>
      </div>
      <footer className={styles.footer}>
        <p>Welcome to Footer Page</p>
      </footer>
    </div>
  )
}
