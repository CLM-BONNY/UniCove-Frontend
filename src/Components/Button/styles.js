import styled from "styled-components";

export const FullButton = styled.div`
  padding: 10px;
  margin: ${(props) => props.margin || "20px"};
  ${(props) =>
    props.position &&
    `
  position: ${props.position};
  top: ${props.top};
  left: ${props.left};
  `}
  width: ${(props) => props.width || "20px"};
  height: ${(props) => props.height || "20px"};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.btnSubName ? "flex-start" : "center")};
  justify-content: center;
  text-align: center;
  border-radius: ${(props) => props.border || "10px"};
  background-color: ${(props) => props.backgroundColor || "#84ccd4"};
  border: 2px solid ${(props) => props.backgroundColor || "#84ccd4"};
  color: ${(props) => props.color || "#ffffff"};
  font-weight: 700;
  font-size: ${(props) => props.fontSize || "16px"};
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  > span {
    text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.5);
    &:nth-child(2) {
      font-weight: 400;
      font-size: 12px;
    }
  }
`;

export const StrokeButton = styled.div`
  padding: 10px;
  margin: ${(props) => props.margin || "20px"};
  width: ${(props) => props.width || "20px"};
  height: ${(props) => props.height || "20px"};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: ${(props) => props.border || "10px"};
  background-color: #ffffff;
  border: 2px solid ${(props) => props.color || "#84ccd4"};
  color: ${(props) => props.color || "#84ccd4"};
  font-weight: 700;
  font-size: ${(props) => props.fontSize || "16px"};
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
`;
