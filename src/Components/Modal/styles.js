import styled from "styled-components";
import Modal from "styled-react-modal";

export const TypeModal = Modal.styled`
  background-color: none;
`;

export const IconBlock = styled.div`
  display: flex;
  align-items: center;
  &:last-child {
    right: 20px;
    float: right;
    position: absolute;
  }
`;

export const ButtonBlock = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, 0%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
