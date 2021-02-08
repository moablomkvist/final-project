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
  font-family: 'Josefin Slab', serif;
  text-align: center;
  transition-duration: 0.4s;
  overflow: hidden;

  &:hover {
    background: #a88979;
    box-shadow: 0px 2px 10px 5px #949899;
  }
`