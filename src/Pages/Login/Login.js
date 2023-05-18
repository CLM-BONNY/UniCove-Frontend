import React, { useState } from "react";
import * as style from "./styles";
import Input from "../../Components/Input/Input";
import FullButton from "../../Components/Button/FullButton";
import StrokeButton from "../../Components/Button/StrokeButton";

function Login() {
  return (
    <style.Wrap>
      <style.LogoBlock>
        <img
          className="logoImg"
          alt="로고 이미지"
          src={process.env.PUBLIC_URL + "Images/Login/UniCove.svg"}
        ></img>
      </style.LogoBlock>
      <form>
        <Input
          titlemarginBottom={"10px"}
          title={"아이디"}
          marginBottom={"30px"}
          name={"LoginIdInput"}
          placeholder={"아이디를 입력해주세요"}
        />
        <Input
          titlemarginBottom={"10px"}
          title={"비밀번호"}
          marginBottom={"30px"}
          name={"LoginPasswordInput"}
          type={"password"}
          placeholder={"비밀번호를 입력해주세요"}
        />
      </form>
      <style.OuterButton>
        <FullButton
          btnName={"로그인"}
          width={"400px"}
          height={"25px"}
          margin={"10px 0px"}
        />
      </style.OuterButton>
      <style.OuterButton>
        <StrokeButton
          btnName={"회원가입"}
          width={"400px"}
          height={"25px"}
          margin={"0px 0px 20px 0px"}
        />
      </style.OuterButton>
    </style.Wrap>
  );
}

export default Login;
