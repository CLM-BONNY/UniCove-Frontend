import React from "react";
import * as style from "./styles";
import Modal from "../../Modal/Modal";

function CommentItem(props) {
  return (
    <style.Wrap>
      <style.TopBlock>
        <style.Profile>
          <img src={props.src} />
          {props.userId}
        </style.Profile>
        {props.isMe && (
          <Modal
            deleteComment={props.deleteComment}
            componentName={"댓글"}
            commentid={props.commentid}
          />
        )}
      </style.TopBlock>
      <style.Comment>{props.comment}</style.Comment>
      <style.Date>{props.date}</style.Date>
    </style.Wrap>
  );
}

export default CommentItem;
