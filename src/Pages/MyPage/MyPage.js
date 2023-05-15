import React, { useState } from "react";
import * as style from "./styles";
import ReadonlyInput from "../../Components/Input/ReadonlyInput";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function MyPage() {
  return (
    <style.Wrap>
      {/* <header>
        <style.Head>
          <style.Back
            src={process.env.PUBLIC_URL + "Images/Join/back.svg"}
          ></style.Back>
          <style.Title>내 정보</style.Title>
          <style.Set>수정</style.Set>
        </style.Head>
      </header> */}
      <Header title={"내 정보"} />
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
      {/* <style.Label>전화번호</style.Label>
      <style.Phone>010-1234-5678</style.Phone> */}
      <ReadonlyInput
        titlemarginBottom={"10px"}
        title={"전화번호"}
        marginBottom={"30px"}
        name={"MypagePhone"}
        placeholder={"010-1234-5678"}
        color={"black"}
      />
      {/* <style.Label>주소</style.Label>
      <style.Place>성북구</style.Place> */}
      <ReadonlyInput
        titlemarginBottom={"10px"}
        title={"주소"}
        marginBottom={"30px"}
        name={"MypagePlace"}
        placeholder={"성북구"}
        color={"black"}
      />
      {/* <style.Label>아이디</style.Label>
      <style.Id>gildong12</style.Id> */}
      <ReadonlyInput
        titlemarginBottom={"10px"}
        title={"아이디"}
        marginBottom={"30px"}
        name={"MypageId"}
        placeholder={"gildong12"}
        color={"black"}
      />
      <Footer title={"내 정보"} />
    </style.Wrap>
  );
}

export default MyPage;
