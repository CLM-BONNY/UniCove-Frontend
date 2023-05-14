import React, { useState } from "react";
import * as style from "./styles";
import Input from "../../Components/Input/Input";
import FullButton from "../../Components/Button/FullButton";
import StrokeButton from "../../Components/Button/StrokeButton";

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
        {/* <style.Label>아이디</style.Label>
        <style.InputBlock>
          <div>
            <input
              type="text"
              style={{ border: 0, outline: 0 }}
              placeholder="아이디를 입력해주세요"
            />
          </div>
        </style.InputBlock> */}
        <Input
          titlemarginBottom={"10px"}
          title={"아이디"}
          marginBottom={"30px"}
          name={"LoginIdInput"}
          placeholder={"아이디를 입력해주세요"}
        />
        {/* <style.Label>비밀번호</style.Label>
        <style.InputBlock>
          <div>
            <input
              type="password"
              style={{ border: 0, outline: 0 }}
              placeholder="비밀번호를 입력해주세요"
            />
          </div>
        </style.InputBlock> */}
        <Input
          titlemarginBottom={"10px"}
          title={"비밀번호"}
          marginBottom={"30px"}
          name={"LoginPasswordInput"}
          type={"password"}
          placeholder={"비밀번호를 입력해주세요"}
        />
      </form>
      {/* <style.LoginButtonBlock type="submit">로그인</style.LoginButtonBlock> */}
      <FullButton btnName={"로그인"} />
      <StrokeButton btnName={"회원가입"} />
      {/* <style.ButtonBlock type="button">회원가입</style.ButtonBlock> */}
    </div>
  );
}

export default Login;
