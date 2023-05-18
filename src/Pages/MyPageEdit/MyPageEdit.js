import React, { useState } from "react";
import * as style from "./styles";
import Input from "../../Components/Input/Input";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import FullButton from "../../Components/Button/FullButton";

function MyPageEdit() {
  const title = "내 정보 수정";
  const [namecolor, setNameColor] = useState(true);
  const handleNameColor = () => {
    setNameColor(!namecolor);
  };

  const [phonecolor, setPhoneColor] = useState(true);
  const handlePhoneColor = () => {
    setPhoneColor(!phonecolor);
  };

  const [placecolor, setPlaceColor] = useState(true);
  const handlePlaceColor = () => {
    setPlaceColor(!placecolor);
  };

  const [idcolor, setIdColor] = useState(true);
  const handleIdColor = () => {
    setIdColor(!idcolor);
  };

  const [nameplaceholder, setNameplaceholder] = useState("홍길동");
  const handleNameClick = () => {
    setNameplaceholder("변경할 이름을 입력해주세요");
    setPhoneColor("black");
    setPlaceColor("black");
    setIdColor("black");
    setPhoneplaceholder("010-1234-5678");
    setPlaceplaceholder("성북구");
    setIdplaceholder("gildong12");
  };

  const [phoneplaceholder, setPhoneplaceholder] = useState("010-1234-5678");
  const handlePhoneClick = () => {
    setPhoneplaceholder("변경할 전화번호를 입력해주세요");
    setNameColor("black");
    setPlaceColor("black");
    setIdColor("black");
    setNameplaceholder("홍길동");
    setPlaceplaceholder("성북구");
    setIdplaceholder("gildong12");
  };

  const [placeplaceholder, setPlaceplaceholder] = useState("성북구");
  const handlePlaceClick = () => {
    setPlaceplaceholder("변경할 주소를 입력해주세요");
    setNameColor("black");
    setPhoneColor("black");
    setIdColor("black");
    setNameplaceholder("홍길동");
    setPhoneplaceholder("010-1234-5678");
    setIdplaceholder("gildong12");
  };

  const [idplaceholder, setIdplaceholder] = useState("gildong12");
  const handleIdClick = () => {
    setIdplaceholder("변경할 아이디를 입력해주세요");
    setNameColor("black");
    setPhoneColor("black");
    setPlaceColor("black");
    setNameplaceholder("홍길동");
    setPhoneplaceholder("010-1234-5678");
    setPlaceplaceholder("성북구");
  };

  return (
    <style.Wrap>
      <Header title={title} />
      <style.ProfileImg>
        <img
          src={process.env.PUBLIC_URL + "Images/Mypage/basicProfileImg.svg"}
        ></img>
      </style.ProfileImg>
      <FullButton
        backgroundColor={"#0F4C75"}
        position={"absolute"}
        width={"51px"}
        height={"22.35px"}
        top={"243px"}
        left={"252px"}
        border={"30px"}
        src={process.env.PUBLIC_URL + "Images/MyPageEdit/Camera.svg"}
      ></FullButton>
      <Input
        titlemarginBottom={"10px"}
        title={"이름"}
        marginBottom={"30px"}
        name={"MypageEditName"}
        placeholder={nameplaceholder}
        color={namecolor ? "black" : "gray"}
        onClick={() => {
          handleNameColor();
          handleNameClick();
        }}
      />
      <Input
        titlemarginBottom={"10px"}
        title={"전화번호"}
        marginBottom={"30px"}
        name={"MypageEditPhone"}
        placeholder={phoneplaceholder}
        color={phonecolor ? "black" : "gray"}
        onClick={() => {
          handlePhoneColor();
          handlePhoneClick();
        }}
      />
      <Input
        titlemarginBottom={"10px"}
        title={"주소"}
        marginBottom={"30px"}
        name={"MypageEditPlace"}
        placeholder={placeplaceholder}
        color={placecolor ? "black" : "gray"}
        onClick={() => {
          handlePlaceColor();
          handlePlaceClick();
        }}
      />
      <Input
        titlemarginBottom={"10px"}
        title={"아이디"}
        marginBottom={"30px"}
        name={"MypageEditId"}
        placeholder={idplaceholder}
        color={idcolor ? "black" : "gray"}
        onClick={() => {
          handleIdColor();
          handleIdClick();
        }}
      />
      <Footer title={title} />
    </style.Wrap>
  );
}

export default MyPageEdit;
