import React from "react";
import * as style from "./styles";

function ReviewItem(props) {
  return (
    <style.Wrap>
      <style.Name>{props.nickname || "새싹 1"}</style.Name>
      <style.Star>
        <img src={process.env.PUBLIC_URL + "/Images/Review/FullStarIcon.svg"} />
        {props.starCount || "5.0"}
      </style.Star>
      {props.reviewContent || "음식이 맛있고 사장님이 친절해요 ㅎㅎ"}
    </style.Wrap>
  );
}

export default ReviewItem;