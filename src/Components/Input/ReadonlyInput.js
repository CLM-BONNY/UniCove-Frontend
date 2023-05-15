import React from "react";
import * as style from "./styles";

export default function ReadonlyInput(props) {
  return (
    <style.Wrap>
      <style.TitleBlock titlemarginBottom={props.titlemarginBottom}>
        {props.title}
      </style.TitleBlock>
      <style.InputBlock marginBottom={props.marginBottom} color={props.color}>
        <input
          name={props.name}
          type={props.type || "text"}
          placeholder={props.placeholder}
          style={{ outline: 0 }}
          readOnly
          onChange={props.onChange}
          onClick={props.onClick}
        ></input>
      </style.InputBlock>
    </style.Wrap>
  );
}