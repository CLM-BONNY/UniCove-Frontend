import styled from "styled-components";

export const Wrap = styled.div`
  padding: 20px 15px;
  border-bottom: 1px solid #e0e0e0;
`;

export const Title = styled.div`
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 700;
`;

export const Content = styled.div`
  margin-bottom: 10px;
  font-size: 14px;
`;

export const IconBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: #84ccd4;
  &:last-child {
    color: #0f4c75;
  }
`;

export const BottomBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;
