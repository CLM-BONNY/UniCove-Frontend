import styled from "styled-components";

export const Wrap = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid #e0e0e0;
`;

export const TopBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 16px;
  font-weight: 700;
  > img {
    width: 15%;
    height: 15%;
  }
`;

export const Comment = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const Date = styled.div`
  color: #808080;
  font-size: 16px;
`;