import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'

export const Filter = () => {
  return (
  <FilterContainer>
    <FilterLink><Link to="/">All patterns</Link></FilterLink>
    <FilterLink>/</FilterLink>
    <FilterLink><Link to="/favourite-patterns">Favourites</Link></FilterLink>
  </FilterContainer>
  )
}

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  margin: 20px;
  border-bottom: 2px dashed #c3c9b7;
  position: sticky;
  background: #d1b8ab;
  top: 0;
  margin: 0;
`

const FilterLink = styled.p`
  font-size: 20px;
`