import React from "react";
import * as style from "./styles";

function FullButton(props) {
  return (
    <style.FullButton
      onClick={props.onClick}
      padding={props.padding}
      margin={props.margin}
      width={props.width}
      maxWidth={props.maxWidth}
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
      borderTop={props.borderTop}
      borderBottom={props.borderBottom}
    >
      {props.src && <img src={props.src} />}
      {props.btnName && <span>{props.btnName}</span>}
      {props.btnSubName && <span>{props.btnSubName}</span>}
    </style.FullButton>
  );
}

export default FullButton;
