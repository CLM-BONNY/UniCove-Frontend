import styled from "styled-components";

export const Wrap = styled.div`
  background-color: #84ccd4;
`;

export const TopBlock = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > h1 {
    color: #ffffff;
  }
`;

export const BtnBlock = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const BottomBlock = styled.div`
  margin-top: 50px;
  padding: 20px 20px 60px;
  background-color: #ffffff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const Menu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8%;
`;

export const ItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > span {
    color: #0f4c75;
    font-size: 18px;
    font-weight: 800;
  }
`;

export const LikePlaceBlock = styled.div`
  margin: 25px;
`;

export const PlaceButton = styled.div`
  display: flex;
`;

export const LikePlace = styled.div`
  border: 1px solid #e0e0e0;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;
