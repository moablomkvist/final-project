import styled from "styled-components"

export const PatternCard = styled.article`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  
  @media (min-width: 768px) {
    width: 25%;
  }
`

export const PatternName = styled.h3`
  margin: 10px;
  font-size: 24px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`

export const PatternImage = styled.img`
  width: 100%;
`

export const PatternDetails = styled.p`
  margin: 10px;
  font-size: 18px;

  @media (min-width: 768px) {
    font-size: 24px;
  }

`