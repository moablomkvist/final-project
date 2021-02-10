import React from 'react'
import styled from 'styled-components'


export const Footer = () => {
  return (
    <FooterContainer>
        <Icon src="../assets/knit-2923687_640.png" alt="Logo"></Icon>
        <InfoContainer>
      <p>We are the virtual knitting circle. Share free patterns and start knitting.</p>
      </InfoContainer>
      <InfoContainer>
      <h3>"Knit happens!"</h3>
      </InfoContainer>
      <InfoContainer>
        <Copyright>© Moa Blomkvist & Caroline Birgersson</Copyright>
      </InfoContainer>
    </FooterContainer>
  )};

  const FooterContainer = styled.footer `
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 0px;
    background: #cba892;
    text-align: center;
`; 

  const InfoContainer = styled.section`
    width: 100%;
  `;

  const Icon = styled.img`
    width: 20%;
`;

  const Copyright = styled.p`
  font-size: 10px;
  `;




