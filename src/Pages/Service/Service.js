import React from "react";
import * as style from "./styles";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Service() {
  const title = "서비스 이용약관";
  return (
    <style.Wrap>
      <Header title={title} />
      <Footer title={title} />
    </style.Wrap>
  );
}

export default Service;
