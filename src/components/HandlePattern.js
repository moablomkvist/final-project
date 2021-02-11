import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { patternReducer } from "../reducers/patternReducer";
import { favouriteReducer } from "../reducers/favouriteReducer"

import { Button } from "../styling/lib/Button"
import { FavouriteButton } from "styling/lib/FavouriteButton"

export const HandlePattern = () => {
  const dispatch = useDispatch(); //store all the patterns
  const patterns = useSelector((store) => store.patternReducer.all);
  const accessToken = useSelector((store) => store.userReducer.login.accessToken);
  
  const PATTERNS_URL = "https://knitting-circle.herokuapp.com/patterns";

  let history = useHistory();
  const handleDeleteSuccess = () => {
    history.go();
  };

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
    //how to store the patterns in Redux store.
  }, [dispatch]); //for not continuously updating. Gets depending on this variable.


  const handleDeletePattern = (_id) => {
    fetch(`https://knitting-circle.herokuapp.com/patterns/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not delete pattern");
        }
        console.log('success')
        return res.json()
      })
      .then((json) => handleDeleteSuccess(json))
      .catch((err) => console.log("error:", err));
  };

  return (
    <>
    <FilterContainer>
      <FilterLink><Link to="/">All patterns</Link></FilterLink>
      <FilterLink>/</FilterLink>
      <FilterLink><Link to="/favourite-patterns">Favourites</Link></FilterLink>
  </FilterContainer>

    <PatternPage>
      {patterns.map((pattern) => (
        <PatternCard key={pattern._id}>
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
              <TimeDetails>{moment(pattern.createdAt).fromNow()}</TimeDetails>
            </PatternDetailsContainer>
            <SavePatternContainer>
            <FavouriteButton className="fav-button" 
              onClick={() => dispatch(favouriteReducer.actions.addFavourite(pattern))}>
              <img src="/assets/star.svg" alt="favourite-star" aria-label="star"/>
            </FavouriteButton>
            </SavePatternContainer>
          </PatternTextWrapper>

          <Button className="delete-button" onClick={() => {handleDeletePattern(pattern._id);}}>
          <img src="../assets/trash-2.svg" alt="trash-delete"/>

          </Button>
        </PatternCard>
      ))}
    </PatternPage>
  </>
  );
  };

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  margin: 20px;
  border-bottom: 2px dashed #c3c9b7;
`

const FilterLink = styled.p`
  font-size: 20px;
`

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
`

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

const TimeDetails = styled.p`
  margin: 40px 10px 0;
  font-size: 16px;
  font-weight: 300;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const SavePatternContainer = styled.section`
  display: flex;
  justify-content: right;
  font-family: 'Fraunces', serif;
  font-weight: 400;
  width: 25%;
`
