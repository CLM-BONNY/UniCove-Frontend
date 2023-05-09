import React, { useState } from "react";
import * as style from "./styles";

function Login() {
  return (
    <div>
      <style.LogoBlock>
        <img
          className="logoImg"
          alt="로고 이미지"
          src={process.env.PUBLIC_URL + "Images/logoImg.svg"}
        ></img>
      </style.LogoBlock>
      <form>
        <style.InputBlock>
          <div>
            <input
              type="text"
              style={{ border: 0, outline: 0 }}
              placeholder="아이디를 입력해주세요"
            />
          </div>
        </style.InputBlock>
        <style.InputBlock>
          <div>
            <input
              type="password"
              style={{ border: 0, outline: 0 }}
              placeholder="비밀번호를 입력해주세요"
            />
          </div>
        </style.InputBlock>
      </form>
      <style.LoginButtonBlock type="submit">로그인</style.LoginButtonBlock>
      <style.ButtonBlock type="button">회원가입</style.ButtonBlock>
    </div>
  );
}

export default Login;
