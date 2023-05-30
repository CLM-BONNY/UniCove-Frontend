import React from "react";
import * as style from "./styles";
import FullButton from "../Button/FullButton";

function LikePlaceItem(props) {
  return (
    <style.Wrap>
      <style.PlaceName>{props.placeName}</style.PlaceName>
      <style.Location>{props.location}</style.Location>
      <FullButton
        margin={"0px"}
        padding={"0px"}
        btnName={"지도 보기"}
        width={"15%"}
        height={"5%"}
        backgroundColor={"#e0e0e0"}
        color={"#000000"}
        fontSize={"13px"}
        onClick={() => props.onClick(props.mode, props.lat, props.lng)}
      />
    </style.Wrap>
  );
}

export default LikePlaceItem;
