import Analizetic from "../components/analiz/Analizetic";
import React from "react";
import Footer from "../components/home/Footer";
import Map from "../components/home/Map";
import Information from "../components/home/Information";
import Brend from "../components/home/Brend";
import Customer from "../components/home/Customer";
import Product from "../components/home/Product";
import Oprtions from "../components/analiz/Oprtions";

const Analiz = () => {
  return (
    <div className="mt-10">
      <Analizetic />
      <Oprtions />
      <Product />
      <Customer />
      <Brend />
      <Information />
      <Map />
      <Footer />
    </div>
  );
};

export default Analiz;
