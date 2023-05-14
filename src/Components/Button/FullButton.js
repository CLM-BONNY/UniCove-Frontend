import React from "react";
import * as style from "./styles";

function FullButton(props) {
  return (
    <style.FullButton
      onClick={props.onClick}
      width={props.width}
      height={props.height}
      border={props.border}
      backgroundColor={props.backgroundColor}
      color={props.color}
      fontSize={props.fontSize}
      btnSubName={props.btnSubName}
    >
      {props.src && <img src={props.src} />}
      {props.btnName && <span>{props.btnName}</span>}
      {props.btnSubName && <span>{props.btnSubName}</span>}
    </style.FullButton>
  );
}

export default FullButton;
