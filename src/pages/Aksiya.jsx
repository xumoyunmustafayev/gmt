import React from "react";
import Footer from "../components/home/Footer";
import Map from "../components/home/Map";
import Information from "../components/home/Information";
import News from "../components/home/News";
import Brend from "../components/home/Brend";
import Customer from "../components/home/Customer";
import Popular from "../components/home/Popular";
import Kabinet from "../components/home/Kabinet";
import Product from "../components/home/Product";
import AksiyaMain from "../components/Aksiya/AksiyaMain";

const Aksiya = () => {
  return (
    <div>
      <AksiyaMain />
      <Kabinet />
      <Product />

      <Brend />

      <News />
      <Map />
    </div>
  );
};

export default Aksiya;
