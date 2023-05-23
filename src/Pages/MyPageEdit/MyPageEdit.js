import React, { useState, useRef, useCallback } from "react";
import * as style from "./styles";
import Input from "../../Components/Input/Input";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import FullButton from "../../Components/Button/FullButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MyPageEdit() {
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
        .post(`${address}/api/auth/changeDB`, {
          ...(inputName !== "" && { name: inputName }),
          ...(inputId !== "" && { username: inputId }),
          ...(inputPlace !== "" && { address: inputPlace }),
          ...(inputImage !== "" && { profile: inputImage }),
          ...(inputPhone !== "" && { phone: base64String }),
        })
        .then(function (response) {
          console.log(response);
          navigate(-1);
        })
        .catch(function (error) {
          console.log(error);
        });
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
              Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg0NzcxMzMxLCJleHAiOjE2ODczNjMzMzF9.1FZ9bPxFbjlJthpIfIwGIMk3lr_GXc3aQ_kNTWjeKpQ`,
            },
          }
        )
        .then(function (response) {
          console.log(response);
          navigate(-1);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    // axios
    //   .post(
    //     `${address}/api/auth/changeDB`,
    //     {
    //       ...(inputName !== "" && { name: inputName }),
    //       ...(inputId !== "" && { username: inputId }),
    //       ...(inputPlace !== "" && { address: inputPlace }),
    //       ...(inputImage !== "" && { profile: inputImage }),
    //       ...(inputPhone !== "" && { phone: inputPhone }),
    //     },
    //     {
    //       headers: {
    //         Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg0NzcxMzMxLCJleHAiOjE2ODczNjMzMzF9.1FZ9bPxFbjlJthpIfIwGIMk3lr_GXc3aQ_kNTWjeKpQ`,
    //       },
    //     }
    //   )
    //   .then(function (response) {
    //     console.log(response);
    //     navigate(-1);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
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
    setPhoneplaceholder("변경할 전화번호를 입력해주세요 (010-0000-0000)");
    setNameColor("black");
    setPlaceColor("black");
    setIdColor("black");
    setNameplaceholder("홍길동");
    setPlaceplaceholder("성북구");
    setIdplaceholder("gildong12");
  };

  const [placeplaceholder, setPlaceplaceholder] = useState("성북구");
  const handlePlaceClick = () => {
    setPlaceplaceholder(
      "변경할 주소를 입력해주세요 (서울특별시의 구만 입력해주세요 ex)oo구)"
    );
    setNameColor("black");
    setPhoneColor("black");
    setIdColor("black");
    setNameplaceholder("홍길동");
    setPhoneplaceholder("010-1234-5678");
    setIdplaceholder("gildong12");
  };

  const [idplaceholder, setIdplaceholder] = useState("gildong12");
  const handleIdClick = () => {
    setIdplaceholder("변경할 아이디를 입력해주세요 (영어와 숫자만 가능)");
    setNameColor("black");
    setPhoneColor("black");
    setPlaceColor("black");
    setNameplaceholder("홍길동");
    setPhoneplaceholder("010-1234-5678");
    setPlaceplaceholder("성북구");
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
                : process.env.PUBLIC_URL + "Images/Mypage/basicProfileImg.svg"
            }
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
          onClick={onUploadImageButtonClick}
        ></FullButton>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={inputRef}
          name={"MypageEditImage"}
          onChange={onUploadImage}
        />
        <Input
          titlemarginBottom={"10px"}
          title={"이름"}
          marginBottom={"20px"}
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
          titlemarginBottom={"10px"}
          title={"전화번호"}
          marginBottom={"20px"}
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
          titlemarginBottom={"10px"}
          title={"주소"}
          marginBottom={"20px"}
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
          titlemarginBottom={"10px"}
          title={"아이디"}
          marginBottom={"30px"}
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
