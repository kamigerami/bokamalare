import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>Boka målare</title>
        <meta name="description" content="Boka målare och få gratis offert" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Footer/>
    </>
  );
};

export default Home;
