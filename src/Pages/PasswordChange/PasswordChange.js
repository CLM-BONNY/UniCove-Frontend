import React, { useState } from "react";
import * as style from "./styles";
import Input from "../../Components/Input/Input";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function PasswordChange() {
  const title = "비밀번호 변경";
  return (
    <style.Wrap>
      <Header title={title} />
      <Input
        titlemarginBottom={"10px"}
        title={"현재 비밀번호"}
        marginBottom={"30px"}
        name={"PasswordChangePresentPasswordInput"}
        type={"password"}
        placeholder={"현재 비밀번호를 입력해주세요"}
      />
      <Input
        titlemarginBottom={"10px"}
        title={"새 비밀번호"}
        marginBottom={"30px"}
        name={"PasswordChangeNewInput"}
        placeholder={"새 비밀번호를 입력해주세요"}
      />
      <Input
        titlemarginBottom={"10px"}
        title={"새 비밀번호 확인"}
        marginBottom={"30px"}
        name={"PasswordChagneCheckInput"}
        type={"password"}
        placeholder={"새 비밀번호를 한 번 더 입력해주세요"}
      />
      <Footer title={title} />
    </style.Wrap>
  );
}

export default PasswordChange;
