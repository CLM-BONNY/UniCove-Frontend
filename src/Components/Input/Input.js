import React from "react";
import * as style from "./styles";

export default function Input(props) {
  return (
    <style.Wrap
      borderColor={props.borderColor}
      color={props.color || "#808080"}
    >
      <span>{props.title}</span>
      {props.contentPlaceholder ? (
        <textarea
          name={props.name}
          type={props.type || "text"}
          placeholder={props.contentPlaceholder}
          onChange={props.onChange}
          onClick={props.onClick}
          value={props.value}
        />
      ) : (
        <input
          name={props.name}
          onClick={props.onClick}
          type={props.type || "text"}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
        />
      )}
    </style.Wrap>
  );
}
