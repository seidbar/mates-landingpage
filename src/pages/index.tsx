import type { NextPage } from 'next';
import Head from 'next/head';
import { SlideApp } from '../components/SlideApp';
import { SlideAppReverse } from '../components/SlideAppReverse';
import { SlideHome } from '../components/SlideHome';
import { SlideSignUp } from '../components/SlideSignUp';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Mates</title>
      <meta name="description" content="Mates landing page" />
      <link rel="icon" href="../../public/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <SlideHome />
    <SlideApp />
    <SlideAppReverse />
    <SlideSignUp />
  </div>
);

export default Home;
