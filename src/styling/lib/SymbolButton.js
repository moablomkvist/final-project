import styled from "styled-components";

export const SymbolButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: none;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  margin-top: 5px;
  padding: 10px;

  &:focus {
    outline: transparent;
    background: #a4a99b;
  }

  &:hover {
    background: #a4a99b;
  }
`;
