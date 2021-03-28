import React from "react";
import web from "../src/images/img2.svg";
import Commom from "./Commom";

const Home = () => {
  return (
    <>
      <Commom
        name="Dedicated Completely to work on web developemnt"
        imgsrc={web}
        visit="/Portfolio"
        btname="PortFolio"
      />
    </>
  );
};

export default Home;
