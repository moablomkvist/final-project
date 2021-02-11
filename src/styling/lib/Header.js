import styled from 'styled-components'

export const Header = styled.header `
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0px;
  background: #cba892;
  text-align: center;
  
  & .head-title {
    margin: 5px;
    padding-top: 20px;
    font-weight: 700;
    font-size: 55px;
    text-transform: uppercase;

    @media (min-width: 667px) and (max-width: 1024px) {
    }
      @media (min-width: 1025px) {
      height: 200px;
      font-size: 75px;
      
    }
  }

  & .sub-title {
    font-size: 10px;
    font-weight: normal;
    margin-top: 15px;

    @media (min-width: 667px) and (max-width: 1024px) {
    }
      @media (min-width: 1025px) {
        padding-top: 30px;
    }
  }
`; 
