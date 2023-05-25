import React from "react";
import * as style from "./styles";

function StrokeButton(props) {
  return (
    <style.StrokeButton
      onClick={props.onClick}
      margin={props.margin}
      width={props.width}
      height={props.height}
      border={props.border}
      backgroundColor={props.backgroundColor}
      color={props.color}
      fontSize={props.fontSize}
      position={props.position}
      borderTop={props.borderTop}
      borderBottom={props.borderBottom}
    >
      {props.src && <img src={props.src} />}
      {props.btnName && <span>{props.btnName}</span>}
    </style.StrokeButton>
  );
}

export default StrokeButton;
