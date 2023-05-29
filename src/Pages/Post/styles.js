import styled from "styled-components";

export const Wrap = styled.div`
  padding: 0px 0px 50px 0px;
`;

export const TopBlock = styled.div`
  padding: 30px 40px 15px 40px;
  display: flex;
  align-items: end;
  justify-content: center;
`;

export const Profile = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  font-weight: 700;
  > img {
    width: 25%;
    height: 25%;
  }
`;

export const Date = styled.div`
  color: #808080;
  font-size: 14px;
  font-weight: 500;
`;

export const CommentButton = styled.div`
  display: flex;
  justify-content: center;
`;