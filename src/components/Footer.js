import React from 'react'
import styled from 'styled-components'

export const Footer = () => {

  return (
    <FooterContainer>
      <InfoContainer>
        <Icon src="../assets/knit-2923687_640.png" alt="Logo"></Icon>
        <Info>We are the virtual knitting circle. Share free patterns and start knitting.</Info>
        <Copyright>© Moa Blomkvist & Caroline Birgersson</Copyright>
      </InfoContainer>
    </FooterContainer>
  )};

  const FooterContainer = styled.footer `
    padding: 20px;
    width: 100%;
    margin: 0px;
    background: #f3eadf;
      @media (min-width: 667px) and (max-width: 1024px) {

      }
    @media (min-width: 1025px) {
      height: 200px;
    }

`; 

  const InfoContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

      @media (min-width: 667px) and (max-width: 1024px) {
      }
      @media (min-width: 1025px) {
        
      }
  `;

  const Info = styled.p`
    @media (min-width: 667px) and (max-width: 1024px) {
      width: 50%;
    }
      @media (min-width: 1025px) {
      width: 27%;
      
    }
  `
  const Copyright = styled.p`
    font-size: 10px;
    @media (min-width: 667px) and (max-width: 1024px) {
      width: 50%;
    }
      @media (min-width: 1025px) {
      width: 27%;
      
    }
  `;

  const Icon = styled.img`
    width: 20%;
    @media (min-width: 667px) and (max-width: 1024px) {
      width: 15%;
    }
    @media (min-width: 1025px) {
      width: 8%;
    }
`;







