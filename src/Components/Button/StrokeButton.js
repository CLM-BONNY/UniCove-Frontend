import React from "react";
import * as style from "./styles";

function StrokeButton(props) {
  return(
    <style.StrokeButton onClick={props.onClick}>
      {props.src && <img src={props.src} />}
      {props.btnName && <span>{props.btnName}</span>}
    </style.StrokeButton>
  );
}

export default StrokeButton;