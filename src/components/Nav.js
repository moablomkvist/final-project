import React from "react";
import { NavLink } from "react-router-dom";
import { Header } from 'styling/lib/Header'
import styled from "styled-components";

import { Logout } from "components/Logout"

export const Nav = () => {
  return (
    <TopNavigation>
      <Header>
        <p className="sub-title">If im sitting, im knitting</p>
        <NavLink className="head-title" to="/">Knitting Circle</NavLink>
      </Header>
      <MenuLinkList>
        <MenuLink>
          <NavLink to="/post-pattern">Post pattern</NavLink>
        </MenuLink>

        <MenuLink>
          <NavLink to="/toolbox">Toolbox</NavLink>
        </MenuLink>

        <MenuLink>
          <NavLink to="/glossary">Glossary</NavLink>
        </MenuLink>
        
        <MenuLink>
          <NavLink to="/favourite-pattern">Favourite</NavLink>
        </MenuLink>
        
        <MenuLink>
          <Logout/>
        </MenuLink>
      </MenuLinkList>
    </TopNavigation>
  );
};

const TopNavigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #cba892;
  font-family: "Fraunces", serif;
  margin: 0px;
  @media (min-width: 768px) {
    justify-content: center;
    padding: 20px 5px 40px 0;
  }
`;

const MenuLinkList = styled.ul`
  display: flex;
  list-style: none;
  margin: 5px 0px;
  padding: 0;
  @media (min-width: 768px) {
    margin: 0;
  }
`;

const MenuLink = styled.li`
  margin: 10px;
  font-size: 18px;
  &:hover {
    text-decoration: underline;
  }
`;