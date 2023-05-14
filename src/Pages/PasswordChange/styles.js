import styled, { css } from "styled-components";

export const Wrap = styled.div`
  padding: 60px 20px 0;
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const Back = styled.img`
  display: inline-block;
  width: 14px;
  height: 25px;
  margin-top: 10px;
  margin-left: 10px;
`;

export const Title = styled.div`
  display: inline-block;
  position: absolute;
  left: 40%;
  margin: 10px auto 0px auto;
`;

export const Set = styled.button`
  border-radius: 20px;
  background-color: #84ccd4;
  border: none;
  color: #ffffff;
  width: 84px;
  height: 47.35px;
  margin-top: 10px;
  margin-right: 10px;
`;

export const PresentPasswordInput = styled.div`
  width: 413px;
  border: #84ccd4;
  margin: 0 auto;
  margin-bottom: 30px;
  border: 0;
  border-bottom: 1px solid #84ccd4;
`;

export const NewPasswordInput = styled.div`
  width: 413px;
  border: #84ccd4;
  margin: 0 auto;
  margin-bottom: 30px;
  border: 0;
  border-bottom: 1px solid #84ccd4;
`;

export const NewPasswordCheckInput = styled.div`
  display: block;
  width: 413px;
  border: none;
  border-bottom: 1px solid #84ccd4;
  outline: none;
  margin: 0 auto;
  margin-bottom: 30px;
`;

export const Label = styled.div`
  width: 413px;
  margin: 0 auto;
  margin-bottom: 10px;
  color: gray;
`;
