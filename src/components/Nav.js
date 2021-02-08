import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = () => {
  return (
    <TopNavigation>
      <Heading>
        <NavLink to='/'>Knitting Circle</NavLink>
      </Heading>

      <MenuLinkList>
      <MenuLink>
          <NavLink to='/post-pattern'>Post pattern</NavLink>
        </MenuLink>

        <MenuLink>
          <NavLink to='/toolbox'>Toolbox</NavLink>
        </MenuLink>

        <MenuLink>
          <NavLink to='/glossary'>Glossary</NavLink>
        </MenuLink>
      </MenuLinkList>
    </TopNavigation>
  )
}

const TopNavigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #cba892;
  font-size: 18px;
  font-family: 'Fraunces', serif;
  margin: 0px;

  @media (min-width: 768px) {
    justify-content: left;
    padding: 20px 5px 40px 0;
  }
`

const Heading = styled.h1`
  margin: 15px 0 5px 0;
  font-weight: 700;
  font-size: 55px;
  text-align: center;
  text-transform: uppercase;
`

const MenuLinkList = styled.ul`
  display: flex;
  list-style: none;
  margin: 5px 0px 0px 0px;
  padding: 0;

  @media (min-width: 768px) {
    margin: 0;
  }
`

const MenuLink = styled.li`
  margin: 10px;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`