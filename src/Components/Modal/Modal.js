import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import FullButton from "../Button/FullButton";
import axios from "axios";

export default function Modal(props) {
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const address = process.env.REACT_APP_ADDRESS;
  const commentid = props.commentid;
  const boardid = props.boardid;

  console.log(boardid);

  const [isOpen, setIsOpen] = useState(false);

  // 모달 토글 함수
  const toggleModal = (e) => {
    setIsOpen(!isOpen);
  };

  // 게시글 삭제 함수
  const handlePostDelete = () => {
    axios
      .post(
        `${address}/api/article/del`,
        {
          boardid,
        },
        { headers: { Authorization: `${token}` } }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    toggleModal();
    navigate("../board");
  };

  // 댓글 삭제 함수
  const handleCommentDelete = () => {
    axios
      .post(
        `${address}/api/article/comment_del`,
        {
          commentid,
        },
        { headers: { Authorization: `${token}` } }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    toggleModal();
  };

  return (
    <>
      <style.IconBlock>
        <img
          src={process.env.PUBLIC_URL + "/Images/Board/DotIcon.svg"}
          onClick={toggleModal}
        />
      </style.IconBlock>
      <style.TypeModal isOpen={isOpen} onBackgroundClick={toggleModal}>
        <style.ButtonBlock>
          <FullButton
            btnName={props.componentName + " 삭제"}
            margin={"0px"}
            width={"80vw"}
            maxWidth={"400px"}
            backgroundColor={"#B0B0B0"}
            onClick={props.componentName === "게시글" ? handlePostDelete : handleCommentDelete}
          />
          <FullButton
            btnName={"취소"}
            margin={"0px"}
            width={"80vw"}
            maxWidth={"400px"}
            onClick={toggleModal}
            backgroundColor={"#B0B0B0"}
          />
        </style.ButtonBlock>
      </style.TypeModal>
    </>
  );
}
