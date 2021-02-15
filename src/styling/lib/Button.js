import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  width: 100%;
  box-shadow: 0 2px 10px #949899;
  border-radius: 4px;
  border: none;
  padding: 10px;
  margin: 20px 0;
  background: #a4a99b;
  color: #fff;
  font-size: 14px;
  letter-spacing: 1px;
  font-family: 'Josefin Slab', serif;
  text-align: center;
  transition-duration: 0.4s;
  overflow: hidden;

  &:hover {
    background: #767a6e;
    box-shadow: 0px 2px 10px 5px #949899;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }

  &.login-button {
    width: 40%;
    margin-bottom: 5px;

    &:hover {
      background: #a88979;
    }
  }

  &.members-button {
    background: #f3eadf;
    color: black;
    font-weight: bold;
  
    &:hover {
      background: #a88979;
    }

    @media (min-width: 667px) {
      font-size: 18px;
      width: 50%;
      padding: 15px;
      border-radius: 4px;
    }
  }

  &.share-button {
    margin-bottom: 5px;
    width: 40%;
    
    &:hover {
      background: #a88979;
    }
  }

  &.logout {
    padding: 0;
    margin: 0;
    color: #5e3d2c;
    font-family: 'Fraunces', serif;
    background: none;
    box-shadow: none;
    border-radius: none;
    text-decoration: underline;
      
    &:hover {
      text-decoration: none;
    }
  
    @media (min-width: 667px) and (max-width: 1024px) {
      font-size: 14px;
    }
  }

  &.symbol-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 5px 0 0 0;
    box-shadow: none;
    overflow: hidden;
    position: auto;
    
    &:focus {
      outline: transparent;
    }
      
    &:hover {
      box-shadow: 0px 2px 10px 5px #a4a99b;
      background: #a4a99b;
    }
  }

  &.delete-button {
    margin: 10px;
    width: 20%;
  }

`
