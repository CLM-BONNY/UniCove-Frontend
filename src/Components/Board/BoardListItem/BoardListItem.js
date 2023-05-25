import React from "react";
import * as style from "./styles";

function BoardListItem(props) {
  return (
    <style.Wrap onClick={props.onClick}>
      <style.Title>{props.title}</style.Title>
      <style.Content>{props.content}</style.Content>
      <style.BottomBlock>
        <style.IconBlock>
          <img src={process.env.PUBLIC_URL + "/Images/Board/CommentIcon.svg"} />
          {props.commentCount}
        </style.IconBlock>
        <style.IconBlock>
          <img src={process.env.PUBLIC_URL + "/Images/Board/LikeIcon.svg"} />
          {props.likeCount}
        </style.IconBlock>
      </style.BottomBlock>
    </style.Wrap>
  );
}

export default BoardListItem;
