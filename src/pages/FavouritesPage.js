import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { favouriteReducer } from 'reducers/favouriteReducer';
import { Button } from 'styling/lib/Button'

export const FavouritesPage = () => {
  const dispatch = useDispatch()
  const patterns = useSelector((store) => store.favouriteReducer.items)

  
  return (
    <PatternPage>
      {patterns.map((pattern) => (
        <PatternCard key={pattern._id} >
          <PatternImageWrapper>
          <PatternName>{pattern.post}</PatternName>
            <a href={pattern.source} alt="pattern description">
              <PatternImage src={pattern.imageSource} alt="patter" />
            </a>
          </PatternImageWrapper>
          <PatternTextWrapper>
          <PatternDetailsContainer>
            <PatternDetails>Yarn / {pattern.yarn}</PatternDetails>
            <PatternDetails>Needles / {pattern.needles}</PatternDetails>
          </PatternDetailsContainer>
          </PatternTextWrapper>
        <Button className="delete-button" type="button" onClick={() => dispatch(favouriteReducer.actions.deleteFavourite(pattern))}>
          <img src="../assets/trash-2.svg" alt="trash-delete"/>
        </Button>
        </PatternCard>
      ))}
    </PatternPage>
  )
};

const PatternPage = styled.section`
  display: flex; 
  flex-wrap: wrap; 
`

const PatternCard = styled.article`
  margin: 10px 0;
  border-bottom: 2px dashed #c3c9b7;
  padding-bottom: 20px;
  width: 100%;

  @media (min-width: 667px) and (max-width: 1024px) {
    border: 2px dashed #c3c9b7;
    width: 45%;
    margin: 15px;
  }
  @media (min-width: 1025px) {
    border: 2px dashed #c3c9b7;
    width: 30%;
    margin: 15px; 
  }
`;

const PatternImageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
`;

const PatternName = styled.h3`
  margin: 15px;
  font-size: 26px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

const PatternImage = styled.img`
  width: 100%;
`;

//Everything below the image
const PatternTextWrapper = styled.section`
  display: flex;
`

const PatternDetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 75%;
  margin-left: 10px;
  font-family: 'Fraunces', serif;
`

const PatternDetails = styled.p`
  margin: 10px;
  font-size: 18px;
  font-weight: 400;
  width: fit-content;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
