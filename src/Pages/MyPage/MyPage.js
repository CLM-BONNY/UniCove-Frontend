import React, { useState } from "react";
import * as style from "./styles";
import ReadonlyInput from "../../Components/Input/ReadonlyInput";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function MyPage() {
  const title = "내 정보";
  return (
    <>
      <Header title={title} />
      <style.Wrap>
        <style.ProfileImg>
          <img
            src={process.env.PUBLIC_URL + "Images/Mypage/basicProfileImg.svg"}
          ></img>
        </style.ProfileImg>
        <ReadonlyInput
          titlemarginBottom={"10px"}
          title={"이름"}
          marginBottom={"30px"}
          name={"MypageName"}
          placeholder={"홍길동"}
          color={"black"}
        />
        <ReadonlyInput
          titlemarginBottom={"10px"}
          title={"전화번호"}
          marginBottom={"30px"}
          name={"MypagePhone"}
          placeholder={"010-1234-5678"}
          color={"black"}
        />
        <ReadonlyInput
          titlemarginBottom={"10px"}
          title={"주소"}
          marginBottom={"30px"}
          name={"MypagePlace"}
          placeholder={"성북구"}
          color={"black"}
        />
        <ReadonlyInput
          titlemarginBottom={"10px"}
          title={"아이디"}
          marginBottom={"30px"}
          name={"MypageId"}
          placeholder={"gildong12"}
          color={"black"}
        />
      </style.Wrap>
      <Footer title={title} />
    </>
  );
}

export default MyPage;
