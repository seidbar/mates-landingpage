import type { NextPage } from 'next';
import Head from 'next/head';
import { LandingHero } from '../components/LandingHero';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Mates</title>
      <meta name="description" content="Mates landing page" />
      <link rel="icon" href="../../public/favicon.ico" />
    </Head>
    <LandingHero />
  </div>
);

export default Home;
