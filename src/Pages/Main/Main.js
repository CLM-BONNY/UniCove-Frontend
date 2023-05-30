import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import Footer from "../../Components/Footer/Footer";
import StrokeButton from "../../Components/Button/StrokeButton";
import FullButton from "../../Components/Button/FullButton";
import LikePlaceItem from "../../Components/LikePlaceItem/LikePlaceItem";
import axios from "axios";

function Main() {
  const title = "메인";
  const navigate = useNavigate();
  const [clickedButton, setClickedButton] = useState("착한 가격 업소");
  const token = sessionStorage.getItem("token");
  const address = process.env.REACT_APP_ADDRESS;
  const [goodshopData, setGoodshopData] = useState(null);
  const [nightstudyData, setNightstudyData] = useState(null);

  const handlePlaceButton = (buttonName) => {
    setClickedButton(buttonName);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseNightstudy = await axios.get(
          `${address}/api/nightstudy/like`,
          {
            headers: { Authorization: `${token}` },
          }
        );
        const responseGoodshop = await axios.get(
          `${address}/api/goodshop/like`,
          {
            headers: { Authorization: `${token}` },
          }
        );
        setGoodshopData(responseGoodshop.data);
        setNightstudyData(responseNightstudy.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleMap = (mode, lat, lng) => {
    navigate("../map", {
      state: {
        mode: mode,
        lat: lat,
        lng: lng,
      },
    });
  };

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
            navigate("../map", {
              state: {
                mode: "goodshop",
              },
            });
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
                mode: "nightstudy",
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
            {clickedButton === "착한 가격 업소"
              ? goodshopData &&
                goodshopData.map((item) => (
                  <LikePlaceItem
                    key={item.id}
                    placeName={item.name}
                    location={item.address}
                    mode={"goodshop"}
                    lat={item.lat}
                    lng={item.lng}
                    onClick={handleMap}
                  />
                ))
              : nightstudyData &&
                nightstudyData?.map((item) => (
                  <LikePlaceItem
                    key={item.id}
                    placeName={item.name}
                    location={item.address}
                    mode={"nightstudy"}
                    lat={item.lat}
                    lng={item.lng}
                    onClick={handleMap}
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
