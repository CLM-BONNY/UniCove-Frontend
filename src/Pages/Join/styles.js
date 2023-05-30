import styled from "styled-components";

export const Wrap = styled.div`
  padding: 0px 20px;
  height: 100%;
`;

export const ProfileImg = styled.div`
  margin: 70px;
  display: flex;
  justify-content: center;
  > img {
    border-radius: 20px;
    width: 200px;
    height: 200px;
  }
`;

export const PlaceInput = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  > select {
    width: 100%;
    border: none;
    border-bottom: 2px solid #84ccd4;
    outline: none;
    padding: 12px 15px;
    font-size: 16px;
    appearance: none;
    -webkit-appearance: none;
    background: url("Images/Join/grayDown.svg") no-repeat 97% 50%/20px auto;
    &::-ms-expand {
      display: none;
    }
  }

  #placehold {
    color: gray;
  }

  .place {
    color: black;
  }
`;

export const Label = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #808080;
  margin-bottom: 5px;
`;

export const OuterButton = styled.div`
  margin: 10% 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
