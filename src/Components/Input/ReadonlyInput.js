import React from "react";
import * as style from "./styles";

export default function ReadonlyInput(props) {
  return (
    <style.Wrap>
      <span>{props.title}</span>
      <input
        readOnly
        name={props.name}
        onClick={props.onClick}
        type={props.type || "text"}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </style.Wrap>
  );
}
