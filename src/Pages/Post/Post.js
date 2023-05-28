import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as style from "./styles";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import BoardListItem from "../../Components/Board/BoardListItem/BoardListItem";
import CommentItem from "../../Components/Board/CommentItem/CommentItem";
import FullButton from "../../Components/Button/FullButton";
import { ModalProvider } from "styled-react-modal";
import axios from "axios";

function Post() {
  const title = "게시판";
  const location = useLocation();
  const token = sessionStorage.getItem("token");
  const address = process.env.REACT_APP_ADDRESS;

  const [comment, setComment] = useState([]);
  const [likeCount, setLikeCount] = useState(null);
  const [postIsMe, setPostIsMe] = useState(false);
  const [isLike, setIsLike] = useState(false);

  const boardid = location.state.boardid;
  const [queryid, setQueryid] = useState(null);

  const [articleData, setArticleData] = useState(null);
  const [userData, setUserData] = useState(null);

  // 게시글 데이터
  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        const response = await axios.post(
          `${address}/api/article/read`,
          { boardid },
          { headers: { Authorization: `${token}` } }
        );
        setArticleData(response.data);
        setQueryid(response.data.content.userid);
        setLikeCount(response.data.content.cnt_like);
        setPostIsMe(response.data.content.is_me);
        setIsLike(response.data.content.is_like);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticleData();
  }, [boardid]);

  // 사용자 데이터
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${address}/api/board/getUser?queryid=${queryid}`,
          { headers: { Authorization: `${token}` } }
        );
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (queryid) {
      fetchUserData();
    }
  }, [queryid]);

  // 댓글 감지 함수
  const handleChange = (e) => {
    setComment(e.target.value);
  };

  // 엔터키 쿨릭시 댓글 작성 함수 실행
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      axios
        .post(
          `${address}/api/article/comment`,
          {
            boardid,
            content: comment,
          },
          { headers: { Authorization: `${token}` } }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // 좋아요 함수
  const handleLike = () => {
    if (isLike) {
      // 이미 좋아요가 눌려 있는 경우
      setLikeCount(likeCount - 1);
      setIsLike(false);
      axios
        .post(
          `${address}/api/article/unlike`,
          {
            boardid,
          },
          { headers: { Authorization: `${token}` } }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // 좋아요가 눌려 있지 않은 경우
      setLikeCount(likeCount + 1);
      setIsLike(true);
      axios
        .post(
          `${address}/api/article/like`,
          {
            boardid,
          },
          { headers: { Authorization: `${token}` } }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <ModalProvider>
      <Header title={title} post isMe={postIsMe} boardid={boardid} />
      <style.TopBlock>
        <style.Profile>
          <img src={userData?.profile && userData.profile} />
          <span>{userData?.username && userData.username}</span>
        </style.Profile>
        <style.Date>
          {articleData?.content.created_time &&
            articleData.content.created_time.substr(0, 10)}
        </style.Date>
      </style.TopBlock>
      {articleData?.content && (
        <BoardListItem
          title={articleData.content.title}
          content={articleData.content.content}
          commentCount={articleData.content.cnt_comment}
          likeCount={likeCount}
          onClick={handleLike}
        />
      )}
      {articleData?.comment &&
        articleData.comment.map((item) => (
          <CommentItem
            key={item.id}
            commentid={item.id}
            src={userData?.profile && userData.profile}
            userId={userData?.username && userData.username}
            comment={item.content}
            date={item.created_time.substr(0, 10)}
            isMe={item.is_me}
          />
        ))}
      <style.CommentButton>
        <FullButton
          input
          btnName={"댓글을 입력해 주세요"}
          width={"80vw"}
          maxWidth={"400px"}
          position={"fixed"}
          top={"86%"}
          left={"50%"}
          transform={"translateX(-55%)"}
          value={comment}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </style.CommentButton>
      <Footer title={title} />
    </ModalProvider>
  );
}

export default Post;
