import React from "react";
import * as style from "./styles";
import FullButton from "../Button/FullButton";

function LikePlaceItem(props) {
  return (
    <style.Wrap>
      <style.PlaceName>{props.placeName}</style.PlaceName>
      <style.Location>{props.location}</style.Location>
      <FullButton
        margin={"10px"}
        padding={"0px"}
        btnName={"지도 보기"}
        width={"15%"}
        backgroundColor={"#e0e0e0"}
        color={"#000000"}
        fontSize={"13px"}
      />
    </style.Wrap>
  );
}

export default LikePlaceItem;
