import styled from "styled-components";

export const TopBlock = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const PlaceImg = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  > img {
    width: 90%;
    height: 90%;
    border-radius: 20px;
  }
`;

export const Pride = styled.div`
  margin: 30px 20px;
  display: flex;
`;

export const ReviewTopBlock = styled.div`
  padding: 20px;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 3px solid #84ccd4;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  font-weight: 700;
`;

export const ReviewBottomBlock = styled.div`
  padding: 5px 15px;
  margin: 0 20px;
  border: 2px solid #e0e0e0;
  border-top: 0px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const ReviewPlus = styled.div`
  margin: 15px 0px 15px 15px;
  display: flex;
  justify-content: right;
  gap: 5px;
`;

export const BottomBlock = styled.div`
  padding: 20px 15px;
  margin-top: 30px;
  display: flex;
  align-items: end;
  background-color: #84ccd4;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const LeftBlock = styled.div`
  margin-right: 20px;
`;

export const Item = styled.div`
  margin: 15px 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
`;

export const Menu = styled.div`
  margin: 15px 10px;
  display: flex;
  align-items: first baseline;
  gap: 10px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
`;
