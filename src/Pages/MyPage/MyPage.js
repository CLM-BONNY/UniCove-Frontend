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
      <style.Name>홍길동</style.Name>
      <style.Phone>010-1234-5678</style.Phone>
      <style.Place>성북구</style.Place>
      <style.Id>gildong12</style.Id>
    </div>
  );
}

export default MyPage;
