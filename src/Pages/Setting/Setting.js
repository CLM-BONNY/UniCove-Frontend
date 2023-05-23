import React from "react";
import * as style from "./styles";
import TitleTab from "../../Components/TitleTab/TitleTab";
import ContentTab from "../../Components/ContentTab/ContentTab";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Setting(props) {
  const title = "설정";
  const [bell, setBell] = useState(true);
  const handelBell = () => {
    setBell(!bell);
    console.log(bell);
  };
  const navigate = useNavigate();

  return (
    <>
      <Header title={title} />

      <style.Wrap>
        <TitleTab marginBottom={"5px"} TabTitle={"개인정보"} />
        <ContentTab
          marginBottom={"10px"}
          Imogisrc={process.env.PUBLIC_URL + "Images/Setting/Lock.svg"}
          content={"비밀번호 변경하기"}
          src={process.env.PUBLIC_URL + "Images/Setting/Right.svg"}
          onClick={() => {
            navigate("/passwordchange");
          }}
        />
        <TitleTab marginBottom={"5px"} TabTitle={"앱"} />
        <ContentTab
          marginBottom={"10px"}
          Imogisrc={process.env.PUBLIC_URL + "Images/Setting/Bell.svg"}
          content={"알림 설정"}
          src={
            bell
              ? process.env.PUBLIC_URL + "Images/Setting/On.svg"
              : process.env.PUBLIC_URL + "Images/Setting/Off.svg"
          }
          onImageClick={handelBell}
        />
        <TitleTab marginBottom={"5px"} TabTitle={"정보"} />
        <ContentTab
          marginBottom={"10px"}
          Imogisrc={process.env.PUBLIC_URL + "Images/Setting/Paper.svg"}
          content={"개인정보 취급방침"}
          src={process.env.PUBLIC_URL + "Images/Setting/Right.svg"}
          onClick={() => {
            navigate("/personal");
          }}
        />
        <ContentTab
          marginBottom={"5px"}
          Imogisrc={process.env.PUBLIC_URL + "Images/Setting/Check.svg"}
          content={"서비스 이용약관"}
          src={process.env.PUBLIC_URL + "Images/Setting/Right.svg"}
          onClick={() => {
            navigate("/service");
          }}
        />
        <ContentTab
          marginBottom={"10px"}
          Imogisrc={process.env.PUBLIC_URL + "Images/Setting/I.svg"}
          content={"버전 정보"}
          text={"v0.0.1"}
        />
        <ContentTab
          marginBottom={"10px"}
          Imogisrc={process.env.PUBLIC_URL + "Images/Setting/Logout.svg"}
          content={"로그아웃"}
          onClick={() => {
            navigate("/login");
          }}
        />
      </style.Wrap>
      <Footer title={title} />
    </>
  );
}

export default Setting;
