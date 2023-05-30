import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as style from "./styles";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ReviewListItem from "../../Components/Review/ReviewListItem/ReviewListItem";
import AverageReviewStar from "../../Components/Review/ReviewStar/AverageReviewStar";
import axios from "axios";

function Review() {
  const location = useLocation();
  const title = location.state.placeName;
  const address = process.env.REACT_APP_ADDRESS;
  const token = sessionStorage.getItem("token");
  const mode = location.state.mode;
  const id = location.state.id;

  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`${address}/api/${mode}/review?id=${id}`, {
        headers: { Authorization: `${token}` },
      })
      .then((response) => {
        setData(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <style.Wrap>
      <Header title={title} />
      {data?.score ? (
        <style.StarBlock>
          <AverageReviewStar
            margin={"20px"}
            imgWidth={"30px"}
            title={"리뷰 목록"}
            averageRating={data.score || 0}
          />
          <span>{data.score || 0} / 5</span>
        </style.StarBlock>
      ) : (
        <style.StarBlock>
          <h3>아직 등록된 리뷰가 없습니다</h3>
        </style.StarBlock>
      )}
      {data?.reviews &&
        data.reviews.map((item) => (
          <ReviewListItem
            key={item.id}
            src={item.profile}
            starCount={item.score}
            id={item.name}
            date={item.createdTime.substr(0, 10)}
            reviewContent={item.content}
          />
        ))}
      <Footer title={title} />
    </style.Wrap>
  );
}

export default Review;
