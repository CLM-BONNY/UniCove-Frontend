import React, { useState } from "react";
import * as style from "./styles";

function ReviewStar(props) {
  const [clickedStarIndex, setClickedStarIndex] = useState(0);

  const handleStarClick = (num) => {
    setClickedStarIndex(num);
    props.setScore(num);
  };

  const getStarIcon = (num) => {
    if (clickedStarIndex >= num) {
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
          onClick={() => handleStarClick(num)}
        />
      ))}
    </style.Wrap>
  );
}

export default ReviewStar;
