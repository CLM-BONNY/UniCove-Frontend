import React, { useEffect, useState } from "react";
import * as style from "./styles";
import Input from "../../Components/Input/Input";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PasswordChange() {
  const navigate = useNavigate();
  const address = process.env.REACT_APP_ADDRESS;
  const token = sessionStorage.getItem("token");
  const [userData, setUserData] = useState({
    password: "",
  });
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios
      .get(`${address}/api/auth/getUser`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then(function (response) {
        const { password } = response.data;
        setUserData({
          password: password || "",
        });
      })
      .catch(function (error) {});
  };
  const title = "비밀번호 변경";
  const [write, setWrite] = useState({
    PasswordChangePresentPasswordInput: "",
    PasswordChangeNewInput: "",
    PasswordChangeCheckInput: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWrite((prevWrite) => ({
      ...prevWrite,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    const inputPassword = write.PasswordChangePresentPasswordInput;
    const inputNewPassword = write.PasswordChangeNewInput;
    const inputCheckPassword = write.PasswordChangeCheckInput;
    const originPassword = userData.password;
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
    if (
      inputPassword.length === 0 ||
      inputNewPassword.length === 0 ||
      inputCheckPassword.length === 0
    ) {
      alert("전부 입력해 주세요");
      return;
    }

    if (originPassword === "") {
      alert("현재 비밀번호가 일치하지 않습니다");
    }
    if (!passwordRegex.test(inputNewPassword)) {
      alert("알맞지 않은 비밀번호입니다");
      return;
    }
    if (!(inputNewPassword === inputCheckPassword)) {
      alert("비밀번호를 동일하게 입력해 주세요");
      return;
    }
    axios
      .post(
        `${address}/api/auth/changePW`,
        {
          password: inputPassword,
          new_password: inputNewPassword,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then(function (response) {
        alert("정상적으로 수정되었습니다");
        navigate(-1);
      })
      .catch(function (error) {
        alert("현재 비밀번호가 일치하지 않습니다");
      });
  };
  return (
    <>
      <Header title={title} onClick={handleSubmit} />
      <style.Wrap>
        <Input
          title={"현재 비밀번호"}
          name={"PasswordChangePresentPasswordInput"}
          type={"password"}
          placeholder={"현재 비밀번호를 입력해 주세요"}
          onChange={handleChange}
        />
        <Input
          title={"새 비밀번호"}
          name={"PasswordChangeNewInput"}
          type={"password"}
          placeholder={
            "새 비밀번호를 입력해 주세요 (영어, 숫자를 포함해서 8-10글자)"
          }
          onChange={handleChange}
        />
        <Input
          title={"새 비밀번호 확인"}
          name={"PasswordChangeCheckInput"}
          type={"password"}
          placeholder={"새 비밀번호를 한 번 더 입력해 주세요"}
          onChange={handleChange}
        />
      </style.Wrap>
      <Footer title={title} />
    </>
  );
}

export default PasswordChange;
