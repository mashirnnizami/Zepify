import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Food from "../components/Food";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Food />
      <Footer />
    </>
  );
}

export default Home;
