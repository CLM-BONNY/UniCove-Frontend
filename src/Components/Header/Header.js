import React from "react";
import * as style from "./styles";
import FullButton from "../Button/FullButton";

function Header(props) {
  return (
    <style.Wrap>
      <img src={process.env.PUBLIC_URL + "/Images/Header/BackIcon.svg"} />
      <span>{props.title}</span>
      {props.title === "내 정보" ? (
        <style.ButtonBlock>
          <FullButton btnName={"수정"} height={"5px"} fontSize={"11px"} />
        </style.ButtonBlock>
      ) : props.title === "내 정보 수정" ||
        props.title === "오류 제보" ||
        props.title === "설정" ||
        props.title === "비밀번호 변경" ||
        props.title === "글 쓰기" ||
        props.title === "리뷰 쓰기" ? (
        <style.ButtonBlock>
          <FullButton btnName={"완료"} height={"5px"} fontSize={"11px"} />
        </style.ButtonBlock>
      ) : props.title === "착한 가격 업소" ||
        props.title === "야간 공부 장소" ? (
        <img src={process.env.PUBLIC_URL + "/Images/Header/ShareIcon.svg"} />
      ) : props.title === "게시판" ? (
        <img src={process.env.PUBLIC_URL + "/Images/Header/SearchIcon.svg"} />
      ) : (
        <span />
      )}
    </style.Wrap>
  );
}

export default Header;
