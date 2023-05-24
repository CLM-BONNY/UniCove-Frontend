import React from "react";
import * as style from "./styles";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ReviewListItem from "../../Components/Review/ReviewListItem/ReviewListItem";
import ReviewStar from "../../Components/Review/ReviewStar/ReviewStar";

function Review(props) {
  const title = "국민대학교";

  const data = [
    {
      id: 0,
      src: process.env.PUBLIC_URL + "/Images/Place/ex.svg",
      starCount: 1,
      userId: "홍길",
      date: "2023.05.14",
      reviewContent: "굿굿",
    },
    {
      id: 1,
      src: process.env.PUBLIC_URL + "/Images/Place/ex.svg",
      starCount: 2,
      userId: "홍길",
      date: "2023.05.24",
      reviewContent: "굿굿",
    },
    {
      id: 2,
      src: process.env.PUBLIC_URL + "/Images/Place/ex.svg",
      starCount: 5,
      userId: "홍길",
      date: "2023.05.24",
      reviewContent: "굿굿",
    },
    {
      id: 3,
      src: process.env.PUBLIC_URL + "/Images/Place/ex.svg",
      starCount: 4,
      userId: "홍길",
      date: "2023.05.20",
      rreviewContent: "굿굿",
    },
    {
      id: 4,
      src: process.env.PUBLIC_URL + "/Images/Place/ex.svg",
      starCount: 0,
      userId: "홍길",
      date: "2023.05.27",
      reviewContent: "굿굿",
    },
    {
      id: 5,
      src: process.env.PUBLIC_URL + "/Images/Place/ex.svg",
      starCount: 1,
      userId: "홍길",
      date: "2023.05.24",
      reviewContent: "굿굿",
    },
    {
      id: 6,
      src: process.env.PUBLIC_URL + "/Images/Place/ex.svg",
      starCount: 2,
      userId: "홍길",
      date: "2023.05.01",
      reviewContent: "굿굿",
    },
    {
      id: 7,
      src: process.env.PUBLIC_URL + "/Images/Place/ex.svg",
      starCount: 1,
      userId: "홍길",
      date: "2023.05.25",
      reviewContent: "굿굿",
    },
  ];

  return (
    <>
      <Header title={title} />
      <style.StarBlock>
        <ReviewStar margin={"20px"} imgWidth={"30px"} />
        <span>0 / 5</span>
      </style.StarBlock>
      {data.map((item) => (
        <ReviewListItem key={item.id}
        src={item.src}
        starCount={item.starCount}
        id={item.userId}
        date={item.date}
        reviewContent={item.review}/>
      ))}
      <Footer title={title} />
    </>
  );
}

export default Review;
