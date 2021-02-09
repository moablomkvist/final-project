import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";
import styled from "styled-components";

import { patternReducer } from "../reducers/patternReducer";

import { Button } from "../styling/lib/Button"

export const HandlePattern = () => {
  const dispatch = useDispatch(); //store all the patterns
  const patterns = useSelector((store) => store.patternReducer.all);
  const accessToken = useSelector((store) => store.userReducer.login.accessToken);

  const PATTERNS_URL = "http://localhost:8081/patterns";

  let history = useHistory();
  const handleDeleteSuccess = () => {
    history.go();
  };

  useEffect(() => {
    fetch(PATTERNS_URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
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
    fetch(`http://localhost:8081/patterns/${_id}`, {
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
        return console.log("deleted");
      })
      .then((json) => handleDeleteSuccess(json))
      .catch((err) => console.log("error:", err));
  };

  return (
    <PatternPage>
      {patterns.map((pattern) => (
        <PatternCard key={pattern._id}>

          <PatternImageWrapper>
            <PatternName>{pattern.post}</PatternName>
            <a href={pattern.source} alt="pattern description">
              <PatternImage src={pattern.imageSource} alt="pattern image" />
            </a>
          </PatternImageWrapper>

          <PatternTextWrapper>
            <PatternDetailsContainer>
              <PatternDetails>Yarn / {pattern.yarn}</PatternDetails>
              <PatternDetails>Needles / {pattern.needles}</PatternDetails>
              <TimeDetails>{moment(pattern.createdAt).fromNow()}</TimeDetails>
            </PatternDetailsContainer>

            <SavePatternContainer>
              <p>Save <span role="img" aria-label="yarn">🧶</span></p>
            </SavePatternContainer>
          </PatternTextWrapper>

          <Button className="delete-button" onClick={() => {handleDeletePattern(pattern._id);}}>Delete</Button>

        </PatternCard>
      ))}
    </PatternPage>
  );
};

const PatternPage = styled.section`
@media (min-width: 768px) {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
`

const PatternCard = styled.article`
  margin: 10px 0;
  border-bottom: 2px dotted white;
  padding-bottom: 20px;

  @media (min-width: 768px) {
    border: 2px dotted white;
    width: 28%;
    margin: 20px;
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
