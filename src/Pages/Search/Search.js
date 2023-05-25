import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import * as style from "./styles";
import Footer from "../../Components/Footer/Footer";
import SearchBox from "../../Components/SearchBox/SearchBox";
import BoardListItem from "../../Components/Board/BoardListItem/BoardListItem";
import axios from "axios";

function Search() {
  const title = "검색";
  const navigate = useNavigate();
  const address = process.env.REACT_APP_ADDRESS;
  const token = sessionStorage.getItem("token");

  // 검색값 변수
  const [query, setQuery] = useState("");

  // 무한 스크롤을 위한 변수들
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView(false);
  const [cntArticle, setCntArticle] = useState(null);

  const [data, setData] = useState([]);

  useEffect(() => {
    // 스크롤 이벤트를 감지하여 inView가 true이면 다음 페이지의 검색 결과 가져오기
    const handleScroll = () => {
      if (inView) {
        handleNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [inView]);

  // 엔터키 눌렀을 때 검색 함수 실행
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // 초기 검색 함수
  const handleSearch = () => {
    axios
      .get(`${address}/api/board/search?page=1&query=${query}`, {
        headers: { Authorization: `${token}` },
      })
      .then((response) => {
        console.log(response);
        const responseData = response.data.list;
        setData(responseData);
        setCntArticle(response.data.cnt_article);
        setPage(2);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // 무한 스크롤 기능 포함 다음 페이지 검색 함수
  const handleNextPage = () => {
    if (page <= cntArticle) {
      axios
        .get(`${address}/api/board/search?page=${page}&query=${query}`, {
          headers: { Authorization: `${token}` },
        })
        .then((response) => {
          console.log(response);
          const responseData = response.data.list;
          setData((prevData) => [...prevData, ...responseData]);
          setPage((prevPage) => prevPage + 1);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <>
      <SearchBox
        onClick={() => {
          navigate(-1);
        }}
        onChange={(e) => {
          setQuery(e.target.value);
          console.log(query);
        }}
        onKeyDown={handleKeyDown}
      />
      {data.length > 0 ? (
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
        })
      ) : (
        <style.ContentBlock>
          <img
            src={process.env.PUBLIC_URL + "/Images/Search/GraySearchIcon.svg"}
          />
        </style.ContentBlock>
      )}
      <div ref={ref}></div>
      <Footer title={title} />
    </>
  );
}

export default Search;
