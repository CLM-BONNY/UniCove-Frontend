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
  const fetchArticleData = async () => {
    try {
      const response = await axios.post(
        `${address}/api/article/read`,
        { boardid },
        { headers: { Authorization: `${token}` } }
      );
      setArticleData(response.data);
      setLikeCount(response.data.content.cnt_like);
      setPostIsMe(response.data.content.is_me);
      setIsLike(response.data.content.is_like);
      setQueryid(response.data.content.userid);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchArticleData();
  }, []);

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

  // 엔터키 클릭시 댓글 작성 함수 실행
  let isPosting = false;
  const handleKeyDown = (e) => {
    if (!isPosting && e.key === "Enter") {
      if (!comment) return alert("댓글을 입력해주세요!");
      isPosting = true;
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
          // 댓글 작성 완료 후 입력창 비우기
          console.log(response);
          setComment("");
          fetchArticleData();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          isPosting = false;
        });
    }
  };

  // 좋아요 함수
  const handleLike = () => {
    if (isLike) {
      // 이미 좋아요가 눌려 있는 경우
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
          fetchArticleData();
        })
        .catch((error) => {
          console.log(error);
        });
      setIsLike(false);
    } else {
      // 좋아요가 눌려 있지 않은 경우
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
          fetchArticleData();
        })
        .catch((error) => {
          console.log(error);
        });
      setIsLike(true);
    }
  };

  // 댓글 삭제 함수
  const deleteComment = (commentid) => {
    axios
      .post(
        `${address}/api/article/comment_del`,
        {
          commentid,
        },
        { headers: { Authorization: `${token}` } }
      )
      .then((response) => {
        console.log(response);
        fetchArticleData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ModalProvider>
      <Header title={title} post isMe={postIsMe} boardid={boardid} />
      <style.Wrap>
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
              src={item.profile}
              userId={item.name}
              comment={item.content}
              date={item.created_time.substr(0, 10)}
              isMe={item.is_me}
              deleteComment={deleteComment}
            />
          ))}
        <style.CommentButton>
          <FullButton
            input
            btnName={""}
            width={"80vw"}
            height={"5vh"}
            maxWidth={"400px"}
            position={"fixed"}
            top={"75%"}
            left={"50%"}
            transform={"translateX(-55%)"}
            value={comment}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </style.CommentButton>
      </style.Wrap>
      <Footer title={title} />
    </ModalProvider>
  );
}

export default Post;
