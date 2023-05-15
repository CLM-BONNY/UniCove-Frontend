import React from "react";
import * as style from "./styles";

function ReviewStar(props) {
  return(
    <style.Wrap margin={props.margin}>
      <img src={process.env.PUBLIC_URL + "/Images/Review/StrokeStarIcon.svg"} />
      <img src={process.env.PUBLIC_URL + "/Images/Review/StrokeStarIcon.svg"} />
      <img src={process.env.PUBLIC_URL + "/Images/Review/StrokeStarIcon.svg"} />
      <img src={process.env.PUBLIC_URL + "/Images/Review/StrokeStarIcon.svg"} />
      <img src={process.env.PUBLIC_URL + "/Images/Review/StrokeStarIcon.svg"} />
    </style.Wrap>
  );
}

export default ReviewStar;