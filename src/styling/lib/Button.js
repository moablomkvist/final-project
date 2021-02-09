import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  width: 100%;
  box-shadow: 0 2px 10px #949899;
  border-radius: 4px;
  border: none;
  padding: 10px;
  margin: 20px 0;
  background: #5E6572;
  color: #fff;
  font-size: 14px;
  letter-spacing: 1px;
  font-family: 'Josefin Slab', serif;
  text-align: center;
  transition-duration: 0.4s;
  overflow: hidden;

  &:hover {
    background: #a88979;
    box-shadow: 0px 2px 10px 5px #949899;
  }

  &.delete-button {
    width: 25%;
    background: none;
    margin-top: 20px;
    margin-left: 10px;
    margin-bottom: 0px;
  }

  &.members-button {
    background-color: #5e6572;
    border: none;
    color: #fff;
    font-family: "Josefin Slab", serif;
    padding: 10px;
    width: 40%;
    text-align: center;
    transition-duration: 0.4s;
    overflow: hidden;
    box-shadow: 0 2px 10px #949899;
    border-radius: 4px;
  
    &:hover {
      background: #a88979;
      box-shadow: 0px 2px 10px 5px #949899;
    }
  }

  }
`