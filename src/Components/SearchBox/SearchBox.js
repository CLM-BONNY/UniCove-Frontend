import React from "react";
import * as style from "./styles";

function SearchBox(props) {
  return (
    <style.Wrap margin={props.margin} title={props.title}>
      <img
        src={process.env.PUBLIC_URL + "/Images/Search/BackIcon.svg"}
        onClick={props.onClick}
      />
      <input
        placeholder="글 제목이나 내용을 검색해 보세요"
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
      />
      <img src={process.env.PUBLIC_URL + "/Images/Search/SearchIcon.svg"} />
    </style.Wrap>
  );
}

export default SearchBox;
