import React from "react";
import * as style from "./styles";

function ReviewStar(props) {
  return (
    <style.Wrap margin={props.margin} gap={props.gap} imgWidth={props.imgWidth}>
      <img
        src={process.env.PUBLIC_URL + "/Images/Review/StrokeStarIcon.svg"}
        onClick={props.onClick}
      />
      <img
        src={process.env.PUBLIC_URL + "/Images/Review/StrokeStarIcon.svg"}
        onClick={props.onClick}
      />
      <img
        src={process.env.PUBLIC_URL + "/Images/Review/StrokeStarIcon.svg"}
        onClick={props.onClick}
      />
      <img
        src={process.env.PUBLIC_URL + "/Images/Review/StrokeStarIcon.svg"}
        onClick={props.onClick}
      />
      <img
        src={process.env.PUBLIC_URL + "/Images/Review/StrokeStarIcon.svg"}
        onClick={props.onClick}
      />
    </style.Wrap>
  );
}

export default ReviewStar;
