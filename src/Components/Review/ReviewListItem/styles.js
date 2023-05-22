import styled from "styled-components";

export const Wrap = styled.div`
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
`;
export const TopBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
`;

export const Profile = styled.div`
  > img {
    width: 80%;
    border-radius: 10px;
  }
`;

export const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const StarBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
`;

export const IdDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Id = styled.div`
  color: #808080;
  font-size: 16px;
  font-weight: 700;
`;

export const Date = styled.div`
  color: #808080;
`;