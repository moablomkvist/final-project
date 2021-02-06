import styled from 'styled-components';


export const Button = styled.button`
  position: relative;
  background-color: #5E6572;
  border: none;
  color: #fff;
  font-family: 'Josefin Slab', serif;
  padding: 10px;
  width: 100%;
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
`