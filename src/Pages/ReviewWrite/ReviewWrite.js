import React from "react";
import * as style from "./styles";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ReviewStar from "../../Components/Review/ReviewStar/ReviewStar";
import Input from "../../Components/Input/Input";

function ReviewWrite() {
  const title = "리뷰 쓰기";

  return (
    <>
      <Header title={title} />
      <style.TitleBlock>
        <h3>장소 이름</h3>
      </style.TitleBlock>
      <style.StarBlock>
        <ReviewStar margin={"0 auto 20px"} />
        <span>0 / 5</span>
      </style.StarBlock>
      <Input
        name={"writeContent"}
        contentPlaceholder={"내용을 입력해 주세요"}
      />
      <Footer title={title} />
    </>
  );
}

export default ReviewWrite;
