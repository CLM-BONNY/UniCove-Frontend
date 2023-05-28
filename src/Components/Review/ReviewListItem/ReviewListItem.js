import React from "react";
import * as style from "./styles";
import AverageReviewStar from "../ReviewStar/AverageReviewStar";

function ReviewListItem(props) {
  return (
    <style.Wrap>
      <style.TopBlock>
        <style.Profile>
          <img src={props.src || process.env.PUBLIC_URL + "/Images/Place/ex2.svg"} />
        </style.Profile>
        <style.RightBlock>
          <style.StarBlock>
            <AverageReviewStar gap={"2px"} imgWidth={"18px"} averageRating={props.starCount}/>
            <span>{props.starCount}</span>
          </style.StarBlock>
          <style.IdDate>
            <style.Id>{props.id}</style.Id>
            <style.Date>{props.date}</style.Date>
          </style.IdDate>
          {props.reviewContent}
        </style.RightBlock>
      </style.TopBlock>
    </style.Wrap>
  );
}

export default ReviewListItem;
