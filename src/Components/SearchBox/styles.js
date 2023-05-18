import styled from "styled-components";

export const Wrap = styled.div`
  margin: ${(props) => props.margin};
  padding: 7px;
  width: ${(props) => props.title === "지도" && "70%"};
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18%;
  border-radius: ${(props) => (props.title === "지도" ? "10px" : "0px")};
  border: ${(props) => (props.title === "지도" ? "1px solid #e0e0e0" : "none")};
  border-bottom: 1px solid #e0e0e0;
  color: #808080;
  font-weight: 600;
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
