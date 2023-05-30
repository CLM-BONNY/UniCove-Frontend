import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import * as style from "./styles";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import BoardListItem from "../../Components/Board/BoardListItem/BoardListItem";
import FullButton from "../../Components/Button/FullButton";
import axios from "axios";

function Board() {
  const title = "게시판";
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  const address = process.env.REACT_APP_ADDRESS;

  // 무한 스크롤을 위한 변수들
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView(false);
  const [cntArticle, setCntArticle] = useState(null);

  const [data, setData] = useState([]);

  useEffect(() => {
    // inView가 true일 때만 실행하기
    if (inView) {
      getPosts();
    }
  }, [inView, page, cntArticle]);

  const getPosts = () => {
    axios
      .get(`${address}/api/board/list?page=${page}`, {
        headers: { Authorization: `${token}` },
      })
      .then((response) => {
        const responseData = response.data.list;
        // 중복된 값 제거하고 원래 데이터와 합치기
        const filteredData = responseData.filter(
          (item) => !data.find((existingItem) => existingItem.id === item.id)
        );
        setData((prevData) => [...prevData, ...filteredData]);

        // 총 페이지 개수
        setCntArticle(response.data.cnt_article);

        // page 변수 관리 함수
        handlePage();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // 요청 성공 및 현재 page 값이 cntArticle값보다 작거나 같을 경우, page 값 +1
  const handlePage = () => {
    if (page <= cntArticle) {
      setPage((page) => page + 1);
    }
  };

  return (
    <>
      <Header
        title={title}
        onClick={() => {
          navigate("../search");
        }}
      />
      <style.Wrap>
        {data &&
          data.map((item, index) => {
            return (
              <BoardListItem
                key={index}
                title={item.title}
                content={item.content}
                commentCount={item.cnt_comment}
                likeCount={item.cnt_like}
                onClick={() => {
                  navigate("../post", {
                    state: {
                      boardid: item.id,
                    },
                  });
                }}
              />
            );
          })}
        <div ref={ref}></div>
        <FullButton
          btnName={"글 쓰기"}
          width={"60px"}
          height={"3%"}
          fontSize={"16px"}
          border={"20px"}
          position={"fixed"}
          top={"75%"}
          left={"50%"}
          transform={"translateX(-70%)"}
          onClick={() => {
            navigate("../write");
          }}
        />
      </style.Wrap>
      <Footer title={title} />
    </>
  );
}

export default Board;
