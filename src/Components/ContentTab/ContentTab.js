import React from "react";
import * as style from "./styles";

export default function ContentTab(props) {
  return (
    <>
      <style.ContentTabBlock
        marginBottom={props.marginBottom}
        onClick={props.onClick}
      >
        <img className="Imogi" src={props.Imogisrc}></img>
        <span>{props.content}</span>
        <div>
          {props.src && (
            <img
              className="Right"
              src={props.src}
              onClick={props.onImageClick}
            />
          )}
          <span>{props.text}</span>
        </div>
      </style.ContentTabBlock>
    </>
  );
}
