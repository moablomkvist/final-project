import React from 'react'
import styled from 'styled-components'


export const Footer = () => {
  return (
    <FooterContainer>
      <h3>Knitting Circle</h3>
      <InfoContainer>
      <h4>About</h4>
      <p>We are the virtual knitting circle. Share free patterns and start knitting.</p>
      </InfoContainer>
      <InfoContainer>
      <h4>Contact us</h4>
      </InfoContainer>
      <InfoContainer>
        <ListContainer>
        <h4>Knitting World</h4>
          <List >
              <a href="https://www.ravelry.com/" target="_blank" rel="noopener noreferrer">
              <Icon src="../assets/RavelrySecondaryLogo2020-Color.png" alt="Ravelry"></Icon>
              </a>
          </List>
        </ListContainer>
      </InfoContainer>
    </FooterContainer>
  )};

  const FooterContainer = styled.footer `
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 0px;
    background: #cba892;
    text-align: center;
`; 
  const InfoContainer = styled.section`
    width: 70%;

  `;
  const ListContainer = styled.ul`
    list-style: none;
    padding: 0;
`;
  const List = styled.li`
    list-style: none;
  `;
  const Icon = styled.img`
    width: 20%;
`;




