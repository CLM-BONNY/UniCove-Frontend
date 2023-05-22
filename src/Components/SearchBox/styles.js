import styled from "styled-components";

export const Wrap = styled.div`
  margin: ${(props) => props.margin};
  padding: 7px;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18%;
  border-bottom: 1px solid #e0e0e0;
  background-color: #ffffff;
  color: #808080;
  font-weight: 600;
  z-index: 100;
  > img {
    width: 20px;
    height: 20px;
  }
  > input {
    width: 180px;
    outline: none;
    border: none;
  }
`;
