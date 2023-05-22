import styled from "styled-components";

export const Wrap = styled.div`
  margin: ${(props) => props.margin};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.gap || "10px"};
  > img {
    width: ${(props) => props.imgWidth};
  }
`;