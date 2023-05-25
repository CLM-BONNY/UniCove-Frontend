import styled from "styled-components";

export const TopBlock = styled.div`
  padding: 30px 40px 15px 40px;
  display: flex;
  align-items: end;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 16px;
  font-weight: 700;
  > img {
    width: 25%;
    height: 25%;
  }
`;

export const Date = styled.div`
  color: #808080;
`;

export const CommentButton = styled.div`
  display: flex;
  justify-content: center;
`;