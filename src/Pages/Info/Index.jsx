import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import GridCards from "../../components/GridCardInfo/index";

import "./TelaInfo.css";

const TelaInfo = ({ socket }) => {  
  return (
    <>
      <Header icon="info" title="Info" />
        <div className="containerTelaInfo">
          <GridCards />
        </div>
      <Footer />
    </>
  );
};

export default TelaInfo;
