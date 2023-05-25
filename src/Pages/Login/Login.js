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
    const inputId = write.LoginIdInput;
    const inputPassword = write.LoginPasswordInput;
    if (inputId.length === 0 || inputPassword.length === 0) {
      alert("전부 입력해 주세요");
      return null;
    }
    axios
      .post(`${address}/api/auth/login`, {
        username: inputId,
        password: inputPassword,
      })
      .then(function (response) {
        if (response.status === 200) {
          const token = response.data.token;
          sessionStorage.setItem("token", token);
          alert("로그인에 성공했습니다");
          navigate("/main");
        }
      })
      .catch(function (error) {
        alert("올바르지 않은 아이디 또는 비밀번호입니다");
      });
  };
  const navigate = useNavigate();
  return (
    <style.Wrap>
      <style.LogoBlock>
        <img
          className="logoImg"
          alt="로고 이미지"
          src={process.env.PUBLIC_URL + "Images/Login/UniCove.svg"}
        />
      </style.LogoBlock>
      <form>
        <Input
          title={"아이디"}
          name={"LoginIdInput"}
          placeholder={"아이디를 입력해 주세요"}
          onChange={handleChange}
        />
        <Input
          title={"비밀번호"}
          name={"LoginPasswordInput"}
          type={"password"}
          placeholder={"비밀번호를 입력해 주세요"}
          onChange={handleChange}
        />
      </form>
      <style.OuterButton>
        <FullButton
          btnName={"로그인"}
          width={"95%"}
          height={"25px"}
          margin={"10px 0px"}
          onClick={handleSubmit}
        />
        <StrokeButton
          btnName={"회원가입"}
          width={"95%"}
          height={"25px"}
          margin={"0px 0px 20px 0px"}
          onClick={() => {
            navigate("../join");
          }}
        />
      </style.OuterButton>
    </style.Wrap>
  );
}

export default Login;
