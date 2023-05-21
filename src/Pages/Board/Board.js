import React from "react";
import * as style from "./styles";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import BoardListItem from "../../Components/Board/BoardListItem/BoardListItem";
import FullButton from "../../Components/Button/FullButton";

function Board() {
  const title = "게시판";

  const data = [
    {
      id: 0,
      title: "정릉시장 정육점",
      content: "정릉시장에 있는 정육점 중에 어디가 제일 좋은가요?",
      commentCount: 0,
      likeCount: 3,
    },
    {
      id: 1,
      title: "정릉시장 정육점",
      content: "정릉시장에 있는 정육점 중에 어디가 제일 좋은가요?",
      commentCount: 1,
      likeCount: 3,
    },
    {
      id: 2,
      title: "정릉시장 정육점",
      content: "정릉시장에 있는 정육점 중에 어디가 제일 좋은가요?",
      commentCount: 2,
      likeCount: 3,
    },
    {
      id: 3,
      title: "정릉시장 정육점",
      content: "정릉시장에 있는 정육점 중에 어디가 제일 좋은가요?",
      commentCount: 3,
      likeCount: 3,
    },
    {
      id: 4,
      title: "정릉시장 정육점",
      content: "정릉시장에 있는 정육점 중에 어디가 제일 좋은가요?",
      commentCount: 4,
      likeCount: 3,
    },
    {
      id: 5,
      title: "정릉시장 정육점",
      content: "정릉시장에 있는 정육점 중에 어디가 제일 좋은가요?",
      commentCount: 5,
      likeCount: 3,
    },
    {
      id: 6,
      title: "정릉시장 정육점",
      content: "정릉시장에 있는 정육점 중에 어디가 제일 좋은가요?",
      commentCount: 6,
      likeCount: 3,
    },
    {
      id: 7,
      title: "정릉시장 정육점",
      content: "정릉시장에 있는 정육점 중에 어디가 제일 좋은가요?",
      commentCount: 7,
      likeCount: 3,
    },
    {
      id: 8,
      title: "정릉시장 정육점",
      content: "정릉시장에 있는 정육점 중에 어디가 제일 좋은가요?",
      commentCount: 8,
      likeCount: 3,
    },
    {
      id: 9,
      title: "정릉시장 정육점",
      content: "정릉시장에 있는 정육점 중에 어디가 제일 좋은가요?",
      commentCount: 9,
      likeCount: 3,
    },
  ];

  return (
    <>
      <Header title={title} />
      <style.Wrap>
        {data.map((item) => (
          <BoardListItem
            key={item.id}
            title={item.title}
            content={item.content}
            commentCount={item.commentCount}
            likeCount={item.likeCount}
          />
        ))}
        <FullButton
          btnName={"글 쓰기"}
          width={"60px"}
          height={"3%"}
          fontSize={"16px"}
          border={"20px"}
          position={"fixed"}
          top={"85%"}
          left={"50%"}
          transform={"translateX(-70%)"}
        />
      </style.Wrap>
      <Footer title={title} />
    </>
  );
}

export default Board;
