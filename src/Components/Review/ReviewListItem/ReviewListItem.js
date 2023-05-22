import React from "react";
import * as style from "./styles";
import ReviewStar from "../ReviewStar/ReviewStar";

function ReviewListItem(props) {
  return (
    <style.Wrap>
      <style.TopBlock>
        <style.Profile>
          <img src={props.src || process.env.PUBLIC_URL + "/Images/Place/ex2.svg"} />
        </style.Profile>
        <style.RightBlock>
          <style.StarBlock>
            <ReviewStar gap={"2px"} imgWidth={"18px"} />
            <span>{props.starCount || 0}</span>
          </style.StarBlock>
          <style.IdDate>
            <style.Id>{props.id || "새싹1"}</style.Id>
            <style.Date>{props.date || "2023.05.23"}</style.Date>
          </style.IdDate>
          {props.reviewContent || "음식이 맛있고 사장님이 친절해요 ㅎㅎ"}
        </style.RightBlock>
      </style.TopBlock>
    </style.Wrap>
  );
}

export default ReviewListItem;
