import React from "react";
import * as style from "./styles";

export default function Input(props) {
  return (
    <style.Wrap>
      <style.TitleBlock titlemarginBottom={props.titlemarginBottom}>
        {props.title}
      </style.TitleBlock>
      <style.InputBlock
        marginBottom={props.marginBottom}
        color={props.color}
        borderColor={props.borderColor}
      >
        <input
          name={props.name}
          type={props.type || "text"}
          placeholder={props.placeholder}
          style={{ outline: 0 }}
          onChange={props.onChange}
          onClick={props.onClick}
        />
        {props.contentPlaceholder && (
          <textarea
            name={props.name}
            type={props.type || "text"}
            placeholder={props.contentPlaceholder}
            style={{ outline: 0 }}
            onChange={props.onChange}
            onClick={props.onClick}
          />
        )}
      </style.InputBlock>
    </style.Wrap>
  );
}
