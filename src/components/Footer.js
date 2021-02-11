import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { Logout } from 'components/Logout'

export const Footer = () => {
  const accessToken = useSelector((store) => store.userReducer.login.accessToken);

  return (
    <FooterContainer>
        <Icon src="../assets/knit-2923687_640.png" alt="Logo"></Icon>
      <InfoContainer>
        <h3>Slow Fashion</h3>
      </InfoContainer>
      <InfoContainer>
        <p>We are the virtual knitting circle. Share free patterns and start knitting.</p>
      </InfoContainer>
      <InfoContainer>
        <Copyright>© Moa Blomkvist & Caroline Birgersson</Copyright>
      </InfoContainer>
      {accessToken &&
        <Logout />}
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
    @media (min-width: 667px) and (max-width: 1024px) {
    }
    @media (min-width: 1025px) {
      flex-direction: row;
    }

`; 

  const InfoContainer = styled.section`
    width: 100%;
    @media (min-width: 667px) and (max-width: 1024px) {
      width: 50%;
    }
    @media (min-width: 1025px) {
      
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

  const Copyright = styled.p`
  font-size: 10px;
  `;




