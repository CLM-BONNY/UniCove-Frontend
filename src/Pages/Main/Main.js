import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import Footer from "../../Components/Footer/Footer";
import StrokeButton from "../../Components/Button/StrokeButton";
import FullButton from "../../Components/Button/FullButton";
import LikePlaceItem from "../../Components/LikePlaceItem/LikePlaceItem";

function Main() {
  const title = "메인";
  const navigate = useNavigate();
  const [clickedButton, setClickedButton] = useState("착한 가격 업소");

  const handlePlaceButton = (buttonName) => {
    setClickedButton(buttonName);
  };

  const data = [
    {
      id: 0,
      placeName: "국민대학교",
      location: "서울특별시 성북구 정릉로 77",
    },
    {
      id: 1,
      placeName: "국민대학교",
      location: "서울특별시 성북구 정릉로 77",
    },
    {
      id: 2,
      placeName: "국민대학교",
      location: "서울특별시 성북구 정릉로 77",
    },
    {
      id: 3,
      placeName: "국민대학교",
      location: "서울특별시 성북구 정릉로 77",
    },
    {
      id: 4,
      placeName: "국민대학교",
      location: "서울특별시 성북구 정릉로 77",
    },
    {
      id: 5,
      placeName: "국민대학교",
      location: "서울특별시 성북구 정릉로 77",
    },
    {
      id: 6,
      placeName: "국민대학교",
      location: "서울특별시 성북구 정릉로 77",
    },
    {
      id: 7,
      placeName: "국민대학교",
      location: "서울특별시 성북구 정릉로 77",
    },
    {
      id: 8,
      placeName: "국민대학교",
      location: "서울특별시 성북구 정릉로 77",
    },
    {
      id: 9,
      placeName: "국민대학교",
      location: "서울특별시 성북구 정릉로 77",
    },
  ];

  return (
    <style.Wrap>
      <style.TopBlock>
        <h1>UniCove</h1>
        <img
          src={process.env.PUBLIC_URL + "/Images/Main/SettingIcon.svg"}
          onClick={() => {
            navigate("../setting");
          }}
        />
      </style.TopBlock>
      <style.BtnBlock>
        <StrokeButton
          src={process.env.PUBLIC_URL + "/Images/Main/GoodPricePlaceIcon.svg"}
          btnName={"착한 가격 업소"}
          margin={"0px"}
          width={"35%"}
          height={"60px"}
          border={"20px"}
          fontSize={"20px"}
          onClick={() => {
            navigate("../map", { state: { placeType: "goodShop" } });
          }}
        />
        <StrokeButton
          src={process.env.PUBLIC_URL + "/Images/Main/NightStudyPlaceIcon.svg"}
          btnName={"야간 공부 장소"}
          margin={"0px"}
          width={"35%"}
          height={"60px"}
          border={"20px"}
          fontSize={"20px"}
          onClick={() => {
            navigate("../map", {
              state: {
                placeType: "nightStudy",
              },
            });
          }}
        />
      </style.BtnBlock>
      <style.BottomBlock>
        <style.Menu>
          <style.ItemBlock>
            <FullButton
              width={"40%"}
              height={"30%"}
              backgroundColor={"#0F4C75"}
              border={"180px"}
              src={process.env.PUBLIC_URL + "/Images/Main/BoardIcon.svg"}
              onClick={() => {
                navigate("../board");
              }}
            />
            <span>게시판</span>
          </style.ItemBlock>
          <style.ItemBlock>
            <FullButton
              width={"40%"}
              height={"30%"}
              backgroundColor={"#0F4C75"}
              border={"180px"}
              src={process.env.PUBLIC_URL + "/Images/Main/ErrorWriteIcon.svg"}
              onClick={() => {
                navigate("../error");
              }}
            />
            <span>오류 제보</span>
          </style.ItemBlock>
          <style.ItemBlock>
            <FullButton
              width={"45%"}
              height={"40%"}
              backgroundColor={"#0F4C75"}
              border={"180px"}
              src={process.env.PUBLIC_URL + "/Images/Main/MYPageIcon.svg"}
              onClick={() => {
                navigate("../mypage");
              }}
            />
            <span>내 정보</span>
          </style.ItemBlock>
        </style.Menu>
        <FullButton
          btnName={"관심있는 장소"}
          margin={"25px"}
          width={"30%"}
          height={"30%"}
          fontSize={"20px"}
        />
        <style.LikePlaceBlock>
          <style.PlaceButton>
            {clickedButton === "착한 가격 업소" ? (
              <FullButton
                btnName={"착한 가격 업소"}
                margin={"0px"}
                width={"25%"}
                height={"30%"}
                backgroundColor={"#AFD3E2"}
                fontSize={"16px"}
                borderTop={"25px"}
                borderBottom={"0px"}
                onClick={() => handlePlaceButton("착한 가격 업소")}
              />
            ) : (
              <StrokeButton
                btnName={"착한 가격 업소"}
                margin={"0px"}
                width={"25%"}
                height={"30%"}
                color={"#AFD3E2"}
                fontSize={"16px"}
                borderTop={"25px"}
                borderBottom={"0px"}
                onClick={() => handlePlaceButton("착한 가격 업소")}
              />
            )}
            {clickedButton === "야간 공부 장소" ? (
              <FullButton
                btnName={"야간 공부 장소"}
                margin={"0px"}
                width={"25%"}
                height={"30%"}
                backgroundColor={"#AFD3E2"}
                fontSize={"16px"}
                borderTop={"25px"}
                borderBottom={"0px"}
                onClick={() => handlePlaceButton("야간 공부 장소")}
              />
            ) : (
              <StrokeButton
                btnName={"야간 공부 장소"}
                margin={"0px"}
                width={"25%"}
                height={"30%"}
                color={"#AFD3E2"}
                fontSize={"16px"}
                borderTop={"25px"}
                borderBottom={"0px"}
                onClick={() => handlePlaceButton("야간 공부 장소")}
              />
            )}
          </style.PlaceButton>
          <style.LikePlace>
            {data.map((item) => (
              <LikePlaceItem
                key={item.id}
                placeName={item.placeName}
                location={item.location}
              />
            ))}
          </style.LikePlace>
        </style.LikePlaceBlock>
      </style.BottomBlock>
      <Footer title={title} />
    </style.Wrap>
  );
}

export default Main;
