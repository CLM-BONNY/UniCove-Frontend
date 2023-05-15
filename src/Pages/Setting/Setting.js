import React from "react";
import * as style from "./styles";
import TitleTab from "../../Components/TitleTab/TitleTab";
import ContentTab from "../../Components/ContentTab/ContentTab";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Setting(props) {
  return (
    <style.Wrap>
      <Header title={"설정"} />
      <TitleTab marginBottom={"5px"} TabTitle={"개인정보"} />
      <ContentTab
        marginBottom={"10px"}
        Imogisrc={process.env.PUBLIC_URL + "Images/Setting/Lock.svg"}
        content={"비밀번호 변경하기"}
        src={process.env.PUBLIC_URL + "Images/Setting/Right.svg"}
      />
      <TitleTab marginBottom={"5px"} TabTitle={"앱"} />
      <ContentTab
        marginBottom={"10px"}
        Imogisrc={process.env.PUBLIC_URL + "Images/Setting/Bell.svg"}
        content={"알림 설정"}
        src={process.env.PUBLIC_URL + "Images/Setting/Off.svg"}
      />
      <TitleTab marginBottom={"5px"} TabTitle={"정보"} />
      <ContentTab
        marginBottom={"10px"}
        Imogisrc={process.env.PUBLIC_URL + "Images/Setting/Paper.svg"}
        content={"개인정보 취급방침"}
        src={process.env.PUBLIC_URL + "Images/Setting/Right.svg"}
      />
      <ContentTab
        marginBottom={"5px"}
        Imogisrc={process.env.PUBLIC_URL + "Images/Setting/Check.svg"}
        content={"서비스 이용약관"}
        src={process.env.PUBLIC_URL + "Images/Setting/Right.svg"}
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
      />
      <Footer title={"설정"} />
    </style.Wrap>
  );
}

export default Setting;
