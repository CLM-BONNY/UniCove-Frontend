import React, { useEffect, useState } from "react";
import * as style from "./styles";
import ReadonlyInput from "../../Components/Input/ReadonlyInput";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MyPage() {
  const title = "내 정보";
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  const address = process.env.REACT_APP_ADDRESS;
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
      })
      .catch(function (error) {});
  };

  return (
    <>
      <Header
        title={title}
        onClick={() => {
          navigate("/mypageEdit");
        }}
      />
      <style.Wrap>
        <style.ProfileImg>
          <img
            src={
              userData.profile
                ? userData.profile
                : process.env.PUBLIC_URL + "Images/Mypage/basicProfileImg.svg"
            }
          ></img>
        </style.ProfileImg>
        <ReadonlyInput
          title={"이름"}
          name={"MypageName"}
          placeholder={userData.name}
          color={"black"}
        />
        <ReadonlyInput
          title={"전화번호"}
          name={"MypagePhone"}
          placeholder={userData.phone}
          color={"black"}
        />
        <ReadonlyInput
          title={"주소"}
          name={"MypagePlace"}
          placeholder={userData.place}
          color={"black"}
        />
        <ReadonlyInput
          title={"아이디"}
          name={"MypageId"}
          placeholder={userData.id}
          color={"black"}
        />
      </style.Wrap>
      <Footer title={title} />
    </>
  );
}

export default MyPage;
