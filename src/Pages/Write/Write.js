import React from "react";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Input from "../../Components/Input/Input";

function Write() {
  const title = "글 쓰기";

  return (
    <>
      <Header title={title} />
      <Input
        name={"게시판 글"}
        placeholder={"제목"}
        marginBottom={"15px"}
        borderColor={"#e0e0e0"}
        contentPlaceholder={"내용을 입력해 주세요"}
      />
      <Footer title={title} />
    </>
  );
}

export default Write;
