import React, { useState } from "react";
import * as style from "./styles";
import Input from "../../Components/Input/Input";

function MyPageEdit() {
  return (
    <style.Wrap>
      <header>
        <style.Head>
          <style.Back
            src={process.env.PUBLIC_URL + "Images/Join/back.svg"}
          ></style.Back>
          <style.Title>내 정보</style.Title>
          <style.Set>완료</style.Set>
        </style.Head>
      </header>
      <style.ProfileImg>
        <img
          src={process.env.PUBLIC_URL + "Images/Mypage/basicProfileImg.svg"}
        ></img>
      </style.ProfileImg>
      {/* <style.Label>이름</style.Label>
      <style.Name>홍길동</style.Name> */}
      <Input
        titlemarginBottom={"10px"}
        title={"이름"}
        marginBottom={"30px"}
        name={"MypageEditName"}
        placeholder={"홍길동"}
        color={"black"}
      />
      {/* <style.Label>전화번호</style.Label>
      <style.Phone>010-1234-5678</style.Phone> */}
      <Input
        titlemarginBottom={"10px"}
        title={"전화번호"}
        marginBottom={"30px"}
        name={"MypageEditPhone"}
        placeholder={"010-1234-5678"}
        color={"black"}
      />
      {/* <style.Label>주소</style.Label>
      <style.Place>성북구</style.Place> */}
      <Input
        titlemarginBottom={"10px"}
        title={"주소"}
        marginBottom={"30px"}
        name={"MypageEditPlace"}
        placeholder={"성북구"}
        color={"black"}
      />
      {/* <style.Label>아이디</style.Label>
      <style.Id>gildong12</style.Id> */}
      <Input
        titlemarginBottom={"10px"}
        title={"아이디"}
        marginBottom={"30px"}
        name={"MypageEditId"}
        placeholder={"gildong12"}
        color={"black"}
      />
    </style.Wrap>
  );
}

export default MyPageEdit;
