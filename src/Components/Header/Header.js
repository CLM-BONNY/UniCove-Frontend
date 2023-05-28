import React from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import FullButton from "../Button/FullButton";
import Modal from "../Modal/Modal";

function Header(props) {
  const navigate = useNavigate();

  return (
    <style.Wrap>
      <img
        src={process.env.PUBLIC_URL + "/Images/Header/BackIcon.svg"}
        onClick={() => {
          props.title === "회원가입" ? navigate("../") : navigate(-1);
        }}
      />
      <span>{props.title}</span>
      {props.title === "내 정보" ? (
        <style.ButtonBlock>
          <FullButton
            btnName={"수정"}
            height={"5px"}
            fontSize={"13px"}
            onClick={props.onClick}
          />
        </style.ButtonBlock>
      ) : props.title === "내 정보 수정" ||
        props.title === "오류 제보" ||
        props.title === "비밀번호 변경" ||
        props.title === "글 쓰기" ||
        props.title === "리뷰 쓰기" ? (
        <style.ButtonBlock>
          <FullButton
            btnName={"완료"}
            height={"5px"}
            fontSize={"13px"}
            onClick={props.onClick}
          />
        </style.ButtonBlock>
      ) : props.title === "착한 가격 업소" ||
        props.title === "야간 공부 장소" ? (
        <img
          src={process.env.PUBLIC_URL + "/Images/Header/ShareIcon.svg"}
          onClick={props.onClick}
        />
      ) : props.title === "게시판" && props.post && props.isMe ? (
        <Modal componentName={"게시글"} boardid={props.boardid} />
      ) : props.title === "게시판" && !props.post ? (
        <img
          src={process.env.PUBLIC_URL + "/Images/Header/SearchIcon.svg"}
          onClick={props.onClick}
        />
      ) : (
        <span />
      )}
    </style.Wrap>
  );
}

export default Header;
