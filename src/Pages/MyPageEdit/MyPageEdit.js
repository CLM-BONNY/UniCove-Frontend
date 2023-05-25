import React, { useState, useRef, useCallback, useEffect } from "react";
import * as style from "./styles";
import Input from "../../Components/Input/Input";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import FullButton from "../../Components/Button/FullButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MyPageEdit() {
  const token = sessionStorage.getItem("token");
  const [userData, setUserData] = useState({
    name: "",
    id: "",
    place: "",
    profile: "",
    phone: "",
  });
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios
      .get(`${address}/api/auth/getUser`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then(function (response) {
        const { name, username, address, profile, phone } = response.data;
        setUserData({
          name: name || "",
          id: username || "",
          place: address || "",
          profile: profile || "",
          phone: phone || "",
        });
        setNameplaceholder(name || "");
        setIdplaceholder(username || "");
        setPlaceplaceholder(address || "");
        setPhoneplaceholder(phone || "");
      })
      .catch(function (error) {});
  };
  const address = process.env.REACT_APP_ADDRESS;
  const title = "내 정보 수정";
  const [base64String, setBase64String] = useState(null);
  const [write, setWrite] = useState({
    MypageEditName: "",
    MypageEditPhone: "",
    MypageEditPlace: "",
    MypageEditId: "",
    MyPageEditImage: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWrite((prevWrite) => ({
      ...prevWrite,
      [name]: value,
    }));
  };
  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log(write);
    const inputName = write.MypageEditName;
    const inputPhone = write.MypageEditPhone;
    const inputPlace = write.MypageEditPlace;
    const inputId = write.MypageEditId;
    const inputImage = write.MyPageEditImage;
    const placeList = [
      "강남구",
      "강동구",
      "강북구",
      "강서구",
      "관악구",
      "광진구",
      "구로구",
      "금천구",
      "노원구",
      "도봉구",
      "동대문구",
      "동작구",
      "마포구",
      "서대문구",
      "서초구",
      "성동구",
      "성북구",
      "송파구",
      "양천구",
      "영등포구",
      "용산구",
      "은평구",
      "종로구",
      "중구",
      "중랑구",
    ];
    const phoneRegex = /^\d{3}-\d{4}-\d{4}$/;
    const filteredId = inputId.replace(/[^a-zA-Z0-9]/g, "");
    if (!phoneRegex.test(inputPhone) && inputPhone.length > 0) {
      alert("알맞지 않은 전화번호입니다");
      return null;
    }
    if (!placeList.includes(inputPlace) && inputPlace.length > 0) {
      alert("알맞지 않은 주소입니다");
      return null;
    }
    if (!(filteredId === inputId) && inputId.length > 0) {
      alert("알맞지 않은 아이디입니다");
      return null;
    }
    if (inputImage !== "") {
      axios
        .post(
          `${address}/api/auth/changeDB`,
          {
            ...(inputName !== "" && { name: inputName }),
            ...(inputId !== "" && { username: inputId }),
            ...(inputPlace !== "" && { address: inputPlace }),
            ...(inputImage !== "" && { profile: base64String }),
            ...(inputPhone !== "" && { phone: inputPhone }),
          },
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        )
        .then(function (response) {
          alert("정상적으로 수정되었습니다");
          navigate(-1);
        })
        .catch(function (error) {});
    } else if (
      inputName === "" &&
      inputId === "" &&
      inputPlace === "" &&
      inputPhone === ""
    ) {
      navigate(-1);
    } else {
      axios
        .post(
          `${address}/api/auth/changeDB`,
          {
            ...(inputName !== "" && { name: inputName }),
            ...(inputId !== "" && { username: inputId }),
            ...(inputPlace !== "" && { address: inputPlace }),
            ...(inputPhone !== "" && { phone: inputPhone }),
          },
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        )
        .then(function (response) {
          alert("정상적으로 수정되었습니다");
          navigate(-1);
        })
        .catch(function (error) {});
    }
  };
  const inputRef = useRef(null);
  const onUploadImage = useCallback((e) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = function () {
      setBase64String(reader.result);
      setWrite((prevWrite) => ({
        ...prevWrite,
        MyPageEditImage: base64String,
      }));
    };
    reader.readAsDataURL(file);
  }, []);
  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);
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

  const [nameplaceholder, setNameplaceholder] = useState(userData.name);
  const handleNameClick = () => {
    setNameplaceholder("변경할 이름을 입력해 주세요");
    setPhoneColor("black");
    setPlaceColor("black");
    setIdColor("black");
    setPhoneplaceholder(userData.phone);
    setPlaceplaceholder(userData.place);
    setIdplaceholder(userData.id);
  };

  const [phoneplaceholder, setPhoneplaceholder] = useState(userData.phone);
  const handlePhoneClick = () => {
    setPhoneplaceholder("변경할 전화번호를 입력해 주세요 (010-0000-0000)");
    setNameColor("black");
    setPlaceColor("black");
    setIdColor("black");
    setNameplaceholder(userData.name);
    setPlaceplaceholder(userData.place);
    setIdplaceholder(userData.id);
  };

  const [placeplaceholder, setPlaceplaceholder] = useState(userData.place);
  const handlePlaceClick = () => {
    setPlaceplaceholder(
      "변경할 주소를 입력해주세요 (서울특별시의 구만 입력해 주세요 ex)oo구)"
    );
    setNameColor("black");
    setPhoneColor("black");
    setIdColor("black");
    setNameplaceholder(userData.name);
    setPhoneplaceholder(userData.phone);
    setIdplaceholder(userData.id);
  };

  const [idplaceholder, setIdplaceholder] = useState(userData.id);
  const handleIdClick = () => {
    setIdplaceholder("변경할 아이디를 입력해 주세요 (영어와 숫자만 가능)");
    setNameColor("black");
    setPhoneColor("black");
    setPlaceColor("black");
    setNameplaceholder(userData.name);
    setPhoneplaceholder(userData.phone);
    setPlaceplaceholder(userData.place);
  };

  return (
    <>
      <Header title={title} onClick={handleSubmit} />
      <style.Wrap>
        <style.ProfileImg>
          <img
            src={
              base64String
                ? base64String
                : userData.profile
                ? userData.profile
                : process.env.PUBLIC_URL + "Images/Mypage/basicProfileImg.svg"
            }
          />
        </style.ProfileImg>
        <FullButton
          backgroundColor={"#0F4C75"}
          position={"absolute"}
          width={"6%"}
          height={"1.5%"}
          top={"30%"}
          left={"60%"}
          border={"20px"}
          src={process.env.PUBLIC_URL + "Images/MyPageEdit/Camera.svg"}
          onClick={onUploadImageButtonClick}
        />
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={inputRef}
          name={"MypageEditImage"}
          onChange={onUploadImage}
        />
        <Input
          title={"이름"}
          name={"MypageEditName"}
          placeholder={nameplaceholder}
          color={namecolor ? "black" : "gray"}
          onChange={handleChange}
          onClick={() => {
            handleNameColor();
            handleNameClick();
          }}
        />
        <Input
          title={"전화번호"}
          name={"MypageEditPhone"}
          placeholder={phoneplaceholder}
          color={phonecolor ? "black" : "gray"}
          onChange={handleChange}
          onClick={() => {
            handlePhoneColor();
            handlePhoneClick();
          }}
        />
        <Input
          title={"주소"}
          name={"MypageEditPlace"}
          placeholder={placeplaceholder}
          color={placecolor ? "black" : "gray"}
          onChange={handleChange}
          onClick={() => {
            handlePlaceColor();
            handlePlaceClick();
          }}
        />
        <Input
          title={"아이디"}
          name={"MypageEditId"}
          placeholder={idplaceholder}
          color={idcolor ? "black" : "gray"}
          onChange={handleChange}
          onClick={() => {
            handleIdColor();
            handleIdClick();
          }}
        />
      </style.Wrap>
      <Footer title={title} />
    </>
  );
}

export default MyPageEdit;
