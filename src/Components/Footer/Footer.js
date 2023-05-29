import React from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";

function Footer(props) {
  const navigate = useNavigate();

  return (
    <style.Wrap>
      <style.Menu>
        <style.BtnLink>
          {props.title !== "메인" ? (
            <img
              src={process.env.PUBLIC_URL + "/Images/Footer/HomeIcon.svg"}
              onClick={() => {
                navigate("../main");
              }}
            />
          ) : (
            <img
              src={
                process.env.PUBLIC_URL + "/Images/Footer/SelectedHomeIcon.svg"
              }
            />
          )}
        </style.BtnLink>
        <style.BtnLink>
          {props.title !== "지도" ? (
            <img
              src={process.env.PUBLIC_URL + "/Images/Footer/MapIcon.svg"}
              onClick={() => {
                navigate("../map", {
                  state: {
                    mode: "goodshop"
                  }
                });
              }}
            />
          ) : (
            <img
              src={
                process.env.PUBLIC_URL + "/Images/Footer/SelectedMapIcon.svg"
              }
            />
          )}
        </style.BtnLink>
        <style.BtnLink>
          {props.title !== "게시판" ? (
            <img
              src={process.env.PUBLIC_URL + "/Images/Footer/BoardIcon.svg"}
              onClick={() => {
                navigate("../board");
              }}
            />
          ) : (
            <img
              src={
                process.env.PUBLIC_URL + "/Images/Footer/SelectedBoardIcon.svg"
              }
            />
          )}
        </style.BtnLink>
        <style.BtnLink>
          {props.title !== "글 쓰기" ? (
            <img
              src={process.env.PUBLIC_URL + "/Images/Footer/WriteIcon.svg"}
              onClick={() => {
                navigate("../write");
              }}
            />
          ) : (
            <img
              src={
                process.env.PUBLIC_URL + "/Images/Footer/SelectedWriteIcon.svg"
              }
            />
          )}
        </style.BtnLink>
        <style.BtnLink>
          {props.title !== "내 정보" ? (
            <img
              src={process.env.PUBLIC_URL + "/Images/Footer/MyPageIcon.svg"}
              onClick={() => {
                navigate("../mypage");
              }}
            />
          ) : (
            <img
              src={
                process.env.PUBLIC_URL + "/Images/Footer/SelectedMyPageIcon.svg"
              }
            />
          )}
        </style.BtnLink>
      </style.Menu>
    </style.Wrap>
  );
}

export default Footer;
