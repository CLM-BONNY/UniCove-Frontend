import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as style from "./styles";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ReviewListItem from "../../Components/Review/ReviewListItem/ReviewListItem";
import AverageReviewStar from "../../Components/Review/ReviewStar/AverageReviewStar";
import axios from "axios";

function Review() {
  const title = "국민대학교";
  const location = useLocation();
  const navigate = useNavigate();
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
    <>
      <Header title={title} />
      <style.StarBlock>
        <AverageReviewStar
          margin={"20px"}
          imgWidth={"30px"}
          title={"리뷰 목록"}
          averageRating={data.score}
        />
        <span>{data.score || 0} / 5</span>
      </style.StarBlock>
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
    </>
  );
}

export default Review;
