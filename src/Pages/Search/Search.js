import React from "react";
import * as style from "./styles";
import SearchBox from "../../Components/SearchBox/SearchBox";

function Search() {
  return(
    <>
    <SearchBox />
    <style.ContentBlock>
      <img src={process.env.PUBLIC_URL + "/Images/Search/GraySearchIcon.svg"} />
    </style.ContentBlock>
    </>
  );
}

export default Search;