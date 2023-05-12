import React, { useState } from "react";
import * as style from "./styles";

function MyPage() {
  return (
    <div>
      <header>
        <style.Head>
          <style.Back
            src={process.env.PUBLIC_URL + "Images/Create/back.svg"}
          ></style.Back>
          <style.Title>내 정보</style.Title>
          <style.Set>수정</style.Set>
        </style.Head>
      </header>
      <style.ProfileImg>
        <img
          src={process.env.PUBLIC_URL + "Images/Mypage/basicProfileImg.svg"}
        ></img>
      </style.ProfileImg>
      <style.Label>이름</style.Label>
      <style.Name>홍길동</style.Name>
      <style.Label>전화번호</style.Label>
      <style.Phone>010-1234-5678</style.Phone>
      <style.Label>주소</style.Label>
      <style.Place>성북구</style.Place>
      <style.Label>아이디</style.Label>
      <style.Id>gildong12</style.Id>
    </div>
  );
}

export default MyPage;
