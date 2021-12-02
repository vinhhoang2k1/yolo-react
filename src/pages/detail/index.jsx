import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Suggests from "./suggests";
import Description from "./description";
function index() {
  return (
    <div>
      <Header />
      <Description />
      <Suggests />
      <Footer />
    </div>
  );
}

export default index;
