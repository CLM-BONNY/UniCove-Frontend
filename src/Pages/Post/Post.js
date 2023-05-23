import React from "react";
import * as style from "./styles";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import BoardListItem from "../../Components/Board/BoardListItem/BoardListItem";
import CommentItem from "../../Components/Board/CommentItem/CommentItem";
import FullButton from "../../Components/Button/FullButton";

function Post() {
  const title = "게시판";

  const data = [
    {
      id: 0,
      userId: "하나",
      comment: "나도 궁금해",
    },
    {
      id: 1,
      userId: "두울",
      comment: "나도 궁금해",
    },
    {
      id: 2,
      userId: "세엣",
      comment: "나도 궁금해",
    },
    {
      id: 3,
      userId: "네엣",
      comment: "나도 궁금해",
    },
    {
      id: 4,
      userId: "다섯",
      comment: "나도 궁금해",
    },
  ];

  return (
    <>
      <Header title={title} />
      <style.TopBlock>
        <style.Profile>
          <img src={process.env.PUBLIC_URL + "/Images/Place/ex.svg"} />
          <span>새싹 1</span>
        </style.Profile>
        <style.Date>2023.05.24</style.Date>
      </style.TopBlock>
      <BoardListItem
        title={"정릉시장 정육점"}
        content={"정릉시장에 있는 정육점 중에 어디가 제일 좋은가요?"}
        commentCount={"5"}
        likeCount={"2"}
      />
      {data.map((item) => (
        <CommentItem
          key={item.id}
          src={process.env.PUBLIC_URL + "/Images/Place/ex.svg"}
          userId={item.userId}
          comment={item.comment}
        />
      ))}
      <style.CommentButton>
        <FullButton
          btnName={"댓글을 입력해 주세요"}
          width={"20%"}
          position={"fixed"}
          top={"86%"}
          left={"50%"}
          transform={"translateX(-55%)"}
        />
      </style.CommentButton>

      <Footer title={title} />
    </>
  );
}

export default Post;
