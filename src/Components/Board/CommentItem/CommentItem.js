import React from "react";
import * as style from "./styles";

function CommentItem(props) {
  return (
    <style.Wrap>
      <style.TopBlock>
        <style.Profile>
          <img src={props.src} />
          {props.userId}
        </style.Profile>
        <img src={process.env.PUBLIC_URL + "/Images/Board/DotIcon.svg"} />
      </style.TopBlock>
      <style.Comment>{props.comment}</style.Comment>
      <style.Date>{props.date || "2023.05.23"}</style.Date>
    </style.Wrap>
  );
}

export default CommentItem;
