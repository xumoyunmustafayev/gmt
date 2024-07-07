import React from "react";
import Footer from "../components/home/Footer";
import Map from "../components/home/Map";
import Brend from "../components/home/Brend";
import Customer from "../components/home/Customer";
import Global from "../components/Compony/Global";
import Fact from "../components/Compony/Fact";
import Sertification from "../components/catalog/Sertification";

const Kompane = () => {
  return (
    <div>
      <Global />
      <Fact />
      <Customer />
      <Brend />
      <Sertification />
      <Map />
    </div>
  );
};

export default Kompane;
