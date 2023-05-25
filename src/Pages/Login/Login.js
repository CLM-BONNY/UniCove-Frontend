import React, { useState } from "react";
import * as style from "./styles";
import Input from "../../Components/Input/Input";
import FullButton from "../../Components/Button/FullButton";
import StrokeButton from "../../Components/Button/StrokeButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const address = process.env.REACT_APP_ADDRESS;
  const [write, setWrite] = useState({
    LoginIdInput: "",
    LoginPasswordInput: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWrite((prevWrite) => ({
      ...prevWrite,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    console.log(write);
    const inputId = write.LoginIdInput;
    const inputPassword = write.LoginPasswordInput;
    axios
      .post(`${address}/api/auth/login`, {
        username: inputId,
        password: inputPassword,
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          const token = response.data.token;
          const extractedToken = token.replace(/^Bearer\s+/i, "");
          console.log(token);
          console.log(extractedToken);
          sessionStorage.setItem("token", token);
          alert("로그인에 성공했습니다");
          navigate("/mypage", {
            state: {
              token: token,
            },
          });
        }
      })
      .catch(function (error) {
        console.log(error);
        alert("올바르지 않은 아이디 또는 비밀번호입니다");
      });
  };
  const navigate = useNavigate();
  return (
    <>
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
            onChange={handleChange}
          />
          <Input
            titlemarginBottom={"10px"}
            title={"비밀번호"}
            marginBottom={"30px"}
            name={"LoginPasswordInput"}
            type={"password"}
            placeholder={"비밀번호를 입력해주세요"}
            onChange={handleChange}
          />
        </form>
        <style.OuterButton>
          <FullButton
            btnName={"로그인"}
            width={"400px"}
            height={"25px"}
            margin={"10px 0px"}
            onClick={handleSubmit}
          />
        </style.OuterButton>
        <style.OuterButton>
          <StrokeButton
            btnName={"회원가입"}
            width={"400px"}
            height={"25px"}
            margin={"0px 0px 20px 0px"}
            onClick={() => {
              navigate("../join");
            }}
          />
        </style.OuterButton>
      </style.Wrap>
    </>
  );
}

export default Login;
