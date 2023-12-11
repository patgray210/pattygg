// pages/index.tsx
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.text}>Hello I'm Patrick (aka Pattygg) 👋</h1>
        <h1 className={styles.text}>Software Engineer </h1>

        <p>
          <Link href="/about">About</Link>
        
        </p>
        <p>
          <Link href="/about">Work Experience</Link>
        </p>
        <p>
          <Link href="/hobbies">Hobbies</Link>
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src="/patty.jpg" /* Replace with your image path */
          alt="Background"
        />
      </div>
    </div>
  </Layout>
);

export default IndexPage;




