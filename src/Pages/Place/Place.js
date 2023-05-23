import React from "react";
import * as style from "./styles";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import FullButton from "../../Components/Button/FullButton";
import ReviewStar from "../../Components/Review/ReviewStar/ReviewStar";
import ReviewItem from "../../Components/Review/ReviewItem/ReviewItem";

function Place() {
  const title = "착한 가격 업소";

  const data = [
    {
      id: 0,
      userId: "안나",
      starCount: "5",
      reviewContent: "좋아요",
    },
    {
      id: 1,
      userId: "안나",
      starCount: "4",
      reviewContent: "좋아요",
    },
    {
      id: 2,
      userId: "안나",
      starCount: "3",
      reviewContent: "좋아요",
    },
    {
      id: 3,
      userId: "안나",
      starCount: "2",
      reviewContent: "좋아요",
    },
    {
      id: 4,
      userId: "안나",
      starCount: "1",
      reviewContent: "음식이 맛있고 사장님이 친절해요 ㅎㅎ",
    },
  ];

  return (
    <>
      <Header title={title} />
      <style.TopBlock>
        <FullButton
          btnName={"국민대학교"}
          btnSubName={"서울특별시 성북구 정릉로 77"}
          width={"40%"}
          height={"40%"}
          backgroundColor={"#AFD3E2"}
        />
        <FullButton
          padding={"2px"}
          btnName={"지도 보기"}
          width={"12%"}
          backgroundColor={"#e0e0e0"}
          color={"#000000"}
          fontSize={"13px"}
        />
      </style.TopBlock>
      <style.PlaceImg>
        <img src={process.env.PUBLIC_URL + "Images/Place/ex.svg"} />
      </style.PlaceImg>
      <style.Pride>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </style.Pride>
      <style.ReviewTopBlock>
        000 님의 후기를 남겨주세요!
        <ReviewStar />
      </style.ReviewTopBlock>
      <style.ReviewBottomBlock>
        {data.map((item) => (
          <ReviewItem
            key={item.id}
            nickname={item.userId}
            starCount={item.starCount}
            reviewContent={item.reviewContent}
          />
        ))}
        <style.ReviewPlus>
          리뷰 더보기
          <img src={process.env.PUBLIC_URL + "/Images/Place/NextIcon.svg"} />
        </style.ReviewPlus>
      </style.ReviewBottomBlock>
      <style.BottomBlock>
        <style.LeftBlock>
          <style.Item>
            <img
              src={process.env.PUBLIC_URL + "/Images/Place/LocationIcon.svg"}
            />
            서울특별시 성북구 정릉로 77
          </style.Item>
          <style.Menu>
            <img src={process.env.PUBLIC_URL + "/Images/Place/MenuIcon.svg"} />
            양꼬치 10개 20000원 양꼬치 10개 20000원 양꼬치 10개 20000원 양꼬치
            10개 20000원 양꼬치 10개 20000원 * 2023년 5월4일 기준
          </style.Menu>
          <style.Item>
            <img src={process.env.PUBLIC_URL + "/Images/Place/TimeIcon.svg"} />
            월-금 10:00 ~ 16:30
          </style.Item>
          <style.Item>
            <img src={process.env.PUBLIC_URL + "/Images/Place/PhoneIcon.svg"} />
            02-910-1234
          </style.Item>
        </style.LeftBlock>
        <FullButton
          src={process.env.PUBLIC_URL + "/Images/Place/HeartIcon.svg"}
          width={"20%"}
          height={"50%"}
          backgroundColor={"#ffffff"}
        />
      </style.BottomBlock>
      <Footer title={title} />
    </>
  );
}

export default Place;
