import React, { useEffect, useState } from "react";
import * as style from "./styles";
import ReadonlyInput from "../../Components/Input/ReadonlyInput";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MyPage() {
  let name, id, place, profile, phone;
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
          Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcsImlhdCI6MTY4NDg1MTQzMiwiZXhwIjoxNjg3NDQzNDMyfQ.ycOVibyTMSCsaNd9XrxxE1C6kNEHv_Nzky06TUFydgo
          `,
        },
      })
      .then(function (response) {
        console.log(response);
        const { name, username, address, profile, phone } = response.data;
        setUserData({
          name: name || "",
          id: username || "",
          place: address || "",
          profile: profile || "",
          phone: phone || "",
        });
        console.log(profile);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const title = "내 정보";
  return (
    <>
      <Header title={title} />
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
          titlemarginBottom={"10px"}
          title={"이름"}
          marginBottom={"20px"}
          name={"MypageName"}
          placeholder={userData.name}
          color={"black"}
        />
        <ReadonlyInput
          titlemarginBottom={"10px"}
          title={"전화번호"}
          marginBottom={"20px"}
          name={"MypagePhone"}
          placeholder={userData.phone}
          color={"black"}
        />
        <ReadonlyInput
          titlemarginBottom={"10px"}
          title={"주소"}
          marginBottom={"20px"}
          name={"MypagePlace"}
          placeholder={userData.place}
          color={"black"}
        />
        <ReadonlyInput
          titlemarginBottom={"10px"}
          title={"아이디"}
          marginBottom={"20px"}
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
