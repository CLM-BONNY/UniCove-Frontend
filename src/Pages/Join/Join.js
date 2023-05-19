import React, { useState, useRef, useCallback } from "react";
import * as style from "./styles";
import Input from "../../Components/Input/Input";
import FullButton from "../../Components/Button/FullButton";
import StrokeButton from "../../Components/Button/StrokeButton";
import Header from "../../Components/Header/Header";

function Join() {
  const title = "회원가입";
  const [write, setWrite] = useState({
    JoinNameInput: "",
    JoinPhoneInput: "",
    JoinPlaceInput: "",
    JoinIdInput: "",
    JoinPasswordInput: "",
    JoinPasswordCheckInput: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWrite((prevWrite) => ({
      ...prevWrite,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    console.log(write);
    const inputName = write.JoinNameInput;
    const inputPhone = write.JoinPhoneInput;
    const inputPlace = write.JoinPlaceInput;
    const inputId = write.JoinIdInput;
    const inputPassword = write.JoinPasswordInput;
    const inputPasswordCheck = write.JoinPasswordCheckInput;
    const phoneRegex = /^\d{3}-\d{3,4}-\d{4}$/;
    const filteredId = inputId.replace(/[^a-zA-Z0-9]/g, "");
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
    if (
      inputName.length === 0 ||
      inputPhone.length === 0 ||
      inputPlace === "text" ||
      inputId.length === 0 ||
      inputPassword === 0 ||
      inputPasswordCheck === 0
    ) {
      alert("전부 입력해주세요");
    }
    if (!phoneRegex.test(inputPhone)) {
      alert("알맞지 않은 전화번호입니다");
    }
    if (!(filteredId === inputId)) {
      alert("알맞지 않은 아이디입니다");
    }
    if (inputPassword.length < 8 || inputPassword.length > 10) {
      alert("비밀번호를 8-10글자 이내로 입력해주세요");
    }
    if (!passwordRegex.test(inputPassword)) {
      alert("알맞지 않은 비밀번호입니다");
    }
    if (!(inputPassword === inputPasswordCheck)) {
      alert("비밀번호를 동일하게 입력해주세요");
    }
  };
  const inputRef = useRef(null);
  const onUploadImage = useCallback((e) => {
    if (!e.target.files) {
      return;
    }
    console.log(e.target.files[0].name);
  }, []);
  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);
  const [selectColor, setSelectColor] = useState("gray");
  const handleSelectColor = (e) => {
    if (e.target.value === "text") {
      setSelectColor("gray");
    } else {
      setSelectColor("black");
    }
    const { name, value } = e.target;
    setWrite((prevWrite) => ({
      ...prevWrite,
      [name]: value,
    }));
  };

  return (
    <style.Wrap>
      <Header title={title} />
      <style.ProfileImg>
        <img src={process.env.PUBLIC_URL + "Images/Join/profileImg.svg"}></img>
      </style.ProfileImg>
      <FullButton
        btnName={"설정"}
        color={"white"}
        backgroundColor={"#0F4C75"}
        position={"absolute"}
        width={"51px"}
        height={"22.35px"}
        top={"243px"}
        left={"252px"}
        border={"30px"}
        onClick={onUploadImageButtonClick}
      ></FullButton>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={inputRef}
        onChange={onUploadImage}
      />
      <Input
        titlemarginBottom={"10px"}
        title={"이름"}
        marginBottom={"30px"}
        name={"JoinNameInput"}
        placeholder={"이름을 입력해주세요"}
        onChange={handleChange}
      />
      <Input
        titlemarginBottom={"10px"}
        title={"전화번호"}
        marginBottom={"30px"}
        name={"JoinPhoneInput"}
        placeholder={"전화번호를 입력해주세요 (010-0000-0000)"}
        onChange={handleChange}
      />
      <style.Label>주소</style.Label>
      <style.PlaceInput>
        <select
          onChange={handleSelectColor}
          style={{ color: selectColor }}
          name={"JoinPlaceInput"}
        >
          <option value="text" selected>
            주소 선택하기
          </option>
          <option value="강남구">강남구</option>
          <option value="강동구">강동구</option>
          <option value="강북구">강북구</option>
          <option value="강서구">강서구</option>
          <option value="관악구">관악구</option>
          <option value="광진구">광진구</option>
          <option value="구로구">구로구</option>
          <option value="금천구">금천구</option>
          <option value="노원구">노원구</option>
          <option value="도봉구">도봉구</option>
          <option value="동대문구">동대문구</option>
          <option value="동작구">동작구</option>
          <option value="마포구">마포구</option>
          <option value="서대문구">서대문구</option>
          <option value="서초구">서초구</option>
          <option value="성동구">성동구</option>
          <option value="성북구">성북구</option>
          <option value="송파구">송파구</option>
          <option value="양천구">양천구</option>
          <option value="영등포구">영등포구</option>
          <option value="용산구">용산구</option>
          <option value="은평구">은평구</option>
          <option value="종로구">종로구</option>
          <option value="중구">중구</option>
          <option value="중랑구">중랑구</option>
        </select>
      </style.PlaceInput>
      <Input
        titlemarginBottom={"10px"}
        title={"아이디"}
        marginBottom={"30px"}
        name={"JoinIdInput"}
        placeholder={"아이디를 입력해주세요 (영어와 숫자만 가능)"}
        onChange={handleChange}
      />
      <Input
        titlemarginBottom={"10px"}
        title={"비밀번호"}
        marginBottom={"30px"}
        name={"JoinPasswordInput"}
        type={"password"}
        placeholder={"비밀번호를 입력해주세요 (영어, 숫자를 포함해서 8-10글자)"}
        onChange={handleChange}
      />
      <Input
        titlemarginBottom={"10px"}
        title={"비밀번호 확인"}
        marginBottom={"30px"}
        name={"JoinPasswordCheckInput"}
        type={"password"}
        placeholder={"비밀번호를 한 번 더 입력해주세요"}
        onChange={handleChange}
      />
      <style.OuterButton>
        <FullButton
          btnName={"가입하기"}
          width={"400px"}
          height={"25px"}
          margin={"10px 0px"}
          onClick={handleSubmit}
        />
      </style.OuterButton>
      <style.OuterButton>
        <StrokeButton
          btnName={"뒤로가기"}
          width={"400px"}
          height={"25px"}
          margin={"0px 0px 20px 0px"}
        />
      </style.OuterButton>
    </style.Wrap>
  );
}

export default Join;
