import type { NextPage } from "next";
import Hero from "../components/Home/Hero";
import Stats from "../components/Home/Stats";
import Galleri from "../components/Home/Galleri";

const Home: NextPage = (props) => {
  return (
    <>
      <Hero />
      <Stats />
      <Galleri />
    </>
  );
};

export default Home;
