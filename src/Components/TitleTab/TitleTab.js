import React from "react";
import * as style from "./styles";

export default function TitleTab(props) {
  return (
    <>
      <style.TitleTabBlock marginBottom={props.marginBottom}>
        {props.TabTitle}
      </style.TitleTabBlock>
    </>
  );
}
