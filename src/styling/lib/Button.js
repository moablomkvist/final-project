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

  @media (min-width: 768px) {
    font-size: 18px;
  }

  &.delete-button {
    width: 25%;
    background: none;
    margin: 20px 0px 0px 10px;
  }

  &.members-button {
    background: #f3eadf;
    color: black;
    font-weight: bold;
  
    &:hover {
      background: #a88979;
      box-shadow: 0px 2px 10px 5px #949899;
    }

    @media (min-width: 768px) {
      font-size: 18px;
      width: 50%;
      padding: 15px;
      border-radius: 4px;
    }
  }

  &.logout {
    padding: 0;
    margin: 0;
    color: black;
    font-weight: bold;
    text-decoration: underline;
    background: none;
  }

  &.login-button {
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
    margin-bottom: 5px;
  
    &:hover {
      background: #a88979;
      box-shadow: 0px 2px 10px 5px #949899;
    }
    @media (min-width: 667px) and (max-width: 1024px) {

    }
    @media (min-width: 1025px) {

    }
  }

  &.share-button {
    background: #a4a99b;
    border: 1.5px dotted white;
    color: #fff;
    font-family: "Josefin Slab", serif;
    padding: 10px;
    width: 40%;
    text-align: center;
    transition-duration: 0.4s;
    overflow: hidden;
    box-shadow: 0 2px 10px #949899;
    border-radius: 4px;
    margin-bottom: 5px;
    
    &:hover {
      background: #a88979;
      box-shadow: 0px 2px 10px 5px #949899;
    }
  }
}
`