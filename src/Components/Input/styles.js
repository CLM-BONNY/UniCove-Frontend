import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  > span {
    font-weight: 600;
    font-size: 16px;
    color: #808080;
    margin-bottom: 5px;
  }
  > input {
    border: none;
    border-bottom: 2px solid ${(props) => props.borderColor || "#84ccd4"};
    padding: 12px 15px;
    color: ${(props) => props.color};
    font-size: 16px;
    font-weight: 400;
    &:hover,
    &:focus-visible {
      border: none;
      outline: none;
      border-bottom: 2px solid ${(props) => props.borderColor || "#84ccd4"};
    }
  }
  > textarea {
    height: 70vh;
    border: none;
    padding: 12px 15px;
    font-size: 16px;
    font-weight: 400;
    &:hover,
    &:focus-visible {
      border: none;
      outline: none;
    }
  }
`;
