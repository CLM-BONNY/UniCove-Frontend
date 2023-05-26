import styled from "styled-components";

export const FullButton = styled.div`
  padding: ${(props) => props.padding || "10px"};
  margin: ${(props) => props.margin || "20px"};
  ${(props) =>
    props.position &&
    `
  position: ${props.position};
  top: ${props.top};
  left: ${props.left};
  transform: ${props.transform || "none"};
  `}
  width: ${(props) => props.width || "20px"};
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height || "20px"};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.btnSubName ? "flex-start" : "center")};
  justify-content: center;
  text-align: center;
  border-radius: ${(props) => props.border || "10px"};
  background-color: ${(props) => props.backgroundColor || "#84ccd4"};
  border: 2px solid ${(props) => props.backgroundColor || "#84ccd4"};
  ${(props) =>
    props.backgroundColor === "#AFD3E2" &&
    `    
    border-top-left-radius: ${props.borderTop};
    border-top-right-radius: ${props.borderTop};
    border-bottom-left-radius: ${props.borderBottom};
    border-bottom-right-radius: ${props.borderBottom};
  `}
  color: ${(props) => props.color || "#ffffff"};
  font-weight: 700;
  font-size: ${(props) => props.fontSize || "16px"};
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  z-index: 99;
  > span {
    &:nth-child(2) {
      font-weight: 400;
      font-size: 12px;
    }
  }
`;

export const StrokeButton = styled.div`
  padding: 10px;
  margin: ${(props) => props.margin || "20px"};
  ${(props) =>
    props.position &&
    `
  position: ${props.position};
  bottom: 10%;
  right: 1%;
  `}
  width: ${(props) => props.width || "20px"};
  height: ${(props) => props.height || "20px"};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: ${(props) => props.border || "10px"};
  background-color: #ffffff;
  border: 2px solid ${(props) => props.color || "#84ccd4"};
  ${(props) =>
    props.color === "#AFD3E2" &&
    `
    border-top-left-radius: ${props.borderTop};
    border-top-right-radius: ${props.borderTop};
    border-bottom-left-radius: ${props.borderBottom};
    border-bottom-right-radius: ${props.borderBottom};
  `}
  color: ${(props) => props.color || "#84ccd4"};
  font-weight: 700;
  font-size: ${(props) => props.fontSize || "16px"};
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  z-index: 99;
`;
