import styled from "styled-components";

export const ContentTabBlock = styled.div`
  background-color: #ffffff;
  margin-bottom: ${(props) => props.marginBottom};
  height: 64px;
  .Imogi {
    width: 35px;
    height: 35px;
    margin-left: 10px;
    margin-right: 20px;
  }
  .Right {
    float: right;
  }
  display: flex;
  align-items: center;

  > div {
    display: flex;
    margin-left: auto;
  }

  div span {
    margin-right: 20px;
    color: gray;
  }
`;
