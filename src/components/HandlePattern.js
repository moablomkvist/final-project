import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import styled from "styled-components";

import { patternReducer } from "../reducers/patternReducer";
import { favouriteReducer } from "../reducers/favouriteReducer"


import { DeletePattern } from "components/DeletePattern" 
import { Filter } from "components/Filter"

import { Button } from "styling/lib/Button"

export const HandlePattern = () => {
  const dispatch = useDispatch(); //store all the patterns
  const patterns = useSelector((store) => store.patternReducer.all);
  
  // const accessToken = useSelector((store) => store.userReducer.login.accessToken)
  
  const PATTERNS_URL = "https://knitting-circle.herokuapp.com/patterns";

  useEffect(() => {
    fetch(PATTERNS_URL, {
      method: "GET",
      headers: { 
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not find your account.");
        } else {
          return res.json();
        }
      })
      .then((json) => dispatch(patternReducer.actions.setPatterns(json)));
  }, [dispatch]); //for not continuously updating. Gets depending on this variable.
  
  return (
  <>
    <Filter />
    <PatternPage>
      
      {patterns.map((pattern) => (
        <PatternCard key={pattern._id}>
            <PatternImageWrapper>
            <PatternName>{pattern.post}</PatternName>
            <a href={pattern.source} alt="pattern description">
              <PatternImage src={pattern.imageSource} alt="pattern" />
            </a>
          </PatternImageWrapper>

          <PatternTextWrapper>
            <PatternDetailsContainer>
              <PatternDetails>Yarn / {pattern.yarn}</PatternDetails>
              <PatternDetails>Needles / {pattern.needles}</PatternDetails>
              <TimeDetails>{moment(pattern.createdAt).fromNow()}</TimeDetails>
            </PatternDetailsContainer>
            <SymbolContainer>
                <DeletePattern pattern={pattern} />
                <Button className="symbol-button" 
                  onClick={() => dispatch(favouriteReducer.actions.addFavourite(pattern))}>
                  <img src="/assets/star.svg" alt="favourite-star" aria-label="star"/>
                </Button>  
            </SymbolContainer>
          </PatternTextWrapper>

        </PatternCard>
      ))}
    </PatternPage>
  </>
  );
  };

const PatternPage = styled.section`
  display: flex; 
  flex-wrap: wrap; 
  justify-content: space-between;
`
const PatternCard = styled.article`
  margin: 10px 0;
  border-bottom: 2px dashed #c3c9b7;
  padding-bottom: 20px;
  width: 100%;

  &:hover {
    border-bottom: 2px solid #c3c9b7;
  }

  @media (min-width: 667px) and (max-width: 1024px) {
    border: 2px dashed #c3c9b7;
    width: 45%;
    margin: 15px;

    &:hover {
      border: 2px solid #c3c9b7;
    }
  }
  
  @media (min-width: 1025px) {
    border: 2px dashed #c3c9b7;
    width: 30%;
    margin: 15px; 

    &:hover {
      border: 2px solid #c3c9b7;
    }
  }
`;

const PatternImageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
`

const PatternName = styled.h3`
  margin: 15px;
  font-size: 26px;
  text-transform: uppercase;

  @media (min-width: 667px) {
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
  width: 70%;
  margin-left: 10px;
  font-family: 'Fraunces', serif;
`

const PatternDetails = styled.p`
  margin: 10px;
  font-weight: 400;
  width: fit-content;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const TimeDetails = styled.p`
  margin: 40px 10px 0;
  font-size: 16px;
  font-weight: 300;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const SymbolContainer = styled.section`
  display: flex;
  justify-content: right;
`

