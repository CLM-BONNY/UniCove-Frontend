import React from "react";
import * as style from "./styles";

function FullButton(props) {
  return (
    <style.FullButton
      onClick={props.onClick}
      padding={props.padding}
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
      transform={props.transform}
    >
      {props.src && <img src={props.src} />}
      {props.btnName && <span>{props.btnName}</span>}
      {props.btnSubName && <span>{props.btnSubName}</span>}
    </style.FullButton>
  );
}

export default FullButton;
