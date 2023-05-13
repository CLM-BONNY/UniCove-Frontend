import React from "react";
import * as style from "./styles";

export default function Input(props) {
  return (
    <>
      <style.TitleBlock titlemarginBottom={props.titlemarginBottom}>
        {props.title}
      </style.TitleBlock>
      <style.InputBlock marginBottom={props.marginBottom}>
        <input
          name={props.name}
          type={props.type || "text"}
          placeholder={props.placeholder}
          style={{ outline: 0 }}
        ></input>
      </style.InputBlock>
    </>
  );
}
