import styled from "styled-components"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 8px;
  width:100%;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 0;
  opacity: 0.3;
  box-shadow: 0 0 15px 5px rgba(0,0,0,0.07);
  font-family: inherit;
  
  &:hover {
    box-shadow:0 0 4px rgba(0,0,0,0.12);
    opacity: 0.5;
  }
`;

export const Container = styled.section`
  box-shadow: 0px 5px 1px -1px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  background-color: #83979d;
  border-radius: 6px;
  margin: 20px;
  padding: 20px;
`;
