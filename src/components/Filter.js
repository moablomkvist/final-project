import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'

export const Filter = () => {
  return (
  <FilterContainer>
    <FilterLink><Link className="active-link" to="/">All patterns</Link></FilterLink>
    <FilterLink>/</FilterLink>
    <FilterLink><Link className="active-link" to="/favourite-patterns">Favourites</Link></FilterLink>
  </FilterContainer>
  )
}

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  margin: 20px;
  padding: 40px 0;
  position: sticky;
  background: #a4a99b;
  top: 0;
  margin: 0;
`

const FilterLink = styled.p`
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;

    &:focus {
      text-decoration: underline;
  }

  @media (min-width: 1025px) {
    font-size: 30px;
  }
`