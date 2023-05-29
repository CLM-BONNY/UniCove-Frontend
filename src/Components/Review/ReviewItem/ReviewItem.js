import React from "react";
import * as style from "./styles";

function ReviewItem(props) {
  return (
    <style.Wrap>
      <style.Name>{props.nickname}</style.Name>
      <style.Star>
        <img src={process.env.PUBLIC_URL + "/Images/Review/FullStarIcon.svg"} />
        {props.starCount}
      </style.Star>
      {props.reviewContent}
    </style.Wrap>
  );
}

export default ReviewItem;