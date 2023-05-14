import styled from "styled-components";

export const Wrap = styled.div`
  position: sticky;
  bottom: 0;
  background-color: #ffffff;
`;

export const Menu = styled.div`
  height: 50px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  border-top: 1px solid #f1f1f5;
`;

export const BtnLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 25px;
    cursor: pointer;
  }
`;