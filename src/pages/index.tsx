import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { LandingHero } from '../components/LandingHero';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mates</title>
        <meta name="description" content="Mates landing page" />
        <link rel="icon" href="../../public/favicon.ico" />
      </Head>
      <LandingHero />
    </div>
  );
};

export default Home;
