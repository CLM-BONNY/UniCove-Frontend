import styled, { css } from "styled-components";

export const Wrap = styled.div`
  padding: 0px 20px 0;
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
  margin-top: 10px;
  margin-left: 10px;
`;

export const Title = styled.div`
  display: inline-block;
  position: absolute;
  left: 45%;
  margin: 10px auto 0px auto;
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

export const ProfileImg = styled.div`
  width: 220px;
  top: 93px;
  left: 128px;
  margin: 20px auto 100px auto;
`;

export const Name = styled.p`
  width: 413px;
  border: #84ccd4;
  margin: 0 auto;
  margin-bottom: 30px;
  border: 0;
  border-bottom: 1px solid #84ccd4;
`;

export const Phone = styled.p`
  width: 413px;
  border: #84ccd4;
  margin: 0 auto;
  margin-bottom: 30px;
  border: 0;
  border-bottom: 1px solid #84ccd4;
`;

export const Place = styled.p`
  display: block;
  width: 413px;
  border: none;
  border-bottom: 1px solid #84ccd4;
  outline: none;
  margin: 0 auto;
  margin-bottom: 30px;
`;

export const Id = styled.p`
  width: 413px;
  border: #84ccd4;
  margin: 0 auto;
  margin-bottom: 100px;
  border: 0;
  border-bottom: 1px solid #84ccd4;
`;

export const Label = styled.div`
  width: 413px;
  margin: 0 auto;
  margin-bottom: 10px;
  color: gray;
`;
