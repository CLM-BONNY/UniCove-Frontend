import styled, { css } from "styled-components";

export const Wrap = styled.div`
  padding: 60px 20px 0;
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Back = styled.img`
  display: inline-block;
  width: 14px;
  height: 25px;
  margin-top: 20px;
  margin-left: 10px;
`;

export const Title = styled.div`
  display: inline-block;
  position: absolute;
  left: 45%;
  margin: 20px auto 0px auto;
`;

export const ProfileImg = styled.div`
  width: 220px;
  top: 93px;
  left: 128px;
  margin: 20px auto 50px auto;
`;

export const Set = styled.button`
  border-radius: 20px;
  background-color: #0f4c75;
  border: none;
  color: #ffffff;
  width: 86px;
  height: 47.35px;
  position: absolute;
  top: 243px;
  left: 292px;
`;

export const NameInput = styled.div`
  width: 413px;
  border: #84ccd4;
  margin: 0 auto;
  margin-bottom: 30px;
  border: 0;
  border-bottom: 1px solid #84ccd4;
`;

export const PhoneInput = styled.div`
  width: 413px;
  border: #84ccd4;
  margin: 0 auto;
  margin-bottom: 30px;
  border: 0;
  border-bottom: 1px solid #84ccd4;
`;

export const PlaceInput = styled.select`
  display: block;
  width: 413px;
  border: none;
  border-bottom: 2px solid #84ccd4;
  color: gray;
  outline: none;
  margin: 0 auto;
  margin-bottom: 30px;
`;

export const IdInput = styled.div`
  width: 413px;
  border: #84ccd4;
  margin: 0 auto;
  margin-bottom: 30px;
  border: 0;
  border-bottom: 1px solid #84ccd4;
`;

export const PasswordInput = styled.div`
  width: 413px;
  border: #84ccd4;
  margin: 0 auto;
  margin-bottom: 30px;
  border: 0;
  border-bottom: 1px solid #84ccd4;
`;

export const PasswordCheck = styled.div`
  width: 413px;
  border: #84ccd4;
  margin: 0px auto 100px auto;
  margin-bottom: 100px;
  border: 0;
  border-bottom: 1px solid #84ccd4;
`;

export const ButtonBlock = styled.button`
  display: flex;
  justify-content: center;
  border-radius: 10px;
  background-color: #84ccd4;
  color: #ffffff;
  width: 434px;
  height: 63px;
  line-height: 63px;
  margin: 0px auto 20px auto;
  border: none;
`;

export const BackButtonBlock = styled.button`
  display: flex;
  justify-content: center;
  margin: 0px auto 50px auto;
  border-radius: 10px;
  background-color: #ffffff;
  color: #84ccd4;
  width: 434px;
  height: 63px;
  line-height: 63px;
  border-color: #84ccd4;
`;

export const Label = styled.div`
  width: 413px;
  margin: 0 auto;
  margin-bottom: 10px;
  color: gray;
  font-size: 13px;
`;
