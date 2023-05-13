import styled from "styled-components";

export const TitleBlock = styled.div`
  color: gray;
  width: 413px;
  margin: 0 auto;
  margin-bottom: ${(props) => props.titlemarginBottom};
`;

export const InputBlock = styled.div`
  width: 413px;
  margin: 0 auto;
  > input {
    width: 413px;
    border: #84ccd4;
    margin: 0 auto;
    margin-bottom: ${(props) => props.marginBottom};
    border: 0;
    border-bottom: 1px solid #84ccd4;
  }
`;
