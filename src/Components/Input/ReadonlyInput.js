import React from "react";
import * as style from "./styles";

export default function ReadonlyInput(props) {
  return (
    <style.Wrap color={props.color}>
      <span>{props.title}</span>
      <input
        readOnly
        name={props.name}
        type={props.type || "text"}
        placeholder={props.placeholder}
      />
    </style.Wrap>
  );
}
