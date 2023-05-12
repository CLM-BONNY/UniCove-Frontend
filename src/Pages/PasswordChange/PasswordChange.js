import React, { useState } from "react";
import * as style from "./styles";

function PasswordChange() {
  return (
    <div>
      <header>
        <style.Head>
          <style.Back
            src={process.env.PUBLIC_URL + "Images/Join/back.svg"}
          ></style.Back>
          <style.Title>비밀번호 변경</style.Title>
          <style.Set>완료</style.Set>
        </style.Head>
      </header>
      <style.Label>현재 비밀번호</style.Label>
      <style.PresentPasswordInput>
        <input
          type="text"
          style={{ border: 0, outline: 0, width: "413px" }}
          placeholder="현재 비밀번호를 입력해주세요"
        />
      </style.PresentPasswordInput>
      <style.Label>새 비밀번호</style.Label>
      <style.NewPasswordInput>
        <input
          type="password"
          style={{ border: 0, outline: 0, width: "413px" }}
          placeholder="새 비밀번호를 입력해주세요"
        />
      </style.NewPasswordInput>
      <style.Label>새 비밀번호 확인</style.Label>
      <style.NewPasswordCheckInput>
        <input
          type="password"
          style={{ border: 0, outline: 0, width: "413px" }}
          placeholder="새 비밀번호를 한 번 더 입력해주세요"
        />
      </style.NewPasswordCheckInput>
    </div>
  );
}

export default PasswordChange;
