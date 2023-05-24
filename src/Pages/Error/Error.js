import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Input from "../../Components/Input/Input";

function Write() {
  const title = "오류 제보";
  const navigate = useNavigate();

  const [write, setWrite] = useState({
    writeTitle: "",
    writeContent: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWrite((prevWrite) => ({
      ...prevWrite,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    console.log("Input value:", write);
    if (write.writeTitle && write.writeContent) {
      alert("오류 제보가 완료되었습니다");
      navigate("../board");
    } else alert("제목과 내용을 모두 입력해 주세요!");
  };

  return (
    <>
      <Header
        title={title}
        onClick={() => {
          handleSave();
        }}
      />
      <style.Wrap>
        <Input
          name={"writeTitle"}
          placeholder={"제목"}
          borderColor={"#e0e0e0"}
          value={write.writeTitle}
          onChange={handleChange}
        />
        <Input
          name={"writeContent"}
          marginBottom={"15px"}
          contentPlaceholder={"내용을 입력해 주세요"}
          value={write.writeContent}
          onChange={handleChange}
        />
      </style.Wrap>
      <Footer title={title} />
    </>
  );
}

export default Write;
