import React from "react";
import * as style from "./styles";

function FullButton(props) {
  return (
    <style.FullButton
      onClick={props.onClick}
      margin={props.margin}
      width={props.width}
      height={props.height}
      border={props.border}
      backgroundColor={props.backgroundColor}
      color={props.color}
      fontSize={props.fontSize}
      btnSubName={props.btnSubName}
      position={props.position}
      top={props.top}
      left={props.left}
    >
      {props.src && <img src={props.src} />}
      {props.btnName && <span>{props.btnName}</span>}
      {props.btnSubName && <span>{props.btnSubName}</span>}
    </style.FullButton>
  );
}

export default FullButton;
