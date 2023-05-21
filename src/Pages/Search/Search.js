import React from "react";
import * as style from "./styles";
import Footer from "../../Components/Footer/Footer";
import SearchBox from "../../Components/SearchBox/SearchBox";

function Search() {
  const title = "검색";
  return(
    <>
    <SearchBox />
    <style.ContentBlock>
      <img src={process.env.PUBLIC_URL + "/Images/Search/GraySearchIcon.svg"} />
    </style.ContentBlock>
    <Footer title={title} />
    </>
  );
}

export default Search;