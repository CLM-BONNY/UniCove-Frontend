import React from "react";
import * as style from "./styles";

function ReviewStar(props) {

  const getStarIcon = (num) => {
    if (num <= props.averageRating) {
      return process.env.PUBLIC_URL + "/Images/Review/FullStarIcon.svg";
    }
    return process.env.PUBLIC_URL + "/Images/Review/StrokeStarIcon.svg";
  };

  return (
    <style.Wrap margin={props.margin} gap={props.gap} imgWidth={props.imgWidth}>
      {[1, 2, 3, 4, 5].map((num) => (
        <img
          key={num}
          src={getStarIcon(num)}
          alt="star"
        />
      ))}
    </style.Wrap>
  );
}

export default ReviewStar;
