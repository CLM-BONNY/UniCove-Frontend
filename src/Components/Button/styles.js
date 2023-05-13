import styled from "styled-components";

export const FullButton = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.border || "10px"};
  background-color: ${(props) => props.backgroundColor || "#84ccd4"};
  border: 2px solid ${(props) => props.backgroundColor || "#84ccd4"};
  color: ${(props) => props.backgroundColor || "#ffffff"};
  font-weight: 700;
  font-size: ${(props) => props.fontSize || "16px"};
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  > img {
    filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
  }
  > span {
    display: flex;
    flex-direction: column;
    text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.5);
    &:last-child {
      font-weight: 400;
      font-size: 12px;
    }
  }
`;

export const StrokeButton = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #ffffff;
  color: ${(props) => props.color || "#84ccd4"};
  border: 2px solid ${(props) => props.color || "#84ccd4"};
  font-weight: 700;
  font-size: ${(props) => props.fontSize || "16px"};
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  > img {
    filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
  }
  > span {
    display: flex;
    flex-direction: column;
    text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.5);
  }
`;
