import styled from "styled-components"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  &.post-form {

    @media (min-width: 768px) {
      width: 50%;
    }
`;

export const Input = styled.input`
  margin: 5px 0;
  width: 100%;
  padding: 8px;
  border: 0;
  opacity: 0.3;
  box-shadow: 0 0 15px 5px rgba(0,0,0,0.07);
  font-family: inherit;
  
  &:hover {
    box-shadow:0 0 4px rgba(0,0,0,0.12);
    opacity: 0.5;
  }

  &.post-input {
    border-radius: 5px;
    padding: 12px;

    @media (min-width: 768px) {
      font-size: 14px;
      width: 100%;
    }
  }
`;

export const Label = styled.label`
  font-family: 'Fraunces', serif;
  margin-top: 15px;
`

export const Container = styled.article`
  box-shadow: 0px 5px 1px -1px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  background: #83979d;
  border-radius: 6px;
  margin: 20px;
  padding: 20px;

  &.row-counter {
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px;
    font-family: 'Fraunces', serif;
  }

  &.post-container {
    background: none;
    box-shadow: none;
    display: flex;
    flex-direction: column;
  }
`;
