import React, { useState } from "react";
import * as style from "./styles";
import Input from "../../Components/Input/Input";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function PasswordChange() {
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
    console.log(write);
    const inputPassword = write.PasswordChangePresentPasswordInput;
    const inputNewPassword = write.PasswordChangeNewInput;
    const inputCheckPassword = write.PasswordChangeCheckInput;
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
    if (
      inputPassword.length === 0 ||
      inputNewPassword.length === 0 ||
      inputCheckPassword.length === 0
    ) {
      alert("전부 입력해주세요");
      return;
    }
    if (!passwordRegex.test(inputNewPassword)) {
      alert("알맞지 않은 비밀번호입니다");
      return;
    }
    if (!(inputNewPassword === inputCheckPassword)) {
      alert("비밀번호를 동일하게 입력해주세요");
      return;
    }
  };
  return (
    <>
      <Header title={title} onClick={handleSubmit} />
      <style.Wrap>
        <Input
          titlemarginBottom={"10px"}
          title={"현재 비밀번호"}
          marginBottom={"30px"}
          name={"PasswordChangePresentPasswordInput"}
          type={"password"}
          placeholder={"현재 비밀번호를 입력해주세요"}
          onChange={handleChange}
        />
        <Input
          titlemarginBottom={"10px"}
          title={"새 비밀번호"}
          marginBottom={"30px"}
          name={"PasswordChangeNewInput"}
          type={"password"}
          placeholder={
            "새 비밀번호를 입력해주세요 (영어, 숫자를 포함해서 8-10글자)"
          }
          onChange={handleChange}
        />
        <Input
          titlemarginBottom={"10px"}
          title={"새 비밀번호 확인"}
          marginBottom={"30px"}
          name={"PasswordChangeCheckInput"}
          type={"password"}
          placeholder={"새 비밀번호를 한 번 더 입력해주세요"}
          onChange={handleChange}
        />
      </style.Wrap>
      <Footer title={title} />
    </>
  );
}

export default PasswordChange;
