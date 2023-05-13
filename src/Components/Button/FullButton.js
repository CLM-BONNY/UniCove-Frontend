import React from "react";
import * as style from "./styles";

function FullButton(props) {
  return (
    <style.FullButton onClick={props.onClick}>
      {props.src && <img src={props.src} />}
      {props.btnName && <span>{props.btnName}</span>}
      {props.btnSubName && <span>{props.btnSubName}</span>}
    </style.FullButton>
  );
}

export default FullButton;
