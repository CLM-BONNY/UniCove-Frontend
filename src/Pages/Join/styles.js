import styled, { css } from "styled-components";

export const Wrap = styled.div`
  padding: 0px 20px 0;
`;

export const ProfileImg = styled.div`
  width: 220px;
  top: 93px;
  left: 128px;
  margin: 20px auto 50px auto;
`;

export const PlaceInput = styled.div`
  margin-bottom: 50px;
  > select {
    display: block;
    width: 417px;
    height: 19px;
    border: 0;
    border-bottom: 2px solid #84ccd4;
    outline: none;
    margin: 0 auto;
    padding-left: 2px;
    margin-bottom: 30px;
    appearance: none;
    -webkit-appearance: none;
    background: url("Images/Join/grayDown.svg") no-repeat 97% 50%/20px auto;
  }
  > select::-ms-expand {
    display: none;
  }

  #placehold {
    color: gray;
  }

  .place {
    color: black;
  }
`;

export const Label = styled.div`
  width: 413px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 10px;
  color: gray;
  font-size: 13px;
`;

export const OuterButton = styled.div`
  display: flex;
  justify-content: center;
`;
