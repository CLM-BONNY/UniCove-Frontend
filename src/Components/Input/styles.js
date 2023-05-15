import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: ${(props) => props.top || "20px"};
`;

export const TitleBlock = styled.div`
  color: gray;
  width: 413px;
  margin: 0 auto;
  margin-bottom: ${(props) => props.titlemarginBottom};
  font-size: 13px;
`;

export const InputBlock = styled.div`
  width: 413px;
  margin: 0 auto;
  > input {
    width: 413px;
    /* border: #84ccd4; */
    margin: 0 auto;
    margin-bottom: ${(props) => props.marginBottom};
    border: 0;
    /* border-bottom: ${(props) => props.borderSize || "2px"} solid
    border: ${(props) => props.borderColor || "#84ccd4"}; */
    border-bottom: 2px solid ${(props) => props.borderColor || "#84ccd4"};
    /* border-bottom: 2px solid #84ccd4; */
  }
  input::placeholder {
    color: ${(props) => props.color};
  }
`;
