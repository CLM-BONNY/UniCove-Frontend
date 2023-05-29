import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as style from "./styles";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ReviewStar from "../../Components/Review/ReviewStar/ReviewStar";
import Input from "../../Components/Input/Input";
import axios from "axios";

function ReviewWrite() {
  const title = "리뷰 쓰기";
  const location = useLocation();
  const navigate = useNavigate();
  const address = process.env.REACT_APP_ADDRESS;
  const token = sessionStorage.getItem("token");

  const id = location.state.id;
  const mode = location.state.mode;

  const [score, setScore] = useState(null);
  const [content, setContent] = useState("");

  // 리뷰 내용 함수
  const handleChange = (e) => {
    setContent(e.target.value);
  };

  // 리뷰 등록 요청 함수
  const handleSave = async () => {
    console.log(content);
    if (score && content) {
      axios
        .post(
          `${address}/api/${mode}/review`,
          {
            id,
            score,
            content,
          },
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        )
        .then(() => {
          alert("리뷰 등록이 완료되었습니다");
          navigate(-1);
        })
        .catch((error) => {
          console.log(error);
        });
    } else alert("별점과 내용을 모두 입력해 주세요");
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
        <style.TitleBlock>
          <h3>{location.state.placeName}</h3>
        </style.TitleBlock>
        <style.StarBlock>
          <ReviewStar margin={"0 auto 20px"} setScore={setScore} />
          <span>{score || 0} / 5</span>
        </style.StarBlock>
        <style.Content>
          <Input
            name={"writeContent"}
            contentPlaceholder={"내용을 입력해 주세요"}
            value={content}
            onChange={handleChange}
          />
        </style.Content>
      </style.Wrap>
      <Footer title={title} />
    </>
  );
}

export default ReviewWrite;
