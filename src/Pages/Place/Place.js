import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as style from "./styles";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import FullButton from "../../Components/Button/FullButton";
import ReviewStar from "../../Components/Review/ReviewStar/ReviewStar";
import ReviewItem from "../../Components/Review/ReviewItem/ReviewItem";
import axios from "axios";

function Place() {
  const [title, setTitle] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const currentUrl = location.pathname;
  const queryid = sessionStorage.getItem("id");
  const token = sessionStorage.getItem("token");
  const address = process.env.REACT_APP_ADDRESS;

  // 지도 페이지에서 넘겨받는 변수
  const {
    id,
    placeName,
    placeAddress,
    img,
    menu,
    info,
    phone,
    mode,
    lat,
    lng,
  } = location.state;

  // 백엔드에서 받는 변수
  const [userName, setUserName] = useState(null);
  const [isLike, setIsLike] = useState(location.state.isLike);
  const [data, setData] = useState(null);

  console.log(isLike)
  useEffect(() => {
    if (mode && mode === "nightstudy") {
      setTitle("야간 공부 장소");
    } else {
      setTitle("착한 가격 업소");
    }
  }, []);

  // 사용자 이름 가져오기
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${address}/api/board/getUser?queryid=${queryid}`,
          { headers: { Authorization: `${token}` } }
        );
        setUserName(response.data.username);
      } catch (error) {
        console.error(error);
      }
    };

    if (queryid) {
      fetchUserData();
    }
  }, []);

  // 리뷰 가져오는 함수
  useEffect(() => {
    axios
      .get(`${address}/api/${mode}/review?id=${id}`, {
        headers: { Authorization: `${token}` },
      })
      .then((response) => {
        setData(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // 좋아요 함수
  const fetchData = () => {
    axios
      .post(
        `${address}/api/${mode}/like/toggle`,
        {
          id,
        },
        { headers: { Authorization: `${token}` } }
      )
      .then((response) => {
        setIsLike(response.data.like);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 클립보드 복사 공유 함수
  const doCopy = (text) => {
    // 흐음 1.
    if (navigator.clipboard) {
      // (IE는 사용 못하고, 크롬은 66버전 이상일때 사용 가능합니다.)
      navigator.clipboard
        .writeText(text)
        .then(() => {
          alert("클립보드에 복사되었습니다.");
        })
        .catch(() => {
          alert("복사를 다시 시도해주세요.");
        });
    } else {
      // 흐름 2.
      if (!document.queryCommandSupported("copy")) {
        return alert("복사하기가 지원되지 않는 브라우저입니다.");
      }

      // 흐름 3.
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.top = 0;
      textarea.style.left = 0;
      textarea.style.position = "fixed";

      // 흐름 4.
      document.body.appendChild(textarea);
      // focus() -> 사파리 브라우저 서포팅
      textarea.focus();
      // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
      textarea.select();
      // 흐름 5.
      document.execCommand("copy");
      // 흐름 6.
      document.body.removeChild(textarea);
      alert("클립보드에 복사되었습니다.");
    }
  };

  return (
    <style.Wrap>
      <Header title={title} onClick={() => doCopy(address + currentUrl)} />
      <style.TopBlock>
        <FullButton
          btnName={placeName}
          btnSubName={placeAddress}
          width={"40%"}
          height={"40%"}
          backgroundColor={"#AFD3E2"}
        />
        <FullButton
          padding={"2px"}
          btnName={"지도 보기"}
          width={"12%"}
          height={"10%"}
          backgroundColor={"#e0e0e0"}
          color={"#000000"}
          fontSize={"13px"}
          onClick={() => {
            navigate("../map", {
              state: {
                mode: mode,
                lat: lat,
                lng: lng,
              },
            });
          }}
        />
      </style.TopBlock>
      <style.PlaceImg>{img && <img src={img} />}</style.PlaceImg>
      <style.ReviewTopBlock
        onClick={() => {
          navigate("../reviewWrite", {
            state: {
              placeName: placeName,
              mode: mode,
              id: id,
            },
          });
        }}
      >
        {userName && userName}님의 후기를 남겨주세요!
        <ReviewStar />
      </style.ReviewTopBlock>
      <style.ReviewBottomBlock>
        {data?.reviews &&
          data.reviews.map((item) => (
            <ReviewItem
              key={item.id}
              nickname={item.name}
              starCount={item.score}
              reviewContent={item.content}
            />
          ))}
        <style.ReviewPlus
          onClick={() => {
            navigate("../review", {
              state: {
                mode: mode,
                id: id,
                placeName: placeName,
              },
            });
          }}
        >
          리뷰 더보기
          <img src={process.env.PUBLIC_URL + "/Images/Place/NextIcon.svg"} />
        </style.ReviewPlus>
      </style.ReviewBottomBlock>
      <style.BottomBlock>
        <style.LeftBlock>
          <style.Item>
            <img
              src={process.env.PUBLIC_URL + "/Images/Place/LocationIcon.svg"}
            />
            {placeName}
          </style.Item>
          {menu && (
            <style.Menu>
              <img
                src={process.env.PUBLIC_URL + "/Images/Place/MenuIcon.svg"}
              />
              {menu}
            </style.Menu>
          )}
          {info && (
            <style.Item>
              <img
                src={process.env.PUBLIC_URL + "/Images/Place/TimeIcon.svg"}
              />
              {info}
            </style.Item>
          )}
          {phone && (
            <style.Item>
              <img
                src={process.env.PUBLIC_URL + "/Images/Place/PhoneIcon.svg"}
              />
              {phone}
            </style.Item>
          )}
        </style.LeftBlock>
        <FullButton
          src={
            isLike
              ? process.env.PUBLIC_URL + "/Images/Place/HeartIcon.svg"
              : process.env.PUBLIC_URL + "/Images/Place/StrokeHeartIcon.svg"
          }
          width={"20%"}
          height={"10%"}
          backgroundColor={"#ffffff"}
          onClick={fetchData}
        />
      </style.BottomBlock>
      <Footer title={title} />
    </style.Wrap>
  );
}

export default Place;
