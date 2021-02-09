import styled from 'styled-components'

export const Header = styled.header `
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0px;
  background: #cba892;
  text-align: center;
  
  & .head-title {
    margin: 15px 0 5px 0;
    font-weight: 700;
    font-size: 55px;
    text-transform: uppercase;
  }

  & .sub-title {
    font-size: 10px;
    font-weight: normal;
    margin-top: 15px;
  }
`; 
